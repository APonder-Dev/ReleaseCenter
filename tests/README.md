# tests/

Cross-package integration, API, worker, and end-to-end test suites live
here. Unit tests live alongside their source in each app/package (e.g.
`packages/release-engine/src/**/*.spec.ts`).

Planned layout, populated as each phase lands:

```
tests/
├── integration/     # DB + Redis + real Prisma client, mocked GitHub API
├── api/              # HTTP-level tests against apps/api
├── worker/            # BullMQ job execution and retry/idempotency tests
├── e2e/               # Full vertical-slice flows (install → sync → publish)
└── fixtures/          # Shared GitHub API response fixtures
```

No test suites exist yet — this is the Phase 1 (Monorepo Foundation)
skeleton. See ROADMAP.md for sequencing.
