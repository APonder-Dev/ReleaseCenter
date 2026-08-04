# Roadmap

ReleaseCenter is built in phases. Each phase should be functionally
complete and reviewed before the next begins. The initial vertical slice
(install → discover → sync PRs → create candidate → generate changelog →
recommend version → approve → publish → audit) is the priority; broad
integration surface area is deliberately deferred until that slice works
reliably.

- [x] **Phase 1 — Monorepo Foundation**: pnpm workspace, Turborepo, app/package
      boundaries, shared config, CI skeleton, documentation skeleton.
- [ ] **Phase 2 — Database Design**: Prisma schema for the full domain model.
- [ ] **Phase 3 — Authentication and Authorization**: accounts, sessions,
      roles, organization boundaries, repository access.
- [ ] **Phase 4 — GitHub App Integration**: installation flow, token
      lifecycle, repository discovery, webhook verification.
- [ ] **Phase 5 — Repository Synchronization**: metadata, PRs, tags,
      releases, contributors, sync jobs.
- [ ] **Phase 6 — Release State Machine**: release candidates, validated
      transitions, audit events.
- [ ] **Phase 7 — Changelog Engine**: categorization, conventional commits,
      labels, contributors, manual edit preservation.
- [ ] **Phase 8 — Semantic Versioning**: recommendations, conflict
      prevention, pre-releases, policy rules, overrides.
- [ ] **Phase 9 — Approval Workflows**: approval requests, rejections,
      expiration, invalidation, emergency overrides.
- [ ] **Phase 10 — Publication Workers**: tag/release creation, artifacts,
      idempotency, retry recovery.
- [ ] **Phase 11 — Web Application**: dashboard, repository pages, candidate
      creation, review, approvals, publication.
- [ ] **Phase 12 — Observability and Operations**: logs, metrics, tracing,
      health endpoints, failed-job management.
- [ ] **Phase 13 — Hardening**: rate limits, replay protection, secret
      handling, tenant boundaries, security tests.
- [ ] **Phase 14 — Release Preparation**: Docker images, deployment guide,
      documentation, initial tagged release.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for system design and
[docs/adr/](./docs/adr/) for the reasoning behind key decisions as they are
made.
