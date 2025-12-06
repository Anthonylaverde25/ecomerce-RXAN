// Tipos compartidos entre capas
// Shared types across all layers of the application

/**
 * Parámetros de paginación
 */
export type PaginationParams = {
  page: number;
  limit: number;
};

/**
 * Resultado de paginación genérico
 */
export type PaginatedResult<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

/**
 * Orden de clasificación
 */
export type SortOrder = 'asc' | 'desc';

/**
 * Campos disponibles para ordenar productos
 */
export type ProductSortField = 'name' | 'price' | 'featured' | 'category';

/**
 * Configuración de ordenamiento
 */
export type SortConfig<T extends string = ProductSortField> = {
  field: T;
  order: SortOrder;
};

/**
 * Estado base de filtros
 */
export type BaseFilterState = {
  search?: string;
  page?: number;
  limit?: number;
};

/**
 * Filtros específicos de productos
 */
export type ProductFilterState = BaseFilterState & {
  categories: string[];
  priceRange: number;
  dietary: string[];
};

/**
 * Estado de carga genérico
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Resultado de operación genérico
 */
export type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };
