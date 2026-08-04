# ADR-0001: pnpm workspaces + Turborepo for the monorepo

- Status: Accepted
- Date: 2026-08-04

## Context

ReleaseCenter is split across three deployable apps (`web`, `api`, `worker`)
and eight shared packages that must stay in lockstep (shared domain types,
validation schemas, the release engine, GitHub client, and observability
primitives are consumed by more than one app). We need dependency
management and a task runner that supports incremental, cached builds
across that graph without requiring a separate published-package release
cycle for internal changes.

## Decision

Use **pnpm workspaces** for dependency management (`workspace:*` protocol
for internal packages) and **Turborepo** for task orchestration
(`build`/`lint`/`typecheck`/`test`, with dependency-aware caching via
`dependsOn: ["^build"]`).

## Consequences

- Internal packages are consumed by source reference during development;
  each package still declares a `build` script so CI and production builds
  produce real compiled output.
- Adding a new app or package means adding it under `apps/*` or
  `packages/*` and declaring workspace dependencies explicitly — no
  separate registry publish step.
- Turborepo's remote caching can be enabled later without changing task
  definitions.
