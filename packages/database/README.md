# @releasecenter/database

Prisma schema, migrations, and the generated database client shared by
`apps/api` and `apps/worker`.

This is currently a foundation-phase placeholder (datasource + generator
only). The full domain model is defined in Phase 2 (Database Design):

- `User`, `Organization`, `Membership`, `Role`
- `GitHubInstallation`, `Repository`, `RepositorySyncState`
- `ReleasePolicy`, `ReleaseCandidate`, `ReleaseChange`
- `ReleaseApproval`, `ReleasePublication`, `ReleaseArtifact`
- `WebhookEvent`, `BackgroundJob`
- `NotificationEndpoint`, `AuditEvent`

Requires a running PostgreSQL instance and a `DATABASE_URL` environment
variable (see `.env.example`).
