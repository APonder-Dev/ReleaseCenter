/**
 * Consistent error envelope for every REST API response. `correlationId`
 * links an error back to structured logs and traces (see
 * `@releasecenter/observability`).
 */
export interface ApiErrorEnvelope {
  error: {
    code: string;
    message: string;
    correlationId: string;
    details?: Record<string, unknown>;
  };
}
