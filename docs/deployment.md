# Deployment

> Not yet implemented — placeholder for Phase 14 (Release Preparation). Will
> document Docker images for `apps/web`, `apps/api`, and `apps/worker`,
> required environment variables, database migration steps, and a
> self-hosted deployment walkthrough.

## Local development

```bash
pnpm install
docker compose -f infrastructure/docker-compose.yml up -d
pnpm build
pnpm dev
```
