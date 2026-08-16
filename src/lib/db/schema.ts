import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  smallint,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

/**
 * User identity lives in `neon_auth.users_sync`, a table Neon Auth
 * creates and manages once enabled in the Neon console. We don't
 * define or migrate that table here — it isn't ours to own — so
 * `userId` columns below are plain text (the Stack Auth user id) with
 * no Drizzle-managed foreign key. Once Neon Auth is enabled, a
 * follow-up migration can add
 * `references neon_auth.users_sync (id) on delete cascade`
 * as a hand-written SQL constraint for defense in depth; app-level
 * checks against the authenticated session already enforce ownership.
 */

export const appRole = pgEnum("app_role", ["member", "protector", "admin"]);
export const storyStatus = pgEnum("story_status", [
  "draft",
  "submitted",
  "published",
]);
export const keyaMessageRole = pgEnum("keya_message_role", [
  "user",
  "keya",
  "system",
]);
export const protectorStatus = pgEnum("protector_status", [
  "pending",
  "active",
  "revoked",
]);
export const feedbackStatus = pgEnum("feedback_status", [
  "open",
  "in_review",
  "resolved",
]);

const id = () => uuid("id").primaryKey().defaultRandom();
// A function, not a shared object literal: each pgTable() call needs its
// own column builder instances rather than reused references.
const timestamps = () => ({
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// ---------------------------------------------------------------------
// Profiles & roles
// ---------------------------------------------------------------------

export const profiles = pgTable("profiles", {
  userId: text("user_id").primaryKey(),
  displayName: text("display_name"),
  avatarUrl: text("avatar_url"),
  timezone: text("timezone").default("UTC"),
  onboardedAt: timestamp("onboarded_at", { withTimezone: true }),
  ...timestamps(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const userRoles = pgTable("user_roles", {
  id: id(),
  userId: text("user_id").notNull(),
  role: appRole("role").notNull().default("member"),
  grantedAt: timestamp("granted_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// ---------------------------------------------------------------------
// EmotionalCharting
// ---------------------------------------------------------------------

export const emotionalCheckins = pgTable(
  "emotional_checkins",
  {
    id: id(),
    userId: text("user_id").notNull(),
    feeling: text("feeling").notNull(),
    intensity: smallint("intensity"),
    notes: text("notes"),
    ...timestamps(),
  },
  (table) => [index("emotional_checkins_user_created_idx").on(table.userId, table.createdAt)],
);

// ---------------------------------------------------------------------
// ChoosingPoints journal
// ---------------------------------------------------------------------

export const journalEntries = pgTable(
  "journal_entries",
  {
    id: id(),
    userId: text("user_id").notNull(),
    title: text("title"),
    body: text("body").notNull(),
    occurredAt: timestamp("occurred_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    ...timestamps(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [index("journal_entries_user_occurred_idx").on(table.userId, table.occurredAt)],
);

// ---------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------

export const stories = pgTable("stories", {
  id: id(),
  authorId: text("author_id"),
  title: text("title").notNull(),
  body: text("body").notNull(),
  tag: text("tag"),
  status: storyStatus("status").notNull().default("draft"),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  ...timestamps(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const storyReflections = pgTable("story_reflections", {
  id: id(),
  storyId: uuid("story_id")
    .notNull()
    .references(() => stories.id, { onDelete: "cascade" }),
  userId: text("user_id").notNull(),
  reflection: text("reflection").notNull(),
  ...timestamps(),
});

export const savedStories = pgTable(
  "saved_stories",
  {
    userId: text("user_id").notNull(),
    storyId: uuid("story_id")
      .notNull()
      .references(() => stories.id, { onDelete: "cascade" }),
    savedAt: timestamp("saved_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [primaryKey({ columns: [table.userId, table.storyId] })],
);

// ---------------------------------------------------------------------
// Resources
// ---------------------------------------------------------------------

export const resources = pgTable("resources", {
  id: id(),
  title: text("title").notNull(),
  description: text("description"),
  url: text("url"),
  category: text("category"),
  published: boolean("published").notNull().default(false),
  ...timestamps(),
});

// ---------------------------------------------------------------------
// Kéya
// ---------------------------------------------------------------------

export const keyaConversations = pgTable("keya_conversations", {
  id: id(),
  userId: text("user_id").notNull(),
  summary: text("summary"),
  startedAt: timestamp("started_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  endedAt: timestamp("ended_at", { withTimezone: true }),
});

export const keyaMessages = pgTable(
  "keya_messages",
  {
    id: id(),
    conversationId: uuid("conversation_id")
      .notNull()
      .references(() => keyaConversations.id, { onDelete: "cascade" }),
    role: keyaMessageRole("role").notNull(),
    content: text("content").notNull(),
    ...timestamps(),
  },
  (table) => [index("keya_messages_conversation_idx").on(table.conversationId, table.createdAt)],
);

export const keyaObservations = pgTable("keya_observations", {
  id: id(),
  userId: text("user_id").notNull(),
  conversationId: uuid("conversation_id").references(
    () => keyaConversations.id,
    { onDelete: "set null" },
  ),
  category: text("category"),
  observation: text("observation").notNull(),
  ...timestamps(),
});

// ---------------------------------------------------------------------
// Protector
// ---------------------------------------------------------------------

export const protectorRelationships = pgTable("protector_relationships", {
  id: id(),
  memberId: text("member_id").notNull(),
  protectorId: text("protector_id"),
  protectorEmail: text("protector_email"),
  protectorName: text("protector_name"),
  status: protectorStatus("status").notNull().default("pending"),
  ...timestamps(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const protectorPermissions = pgTable("protector_permissions", {
  id: id(),
  relationshipId: uuid("relationship_id")
    .notNull()
    .references(() => protectorRelationships.id, { onDelete: "cascade" }),
  permissionKey: text("permission_key").notNull(),
  enabled: boolean("enabled").notNull().default(false),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// ---------------------------------------------------------------------
// Consent & privacy
// ---------------------------------------------------------------------

export const consentRecords = pgTable("consent_records", {
  id: id(),
  userId: text("user_id").notNull(),
  consentType: text("consent_type").notNull(),
  granted: boolean("granted").notNull(),
  grantedAt: timestamp("granted_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  revokedAt: timestamp("revoked_at", { withTimezone: true }),
});

export const privacyPreferences = pgTable("privacy_preferences", {
  userId: text("user_id").primaryKey(),
  shareStoriesDefault: boolean("share_stories_default")
    .notNull()
    .default(false),
  allowProtectorNotifications: boolean("allow_protector_notifications")
    .notNull()
    .default(false),
  allowKeyaMemory: boolean("allow_keya_memory").notNull().default(true),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// ---------------------------------------------------------------------
// ELK (Emotional Learning Kits)
// ---------------------------------------------------------------------

export const elkKits = pgTable("elk_kits", {
  id: id(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description"),
  published: boolean("published").notNull().default(false),
  ...timestamps(),
});

export const elkContentBlocks = pgTable(
  "elk_content_blocks",
  {
    id: id(),
    kitId: uuid("kit_id")
      .notNull()
      .references(() => elkKits.id, { onDelete: "cascade" }),
    title: text("title"),
    body: text("body"),
    orderIndex: integer("order_index").notNull().default(0),
    ...timestamps(),
  },
  (table) => [index("elk_content_blocks_kit_order_idx").on(table.kitId, table.orderIndex)],
);

// ---------------------------------------------------------------------
// Member progress & feedback
// ---------------------------------------------------------------------

export const memberProgress = pgTable("member_progress", {
  id: id(),
  userId: text("user_id").notNull(),
  elkKitId: uuid("elk_kit_id").references(() => elkKits.id, {
    onDelete: "set null",
  }),
  milestone: text("milestone").notNull(),
  completedAt: timestamp("completed_at", { withTimezone: true }),
  ...timestamps(),
});

export const feedback = pgTable("feedback", {
  id: id(),
  userId: text("user_id"),
  category: text("category"),
  message: text("message").notNull(),
  status: feedbackStatus("status").notNull().default("open"),
  ...timestamps(),
});
