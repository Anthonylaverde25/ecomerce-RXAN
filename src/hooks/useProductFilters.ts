import { useState, useMemo, useCallback } from 'react';
import type { ProductFilterState } from '@/domain/types/shared.types';
import type { Product } from '@/domain/entities/Product';

/**
 * Hook personalizado para manejar el filtrado de productos
 * Encapsula la lógica de filtrado y la mantiene reutilizable
 */
export function useProductFilters(products: Product[]) {
  const [filters, setFilters] = useState<ProductFilterState>({
    categories: [],
    priceRange: 50,
    dietary: [],
  });

  // Productos filtrados basados en los filtros activos
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filtro por categorías
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(product.category)) {
          return false;
        }
      }

      // Filtro por rango de precio
      // El priceRange es un porcentaje del precio máximo
      // TODO: Implementar cuando se agregue el filtro de precio al UI

      // Filtro por restricciones dietéticas
      // TODO: Implementar cuando se agreguen datos de restricciones dietéticas

      // Filtro por búsqueda de texto
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(searchLower);
        const matchesDescription = product.description.toLowerCase().includes(searchLower);
        const matchesCategory = product.category.toLowerCase().includes(searchLower);
        
        if (!matchesName && !matchesDescription && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [products, filters]);

  // Contador de filtros activos
  const activeFiltersCount = useMemo(() => {
    return filters.categories.length + filters.dietary.length;
  }, [filters]);

  // Función para actualizar filtros
  const updateFilters = useCallback((newFilters: Partial<ProductFilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  // Función para limpiar todos los filtros
  const clearFilters = useCallback(() => {
    setFilters({
      categories: [],
      priceRange: 50,
      dietary: [],
    });
  }, []);

  return {
    filters,
    filteredProducts,
    activeFiltersCount,
    updateFilters,
    clearFilters,
  };
}
