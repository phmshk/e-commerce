import { SortOrder, QueryFilter } from "mongoose";

export interface PaginationParams<T> {
  page?: number;
  limit?: number;
  sort?: string | { [key: string]: SortOrder };
  filter?: QueryFilter<T>;
}

export interface PaginatedResponse<T> {
  items: T[];
  metadata: {
    total: number;
    pages: number;
    currentPage: number;
    hasNextPage: boolean;
  };
}
