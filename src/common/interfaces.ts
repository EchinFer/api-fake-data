export interface PaginatedModel<T> {
    items: T[];
    total: number;
    totalPages: number;
}