// Domain Layer Barrel Export
// Exportaciones centralizadas de la capa de dominio

// Entities
export { Product } from './entities/Product';
export type { ProductProps } from './entities/Product';
export { CartItem } from './entities/CartItem';
export type { CartItemProps } from './entities/CartItem';

// Repositories (interfaces)
export type { IProductRepository, ProductFilters } from './repositories/IProductRepository';
export type { ICartRepository } from './repositories/ICartRepository';

// Shared Types
export type {
  PaginationParams,
  PaginatedResult,
  SortOrder,
  ProductSortField,
  SortConfig,
  BaseFilterState,
  ProductFilterState,
  LoadingState,
  Result,
} from './types/shared.types';

// Constants
export {
  PAGINATION,
  CATEGORIES,
  PRICE_RANGES,
  CART,
} from './constants';
export type { CategoryType } from './constants';
