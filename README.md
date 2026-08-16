# Choosing Points

Support for life. Choosing Points helps people notice, understand, and
carry forward the quiet moments that change everything — not just the
loud ones.

Stack: Next.js (App Router) · TypeScript · React · Tailwind CSS ·
Supabase (Postgres, Auth, Storage, RLS) · Vercel.

## Project structure

```
src/app/(marketing)/   Public site — home, how it works, stories, Kéya, ELK, etc.
src/app/(member)/      Signed-in member area — onboarding, dashboard, journal, etc.
src/app/admin/         Protected admin console architecture.
src/components/        Shared layout and feature components.
src/lib/supabase/      Browser, server, and admin Supabase clients.
supabase/migrations/   Version-controlled database schema.
```

This repository is the long-term codebase for Choosing Points — every
milestone builds on it directly, there is no separate prototype to
migrate from later.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in Supabase project values
npm run dev
```

Open http://localhost:3000.

## Environment variables

Set these in `.env.local` for local development and in the Vercel
project's Environment Variables settings for Preview/Production. See
`.env.example` for the full list. `SUPABASE_SERVICE_ROLE_KEY` is
server-only — never expose it to the client or commit a real value.

## Database

The schema lives in `supabase/migrations/`, applied in order. To apply
it to a Supabase project:

- **Dashboard (no CLI needed):** open the project's SQL Editor and run
  the contents of `supabase/migrations/0001_init.sql`.
- **CLI:**
  ```bash
  supabase login
  supabase link --project-ref <your-project-ref>
  supabase db push
  ```

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
