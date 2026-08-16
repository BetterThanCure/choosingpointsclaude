-- Choosing Points — initial schema
-- Profiles, roles, EmotionalCharting, journal, stories, Kéya, Protector,
-- consent/privacy, ELK content, progress, and feedback.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------
-- Profiles & roles
-- ---------------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  avatar_url text,
  timezone text default 'UTC',
  onboarded_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create type public.app_role as enum ('member', 'protector', 'admin');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  role public.app_role not null default 'member',
  granted_at timestamptz not null default now(),
  unique (user_id, role)
);

-- ---------------------------------------------------------------------
-- EmotionalCharting
-- ---------------------------------------------------------------------

create table public.emotional_checkins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  feeling text not null,
  intensity smallint check (intensity between 1 and 10),
  notes text,
  created_at timestamptz not null default now()
);

create index emotional_checkins_user_created_idx
  on public.emotional_checkins (user_id, created_at desc);

-- ---------------------------------------------------------------------
-- ChoosingPoints journal
-- ---------------------------------------------------------------------

create table public.journal_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  title text,
  body text not null,
  occurred_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index journal_entries_user_occurred_idx
  on public.journal_entries (user_id, occurred_at desc);

-- ---------------------------------------------------------------------
-- Stories
-- ---------------------------------------------------------------------

create type public.story_status as enum ('draft', 'submitted', 'published');

create table public.stories (
  id uuid primary key default gen_random_uuid(),
  author_id uuid references auth.users (id) on delete set null,
  title text not null,
  body text not null,
  tag text,
  status public.story_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.story_reflections (
  id uuid primary key default gen_random_uuid(),
  story_id uuid not null references public.stories (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  reflection text not null,
  created_at timestamptz not null default now()
);

create table public.saved_stories (
  user_id uuid not null references auth.users (id) on delete cascade,
  story_id uuid not null references public.stories (id) on delete cascade,
  saved_at timestamptz not null default now(),
  primary key (user_id, story_id)
);

-- ---------------------------------------------------------------------
-- Resources
-- ---------------------------------------------------------------------

create table public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  url text,
  category text,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- Kéya
-- ---------------------------------------------------------------------

create table public.keya_conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  summary text,
  started_at timestamptz not null default now(),
  ended_at timestamptz
);

create type public.keya_message_role as enum ('user', 'keya', 'system');

create table public.keya_messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.keya_conversations (id) on delete cascade,
  role public.keya_message_role not null,
  content text not null,
  created_at timestamptz not null default now()
);

create index keya_messages_conversation_idx
  on public.keya_messages (conversation_id, created_at);

create table public.keya_observations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  conversation_id uuid references public.keya_conversations (id) on delete set null,
  category text,
  observation text not null,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- Protector
-- ---------------------------------------------------------------------

create type public.protector_status as enum ('pending', 'active', 'revoked');

create table public.protector_relationships (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references auth.users (id) on delete cascade,
  protector_id uuid references auth.users (id) on delete set null,
  protector_email text,
  protector_name text,
  status public.protector_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.protector_permissions (
  id uuid primary key default gen_random_uuid(),
  relationship_id uuid not null references public.protector_relationships (id) on delete cascade,
  permission_key text not null,
  enabled boolean not null default false,
  updated_at timestamptz not null default now(),
  unique (relationship_id, permission_key)
);

-- ---------------------------------------------------------------------
-- Consent & privacy
-- ---------------------------------------------------------------------

create table public.consent_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  consent_type text not null,
  granted boolean not null,
  granted_at timestamptz not null default now(),
  revoked_at timestamptz
);

create table public.privacy_preferences (
  user_id uuid primary key references auth.users (id) on delete cascade,
  share_stories_default boolean not null default false,
  allow_protector_notifications boolean not null default false,
  allow_keya_memory boolean not null default true,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- ELK (Emotional Learning Kits)
-- ---------------------------------------------------------------------

create table public.elk_kits (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.elk_content_blocks (
  id uuid primary key default gen_random_uuid(),
  kit_id uuid not null references public.elk_kits (id) on delete cascade,
  title text,
  body text,
  order_index integer not null default 0,
  created_at timestamptz not null default now()
);

create index elk_content_blocks_kit_order_idx
  on public.elk_content_blocks (kit_id, order_index);

-- ---------------------------------------------------------------------
-- Member progress & feedback
-- ---------------------------------------------------------------------

create table public.member_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  elk_kit_id uuid references public.elk_kits (id) on delete set null,
  milestone text not null,
  completed_at timestamptz,
  created_at timestamptz not null default now()
);

create type public.feedback_status as enum ('open', 'in_review', 'resolved');

create table public.feedback (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete set null,
  category text,
  message text not null,
  status public.feedback_status not null default 'open',
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- updated_at trigger helper
-- ---------------------------------------------------------------------

create function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();
create trigger set_updated_at before update on public.journal_entries
  for each row execute function public.set_updated_at();
create trigger set_updated_at before update on public.stories
  for each row execute function public.set_updated_at();
create trigger set_updated_at before update on public.protector_relationships
  for each row execute function public.set_updated_at();
create trigger set_updated_at before update on public.privacy_preferences
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------
-- New-user bootstrap: profile row + default role + default privacy prefs
-- ---------------------------------------------------------------------

create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id);
  insert into public.user_roles (user_id, role) values (new.id, 'member');
  insert into public.privacy_preferences (user_id) values (new.id);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.emotional_checkins enable row level security;
alter table public.journal_entries enable row level security;
alter table public.stories enable row level security;
alter table public.story_reflections enable row level security;
alter table public.saved_stories enable row level security;
alter table public.resources enable row level security;
alter table public.keya_conversations enable row level security;
alter table public.keya_messages enable row level security;
alter table public.keya_observations enable row level security;
alter table public.protector_relationships enable row level security;
alter table public.protector_permissions enable row level security;
alter table public.consent_records enable row level security;
alter table public.privacy_preferences enable row level security;
alter table public.elk_kits enable row level security;
alter table public.elk_content_blocks enable row level security;
alter table public.member_progress enable row level security;
alter table public.feedback enable row level security;

create function public.is_admin()
returns boolean
language sql
security definer set search_path = public
stable
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = auth.uid() and role = 'admin'
  );
