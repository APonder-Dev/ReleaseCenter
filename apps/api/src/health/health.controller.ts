import { Controller, Get } from '@nestjs/common';

/**
 * Minimal liveness endpoint for the foundation phase.
 *
 * Dedicated readiness checks for the database, Redis, worker, and GitHub
 * integration configuration are implemented in Phase 12 (Observability).
 */
@Controller('health')
export class HealthController {
  @Get()
  getHealth(): { status: 'ok'; service: string; timestamp: string } {
    return {
      status: 'ok',
      service: 'api',
      timestamp: new Date().toISOString(),
    };
  }
}
