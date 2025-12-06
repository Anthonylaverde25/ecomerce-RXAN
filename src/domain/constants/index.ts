// Constantes de negocio centralizadas
// Business constants - Single source of truth

/**
 * Configuración de paginación para listados de productos
 */
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 9,
  MAX_PAGE_SIZE: 50,
  MIN_PAGE: 1,
} as const;

/**
 * Categorías de productos disponibles
 */
export const CATEGORIES = {
  GALLETAS: 'Galletas',
  PASTELES: 'Pasteles',
  PANES: 'Panes',
  MUFFINS: 'Muffins',
  POSTRES: 'Postres',
} as const;

/**
 * Rangos de precio para filtros
 */
export const PRICE_RANGES = {
  MIN: 0,
  MAX: 50000,
  STEP: 500,
  DEFAULT: 50,
} as const;

/**
 * Configuración del carrito de compras
 */
export const CART = {
  MAX_QUANTITY_PER_ITEM: 99,
  MIN_QUANTITY_PER_ITEM: 1,
  FREE_SHIPPING_THRESHOLD: 15000, // En centavos (150 ARS)
} as const;

/**
 * Tipos derivados de las constantes
 */
export type CategoryType = typeof CATEGORIES[keyof typeof CATEGORIES];
