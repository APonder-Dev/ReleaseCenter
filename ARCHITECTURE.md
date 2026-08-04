# Architecture

## Status

This document describes the target architecture. As of Phase 1 (Monorepo
Foundation), only the workspace structure, app/package boundaries, and
build pipeline exist — the diagrams below describe what each phase will
build, not what is running today. Each diagram is filled in with concrete
detail as its phase lands; treat unchecked phases as design intent.

## System overview

```mermaid
flowchart LR
    subgraph Client
        Web["apps/web (Next.js)"]
    end

    subgraph Server
        API["apps/api (NestJS)"]
        Worker["apps/worker (BullMQ)"]
    end

    subgraph Data
        PG[(PostgreSQL)]
        Redis[(Redis)]
    end

    GH[GitHub REST/Webhooks]

    Web -->|REST + OpenAPI| API
    API -->|Prisma| PG
    API -->|enqueue jobs| Redis
    Worker -->|consume jobs| Redis
    Worker -->|Prisma| PG
    API -->|Octokit, GitHub App auth| GH
    Worker -->|Octokit, GitHub App auth| GH
    GH -->|webhooks| API
```

## GitHub App authentication (Phase 4)

```mermaid
sequenceDiagram
    participant API as apps/api
    participant GH as GitHub
    API->>GH: JWT signed with App private key
    GH-->>API: Installation access token (short-lived)
    API->>GH: Authenticated request (Octokit)
    Note over API: Token is never persisted;<br/>regenerated on expiry.
```

## Webhook processing (Phase 4 / Phase 10)

```mermaid
sequenceDiagram
    participant GH as GitHub
    participant API as apps/api
    participant Q as Redis / BullMQ
    participant W as apps/worker
    GH->>API: POST webhook + X-Hub-Signature-256
    API->>API: Verify HMAC signature
    API->>API: Deduplicate by delivery ID
    API-->>GH: 202 Accepted (fast ack)
    API->>Q: Enqueue processing job
    Q->>W: Deliver job
    W->>W: Process event, update state
```

## Release lifecycle (Phase 6)

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Preparing
    Preparing --> ReadyForReview
    Preparing --> PreparationFailed
    ReadyForReview --> AwaitingApproval
    AwaitingApproval --> Approved
    AwaitingApproval --> ApprovalRejected
    Approved --> Publishing
    Publishing --> Published
    Publishing --> PublicationFailed
    PublicationFailed --> Publishing: retry
    Draft --> Cancelled
    ReadyForReview --> Cancelled
    AwaitingApproval --> Cancelled
    Published --> [*]
```

## Publication pipeline (Phase 10)

```mermaid
flowchart TD
    A[Revalidate candidate] --> B[Verify repository + branch]
    B --> C[Confirm version unused]
    C --> D[Confirm approvals still valid]
    D --> E[Create Git tag]
    E --> F[Create GitHub release]
    F --> G[Upload artifacts]
    G --> H[Persist GitHub identifiers]
    H --> I[Notify configured endpoints]
    E -. idempotency key .-> E
    F -. idempotency key .-> F
```

## Approval workflow (Phase 9)

```mermaid
flowchart LR
    Ready[ReadyForReview] --> Request[Request approval]
    Request --> Pending[AwaitingApproval]
    Pending --> Approve[Approve]
    Pending --> Reject[Reject + reason]
    Approve --> Check{Required approvals met?}
    Check -->|no| Pending
    Check -->|yes| Approved
    Approved -->|candidate edited| Invalidated[Approval invalidated]
    Invalidated --> Pending
```

## Retry / recovery (Phase 10)

```mermaid
flowchart LR
    Fail[PublicationFailed] --> Inspect[Inspect failure reason]
    Inspect --> Retry[Retry publication]
    Retry --> Idempotent{Tag/release already exists?}
    Idempotent -->|yes| Resume[Resume from next step]
    Idempotent -->|no| Create[Create tag/release]
    Resume --> Continue[Continue pipeline]
    Create --> Continue
```

## Monorepo boundaries

See [README.md](./README.md#monorepo-layout) for the package layout.
`apps/api` and `apps/worker` both depend on `packages/release-engine` so
release rules are defined exactly once and executed identically whether
triggered synchronously (API request) or asynchronously (background job).

## Architecture Decision Records

Significant, hard-to-reverse decisions are recorded in
[docs/adr/](./docs/adr/) rather than here, so the rationale survives even as
this document is edited.
