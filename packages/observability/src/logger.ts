import pino, { type Logger, type LoggerOptions } from 'pino';

/**
 * Field names that must never appear in log output. Individual call sites
 * are still responsible for not passing secrets in — this is a
 * defense-in-depth redaction list, not the only safeguard. See SECURITY.md.
 */
const REDACTED_PATHS = [
  'req.headers.authorization',
  '*.privateKey',
  '*.installationAccessToken',
  '*.sessionToken',
  '*.webhookSecret',
  '*.password',
];

export interface CreateLoggerOptions {
  serviceName: string;
  level?: LoggerOptions['level'];
}

/**
 * Creates a structured JSON logger with secret-field redaction enabled.
 * Correlation-ID binding (`logger.child({ correlationId })`) is layered on
 * per request/job by the consuming app.
 */
export function createLogger({ serviceName, level }: CreateLoggerOptions): Logger {
  return pino({
    name: serviceName,
    level: level ?? process.env.LOG_LEVEL ?? 'info',
    redact: {
      paths: REDACTED_PATHS,
      censor: '[REDACTED]',
    },
    timestamp: pino.stdTimeFunctions.isoTime,
  });
}
