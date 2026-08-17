<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Current Technology Verification Rule

Before introducing, replacing, upgrading, configuring, or architecting any
external framework, SDK, API, authentication provider, database
integration, AI SDK, cloud service, payment provider, storage provider, or
deployment integration in this repository, verify the implementation
against the provider's current official documentation first.

- Model training knowledge or remembered API patterns must not be treated
  as authoritative for third-party technologies. Providers change their
  recommended integration approach, package names, and APIs over time —
  what a model recalls may already be superseded.
- Current official documentation, plus the actual installed package's
  types/source, are the ground truth. If either conflicts with remembered
  model knowledge, the current implementation/documentation wins.
- Do not introduce deprecated, legacy, superseded, or maintenance-mode
  integrations into new code unless explicitly requested.
- For foundational architecture involving authentication, database,
  payments, privacy, security, storage, AI providers, or deployment,
  verification must happen before packages are installed or application
  code is modified — not afterward.
- When several integrations are possible, verify which implementation the
  provider currently recommends for new production applications.

This requirement applies to all future development sessions and all
coding agents working on this repository, not only Claude.
