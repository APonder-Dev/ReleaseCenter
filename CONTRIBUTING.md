# Contributing

## Prerequisites

- Node.js >= 20
- pnpm >= 9
- Docker (local PostgreSQL and Redis)

## Setup

```bash
pnpm install
docker compose -f infrastructure/docker-compose.yml up -d
```

## Branching

Branch from `main` using a `type/short-description` name, matching the
Conventional Commits type where possible:

```
feature/github-app-integration
fix/webhook-deduplication
docs/release-lifecycle
test/publication-recovery
ci/monorepo-validation
```

Never commit directly to `main`.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add GitHub App installation flow
fix: prevent duplicate release publication
test: add webhook replay protection coverage
docs: document publication lifecycle
ci: add monorepo validation workflow
```

## Before opening a pull request

Run, and fix anything that fails:

```bash
pnpm install
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Do not open a pull request with a broken build, and do not force-push to a
shared branch.

## Pull requests

Fill in the pull request template. Link the issue it closes, if any.
Pull requests are merged only by explicit maintainer decision.

## Attribution

All contributions are attributed to their human author. Do not add AI tool
attribution, co-author trailers, or generated-by notices to commits or pull
requests.
