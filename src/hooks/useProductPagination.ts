import { useState, useMemo, useCallback } from 'react';
import { PAGINATION } from '@/domain/constants';

/**
 * Hook personalizado para manejar la paginación de productos
 * Encapsula toda la lógica de paginación de forma reutilizable
 */
export function useProductPagination<T>(
  items: T[],
  itemsPerPage: number = PAGINATION.DEFAULT_PAGE_SIZE
) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el número total de páginas
  const totalPages = useMemo(() => {
    return Math.ceil(items.length / itemsPerPage);
  }, [items.length, itemsPerPage]);

  // Obtener los items de la página actual
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  // Navegar a la página siguiente
  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  }, [totalPages]);

  // Navegar a la página anterior
  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  }, []);

  // Navegar a una página específica
  const goToPage = useCallback((page: number) => {
    const validPage = Math.max(1, Math.min(totalPages, page));
    setCurrentPage(validPage);
  }, [totalPages]);

  // Resetear a la primera página (útil cuando cambian los filtros)
  const resetToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  // Determinar qué números de página mostrar en la paginación
  const pageNumbers = useMemo(() => {
    const numbers: (number | 'ellipsis')[] = [];
    
    for (let i = 1; i <= totalPages; i++) {
      // Mostrar primera página
      if (i === 1) {
        numbers.push(i);
        continue;
      }
      
      // Mostrar última página
      if (i === totalPages) {
        numbers.push(i);
        continue;
      }
      
      // Mostrar página actual y adyacentes
      if (Math.abs(i - currentPage) <= 1) {
        numbers.push(i);
        continue;
      }
      
      // Agregar elipsis si es necesario
      const lastNumber = numbers[numbers.length - 1];
      if (lastNumber !== 'ellipsis' && typeof lastNumber === 'number' && i - lastNumber > 1) {
        numbers.push('ellipsis');
      }
    }
    
    return numbers;
  }, [currentPage, totalPages]);

  return {
    currentPage,
    totalPages,
    paginatedItems,
    pageNumbers,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    resetToFirstPage,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
}
