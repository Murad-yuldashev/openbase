# 0002. Monorepo with pnpm workspaces

- Status: accepted
- Date: 2026-11-23

## Context

OpenBase consists of several deployable apps (API, realtime gateway, workers, console, demo)
and shared libraries (SDK, shared schemas and validation, CLI). Validation rules and types
must be identical on the server and the clients, and many changes touch several of these at once.

## Decision

Use a single repository with pnpm workspaces: `apps/*` for deployables and `packages/*` for
libraries. Internal packages are compiled to `dist/` and consumed through the `workspace:`
protocol. Shared dependency versions are defined once with pnpm catalogs.

## Alternatives considered

- **Polyrepo**: independent versioning, but a cross-cutting change needs coordinated
  releases across repositories.
- **npm or Yarn workspaces**: hoisting lets code import undeclared dependencies
  (phantom dependencies).
- **Nx or Turborepo now**: task orchestration and caching pay off once several packages
  build; to be revisited when CI is introduced.
- **Just-in-time internal packages** (exporting TypeScript source): no build step, but every
  consumer must compile them, which conflicts with the NestJS build.

## Consequences

- Cross-package changes are atomic: one commit, one review, one lockfile.
- Consumers need an up-to-date build of internal packages.
- CI will eventually need to build and test only what changed.
