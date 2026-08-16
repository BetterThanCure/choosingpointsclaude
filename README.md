# Choosing Points

Support for life. Choosing Points helps people notice, understand, and
carry forward the quiet moments that change everything — not just the
loud ones.

Stack: Next.js (App Router) · TypeScript · React · Tailwind CSS ·
Neon (Postgres) + Drizzle ORM · Neon Auth (Managed Better Auth) ·
Vercel Blob · Vercel.

## Project structure

```
src/app/(marketing)/   Public site — home, how it works, stories, Kéya, ELK, etc.
src/app/(member)/      Signed-in member area — onboarding, dashboard, journal, etc.
src/app/admin/         Protected admin console architecture.
src/app/auth/          Neon Auth sign-in/sign-up/magic-link/etc. views.
src/app/account/       Neon Auth account settings/security views.
src/app/api/auth/      Neon Auth API route (proxies to your Neon Auth instance).
src/components/        Shared layout and feature components.
src/lib/db/            Neon client (Drizzle) and schema — the source of truth for the database.
src/lib/blob.ts        Vercel Blob upload/delete helpers.
src/lib/auth/          Neon Auth server (createNeonAuth) and client (createAuthClient) instances.
src/proxy.ts           Route protection for the member area (Next.js 16's renamed middleware).
drizzle/               Generated, version-controlled SQL migrations.
```

This repository is the long-term codebase for Choosing Points — every
milestone builds on it directly, there is no separate prototype to
migrate from later.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in Neon / Neon Auth / Blob values
npm run dev
```

Open http://localhost:3000. The site runs and builds even before
`NEON_AUTH_BASE_URL` is set — sign-in requests just get a 503 from
`/api/auth/*` until it's configured.

## Environment variables

Set these in `.env.local` for local development and in the Vercel
project's Environment Variables settings for Preview/Production. See
`.env.example` for the full list. `NEON_AUTH_COOKIE_SECRET` is
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

User identity lives in Neon Auth's `neon_auth` schema (`user`,
`session`, `account`, `verification` tables), managed by Neon — this
codebase doesn't migrate or own those tables. `user_id` columns
elsewhere are plain text with no Drizzle-managed foreign key into
them; see the comment at the top of `src/lib/db/schema.ts`.

## Authentication (Neon Auth — Managed Better Auth)

Neon Auth is already enabled for this project (confirmed in the Neon
console — "Serverless authentication that branches with your
database. Powered by Better Auth."). Only two env vars are needed to
turn it on here:

1. In the Neon console, open this project → **Auth** tab →
   **Configuration**, and copy the **Auth Base URL**.
2. Set that as `NEON_AUTH_BASE_URL`, and set `NEON_AUTH_COOKIE_SECRET`
   to any random 32+ character string (`openssl rand -base64 32`), in
   `.env.local` and in Vercel's Environment Variables.
3. Redeploy. Sign-in/sign-up at `/auth/sign-in` and `/auth/sign-up`
   start working, and the member area
   (`src/app/(member)/layout.tsx` + `src/proxy.ts`) starts redirecting
   signed-out visitors there instead of showing the preview banner.

The client (`src/lib/auth/client.ts`) always talks to this app's own
`/api/auth/*` route, which proxies to Neon Auth server-side — so the
UI never needs a public/client-side env var, only the two server-only
ones above.

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
