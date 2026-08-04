# infrastructure/

Local development infrastructure (`docker-compose.yml`: PostgreSQL + Redis).

Production deployment manifests (Docker images for `apps/api`,
`apps/worker`, and `apps/web`, and any orchestration config) are added in
Phase 14 (Release Preparation) — see `docs/deployment.md` once written.

## Local development

```
docker compose -f infrastructure/docker-compose.yml up -d
```
