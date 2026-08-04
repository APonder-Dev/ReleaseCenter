/**
 * Cross-cutting pagination contract shared by every paginated REST endpoint.
 * Domain-specific request/response types are added alongside their models
 * starting in Phase 2 (Database Design).
 */
export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResult<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}
