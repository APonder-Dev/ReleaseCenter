# ReleaseCenter

Self-hosted platform that helps software teams prepare, review, approve,
publish, monitor, and audit GitHub releases.

ReleaseCenter integrates with real GitHub repositories through a GitHub App:
it discovers repositories, synchronizes pull requests and tags, generates
structured changelogs, recommends semantic versions, runs approval
workflows, and publishes Git tags and GitHub releases — with idempotent,
retryable background workers and a full audit trail.

> **Status:** Phase 1 — Monorepo Foundation. The workspace, app/package
> boundaries, and CI skeleton are in place. No feature phases have shipped
> yet. See [ROADMAP.md](./ROADMAP.md) for sequencing.

## Repository

- Owner: [Anthony Ponder](https://github.com/APonder-Dev)
- Repository: [APonder-Dev/ReleaseCenter](https://github.com/APonder-Dev/ReleaseCenter)

## Tech stack

| Layer          | Technologies                                                                          |
| -------------- | ------------------------------------------------------------------------------------- |
| Frontend       | Next.js, TypeScript, React, Tailwind CSS, TanStack Query, React Hook Form, Zod        |
| Backend        | NestJS, TypeScript, PostgreSQL, Prisma, Redis, BullMQ, Octokit, OpenAPI               |
| Infrastructure | pnpm workspaces, Turborepo, Docker Compose, GitHub Actions, Prometheus, OpenTelemetry |

## Monorepo layout

```
apps/
├── web/      Next.js frontend
├── api/      NestJS REST API
└── worker/   BullMQ background job worker

packages/
├── database/         Prisma schema, migrations, client
├── github-client/     GitHub App auth + Octokit integration
├── release-engine/    Release state machine, versioning, changelog engine
├── shared-types/      Shared TypeScript types and API contracts
├── validation/        Shared Zod schemas
├── observability/      Structured logging, metrics, tracing
├── security/          Encryption, webhook verification, redaction
└── ui/                Shared accessible React component primitives
```

## Getting started

Prerequisites: Node.js >= 20, pnpm >= 9, Docker (for local Postgres/Redis).

```bash
pnpm install
docker compose -f infrastructure/docker-compose.yml up -d
pnpm build
pnpm dev
```

## Development scripts

| Script                              | Description                               |
| ----------------------------------- | ----------------------------------------- |
| `pnpm build`                        | Build all apps and packages via Turborepo |
| `pnpm dev`                          | Run all apps in watch mode                |
| `pnpm lint`                         | Lint all apps and packages                |
| `pnpm typecheck`                    | Type-check all apps and packages          |
| `pnpm test`                         | Run all test suites                       |
| `pnpm format` / `pnpm format:check` | Format / verify formatting with Prettier  |

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) — system design and diagrams
- [SECURITY.md](./SECURITY.md) — security policy and reporting
- [CONTRIBUTING.md](./CONTRIBUTING.md) — contribution guidelines
- [ROADMAP.md](./ROADMAP.md) — implementation phases
- [CHANGELOG.md](./CHANGELOG.md) — release history
- [docs/](./docs/) — subsystem guides (GitHub App setup, release lifecycle,
  versioning policies, webhook processing, approval workflows, deployment,
  operations) and [docs/adr/](./docs/adr/) architecture decision records

## License

[MIT](./LICENSE) © Anthony Ponder
