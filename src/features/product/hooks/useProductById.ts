import { useQuery } from "@tanstack/react-query";
import { container } from "@/di/container";
import { TYPES } from "@/di/types";
import { ShowProductUseCase } from "@/application/use-cases/products/ShowProductUseCase";
import { Product } from "@/domain";

/**
 * Hook para obtener un producto por ID
 * Usa React Query para caching y gestión de estado
 */
export default function useProductById(id: string) {
    const showProductUseCase = container.get<ShowProductUseCase>(TYPES.ShowProductUseCase);

    return useQuery({
        queryKey: ['product', id],
        queryFn: async (): Promise<Product | null> => {
            return await showProductUseCase.execute({ id })
        },
        enabled: !!id, // Solo ejecutar si hay un ID
        staleTime: 1000 * 60 * 5, // 5 minutos
        gcTime: 1000 * 60 * 10,   // 10 minutos
        retry: 2,
    });
}
