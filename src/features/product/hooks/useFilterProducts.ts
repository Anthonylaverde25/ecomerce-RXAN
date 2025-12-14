import { ProductFilterCriteria } from "@/types/product.types";
import { useQuery } from "@tanstack/react-query";
import { container } from "@/di/container";
import { TYPES } from "@/di/types";
import { FilterProductsUseCase } from "@/application/use-cases/products/FilterProductsUseCase";
import { Product } from "@/domain";

/**
 * Hook para filtrar productos según criterios
 * Usa React Query para caching y gestión de estado
 */
export default function useFilterProducts(criteria: ProductFilterCriteria) {
    // Obtener el caso de uso desde el contenedor de DI
    const filterProductsUseCase = container.get<FilterProductsUseCase>(TYPES.FilterProductsUseCase);

    return useQuery({
        queryKey: ['products', 'filtered', criteria], // Key dinámica basada en criterios
        queryFn: async (): Promise<Product[]> => {
            return await filterProductsUseCase.execute({ criteria });
        },
        enabled: Object.keys(criteria).length > 0, // Solo ejecutar si hay criterios
        staleTime: 1000 * 60 * 2, // Los datos son frescos por 2 minutos
        gcTime: 1000 * 60 * 5,    // Mantener en cache por 5 minutos
        retry: 2,                  // Reintentar 2 veces en caso de error
    });
}