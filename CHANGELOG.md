# Changelog

All notable changes to this project are documented in this file. Format
follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versioning
follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Monorepo foundation: pnpm workspaces, Turborepo pipeline, strict shared
  TypeScript config, ESLint flat config, Prettier.
- App scaffolds: `apps/web` (Next.js), `apps/api` (NestJS), `apps/worker`
  (BullMQ entry point).
- Package scaffolds: `database`, `github-client`, `release-engine`,
  `shared-types`, `validation`, `observability`, `security`, `ui`.
- Local infrastructure: Docker Compose for PostgreSQL and Redis.
- Documentation skeleton and CI foundation.
