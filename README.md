# Choosing Points

Support for life. Choosing Points helps people notice, understand, and
carry forward the quiet moments that change everything — not just the
loud ones.

Stack: Next.js (App Router) · TypeScript · React · Tailwind CSS ·
Neon (Postgres) + Drizzle ORM · Neon Auth (Stack Auth) · Vercel Blob ·
Vercel.

## Project structure

```
src/app/(marketing)/   Public site — home, how it works, stories, Kéya, ELK, etc.
src/app/(member)/      Signed-in member area — onboarding, dashboard, journal, etc.
src/app/admin/         Protected admin console architecture.
src/app/handler/       Neon Auth (Stack Auth) sign-in/sign-up/account routes.
src/components/        Shared layout and feature components.
src/lib/db/            Neon client (Drizzle) and schema — the source of truth for the database.
src/lib/blob.ts        Vercel Blob upload/delete helpers.
src/stack.ts           Neon Auth (Stack Auth) server app config.
drizzle/               Generated, version-controlled SQL migrations.
```

This repository is the long-term codebase for Choosing Points — every
milestone builds on it directly, there is no separate prototype to
migrate from later.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in Neon / Stack Auth / Blob values
npm run dev
```

Open http://localhost:3000. The site runs and builds even before Neon
Auth is configured — sign-in just shows a "check back shortly" state
until `NEXT_PUBLIC_STACK_PROJECT_ID` is set.

## Environment variables

Set these in `.env.local` for local development and in the Vercel
project's Environment Variables settings for Preview/Production. See
`.env.example` for the full list. `STACK_SECRET_SERVER_KEY` is
server-only — never expose it to the client or commit a real value.

## Database (Neon + Drizzle)

The schema lives in `src/lib/db/schema.ts`; generated SQL migrations
live in `drizzle/`, applied in order.

- **Generate a migration** after changing the schema (no DB connection
  needed):
  ```bash
  npx drizzle-kit generate
  ```
- **Apply migrations** to your Neon database:
  ```bash
  npx drizzle-kit migrate
  ```
- **Dashboard (no CLI needed):** open the Neon SQL Editor and run the
  contents of the files in `drizzle/` in order.

User identity lives in `neon_auth.users_sync`, a table Neon Auth
creates once enabled — this codebase doesn't migrate or own that
table. `user_id` columns elsewhere are plain text with no
Drizzle-managed foreign key into it; see the comment at the top of
`src/lib/db/schema.ts`.

## Authentication (Neon Auth / Stack Auth)

1. In the Neon console, open this project → **Auth** tab → **Enable**.
   This provisions a Stack Auth project and the `neon_auth.users_sync`
   table.
2. Copy the three keys it gives you into `.env.local` and into Vercel's
   Environment Variables: `NEXT_PUBLIC_STACK_PROJECT_ID`,
   `NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY`, `STACK_SECRET_SERVER_KEY`.
3. Redeploy. Sign-in/sign-up at `/handler/sign-in` and
   `/handler/sign-up` start working, and the member area
   (`src/app/(member)/layout.tsx`) starts redirecting signed-out
   visitors there instead of showing the preview banner.

## File storage (Vercel Blob)

In the Vercel project: **Storage → Create Database → Blob**, then
connect it to this project — `BLOB_READ_WRITE_TOKEN` is set
automatically. Use `src/lib/blob.ts` (`uploadFile` / `deleteFile`) from
server-only code.

## Deployment

`main` is the production branch. Every push to `main` deploys
automatically to the production Vercel URL; other branches get their
own preview deployment. See the Vercel project's Git integration
settings to confirm this is configured.

Before pushing to `main`:

```bash
npm run lint
npm run build
```
