import { z } from 'zod';

/**
 * Shared query-parameter schema for paginated list endpoints. Mirrors
 * `PaginationParams` in `@releasecenter/shared-types`.
 */
export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
