import { useQuery } from "@tanstack/react-query";
import { container } from "@/di/container";
import { TYPES } from "@/di/types";
import { AllProductsUseCase } from "@/application/use-cases/products/AllProductUseCase";
import { Product } from "@/domain";
import { ProductFilterCriteria } from "@/types/product.types";

/**
 * Hook para obtener todos los productos desde la API
 * Usa React Query para caching y gestión de estado
 */


export default function useAllProducts(criteria: ProductFilterCriteria) {
    // Obtener el caso de uso desde el contenedor de DI
    const allProductsUseCase = container.get<AllProductsUseCase>(TYPES.AllProductsUseCase);

    console.log('criterios de busquedad desde el hook index', criteria)

    return useQuery({
        queryKey: ['products', 'all', criteria], // Incluir criteria para invalidar cache cuando cambian los filtros
        queryFn: async (): Promise<Product[]> => {
            return await allProductsUseCase.execute(criteria);
        },
        staleTime: 1000 * 60 * 5, // Los datos son frescos por 5 minutos
        gcTime: 1000 * 60 * 10,   // Mantener en cache por 10 minutos (antes cacheTime)
        retry: 3,                  // Reintentar 3 veces en caso de error
        refetchOnWindowFocus: false, // No refetch al volver a la ventana
    });
}