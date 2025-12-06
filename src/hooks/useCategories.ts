import { useQuery } from '@tanstack/react-query';
import { container } from '@/di/container';
import { TYPES } from '@/di/types';
import { GetAllCategoryUseCase } from '@/application/use-cases/category/GetAllCategoryUseCase';
import type { Category } from '@/domain/entities/Category';

/**
 * Hook para obtener todas las categorías usando React Query
 * 
 * @returns {UseQueryResult<Category[], Error>} Resultado de la query con las categorías
 * 
 * @example
 * ```tsx
 * function CategoryList() {
 *   const { data: categories, isLoading, error } = useCategories();
 * 
 *   if (isLoading) return <div>Cargando categorías...</div>;
 *   if (error) return <div>Error: {error.message}</div>;
 * 
 *   return (
 *     <div>
 *       {categories?.map(category => (
 *         <div key={category.id}>
 *           <h3>{category.name}</h3>
 *           <p>{category.description}</p>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 */
export const useCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: async () => {
      const useCase = container.get<GetAllCategoryUseCase>(
        TYPES.GetAllCategoryUseCase
      );
      return await useCase.execute();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes - categories don't change frequently
    gcTime: 10 * 60 * 1000, // 10 minutes cache time (formerly cacheTime)
  });
};
