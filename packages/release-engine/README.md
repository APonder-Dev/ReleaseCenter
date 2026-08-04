# @releasecenter/release-engine

Framework-agnostic domain logic for release candidates: the validated state
machine, semantic version recommendation, changelog generation, and approval
rules. Consumed by both `apps/api` (synchronous requests) and `apps/worker`
(background jobs) so the rules are defined exactly once.

Implemented across Phases 6-9.