$$;

-- Profiles: owner read/update, admins read all
create policy "profiles_select_own_or_admin" on public.profiles
  for select using (auth.uid() = id or public.is_admin());
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

-- Roles: owner + admin read, admin-only write
create policy "user_roles_select_own_or_admin" on public.user_roles
  for select using (auth.uid() = user_id or public.is_admin());
create policy "user_roles_admin_write" on public.user_roles
  for all using (public.is_admin()) with check (public.is_admin());

-- Owner-only tables (EmotionalCharting, journal, Kéya, consent, privacy)
create policy "emotional_checkins_owner" on public.emotional_checkins
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "journal_entries_owner" on public.journal_entries
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "keya_conversations_owner" on public.keya_conversations
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "keya_messages_owner" on public.keya_messages
  for all using (
    exists (
      select 1 from public.keya_conversations c
      where c.id = conversation_id and c.user_id = auth.uid()
    )
  ) with check (
    exists (
      select 1 from public.keya_conversations c
      where c.id = conversation_id and c.user_id = auth.uid()
    )
  );

create policy "keya_observations_owner" on public.keya_observations
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "consent_records_owner" on public.consent_records
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "privacy_preferences_owner" on public.privacy_preferences
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "member_progress_owner" on public.member_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Stories: public can read published; authors manage their own; admins all
create policy "stories_read_published" on public.stories
  for select using (status = 'published' or auth.uid() = author_id or public.is_admin());
create policy "stories_author_write" on public.stories
  for insert with check (auth.uid() = author_id);
create policy "stories_author_update" on public.stories
  for update using (auth.uid() = author_id or public.is_admin());

create policy "story_reflections_owner" on public.story_reflections
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "saved_stories_owner" on public.saved_stories
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Resources & ELK content: public read when published, admin manages
create policy "resources_read_published" on public.resources
  for select using (published or public.is_admin());
create policy "resources_admin_write" on public.resources
  for insert with check (public.is_admin());
create policy "resources_admin_update" on public.resources
  for update using (public.is_admin());
create policy "resources_admin_delete" on public.resources
  for delete using (public.is_admin());

create policy "elk_kits_read_published" on public.elk_kits
  for select using (published or public.is_admin());
create policy "elk_kits_admin_write" on public.elk_kits
  for all using (public.is_admin()) with check (public.is_admin());

create policy "elk_content_blocks_read" on public.elk_content_blocks
  for select using (
    exists (
      select 1 from public.elk_kits k
      where k.id = kit_id and (k.published or public.is_admin())
    )
  );
create policy "elk_content_blocks_admin_write" on public.elk_content_blocks
  for all using (public.is_admin()) with check (public.is_admin());

-- Protector: visible to the member and the linked protector account
create policy "protector_relationships_member" on public.protector_relationships
  for all using (auth.uid() = member_id) with check (auth.uid() = member_id);
create policy "protector_relationships_protector_read" on public.protector_relationships
  for select using (auth.uid() = protector_id);

create policy "protector_permissions_via_relationship" on public.protector_permissions
  for all using (
    exists (
      select 1 from public.protector_relationships r
      where r.id = relationship_id and r.member_id = auth.uid()
    )
  ) with check (
    exists (
      select 1 from public.protector_relationships r
      where r.id = relationship_id and r.member_id = auth.uid()
    )
  );

-- Feedback: members create/read their own, admins read all
create policy "feedback_insert_own" on public.feedback
  for insert with check (auth.uid() = user_id or user_id is null);
create policy "feedback_select_own_or_admin" on public.feedback
  for select using (auth.uid() = user_id or public.is_admin());
