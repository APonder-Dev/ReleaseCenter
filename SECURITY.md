# Security Policy

## Reporting a vulnerability

Please report suspected security vulnerabilities privately via GitHub's
[private vulnerability reporting](https://github.com/APonder-Dev/ReleaseCenter/security/advisories/new)
for this repository, rather than opening a public issue. Include reproduction
steps, affected version/commit, and impact assessment if known.

This project does not yet have a tagged release; until Phase 14, treat every
commit on `main` as unreleased/pre-production.

## Supported versions

No stable release exists yet. Once tagged releases begin, this section will
list which versions receive security fixes.

## Design commitments

These commitments apply from Phase 3 (Authentication and Authorization)
onward and are enforced/verified in Phase 13 (Hardening):

- **Least-privilege GitHub App permissions.** Every requested permission is
  documented with its justification in `docs/github-app-setup.md`.
- **No long-lived installation access tokens.** Installation tokens are
  generated on demand and never persisted.
- **Webhook integrity.** All GitHub webhook deliveries are verified via HMAC
  signature, deduplicated by delivery ID, and protected against replay.
- **Tenant isolation.** Organization and repository access is authorized on
  every request; cross-organization access is denied and tested for.
- **Secrets are never logged.** GitHub private keys, installation access
  tokens, session tokens, webhook secrets, passwords, and full authorization
  headers are redacted at the logging layer (`@releasecenter/observability`)
  and must never be passed to logs by call sites either.
- **Encryption at rest** for stored sensitive values.
- **Safe error responses.** API errors never leak internal details; see the
  shared `ApiErrorEnvelope` contract in `@releasecenter/shared-types`.
- **Automated scanning.** CI runs dependency scanning and secret scanning on
  every pull request (`.github/workflows/security.yml`).

## Out of scope (for now)

Until the relevant phase ships, the following are explicitly not yet
implemented and should not be assumed present: rate limiting, CSRF
protection, Content Security Policy, open-redirect protection, and
user-enumeration protection. These land in Phase 3 and Phase 13.
