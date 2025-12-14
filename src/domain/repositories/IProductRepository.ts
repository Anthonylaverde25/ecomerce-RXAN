// Repository Interface: IProductRepository
// Define el contrato para acceder a los datos de productos
// La implementación concreta estará en la capa de infraestructura

import { ProductFilterCriteria } from '@/types/product.types';
import { Product } from '../entities/Product';

export interface ProductFilters {
  featured?: boolean; // Ahora mapea a is_active del backend
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

export interface IProductRepository {
  /**
   * Obtiene productos con filtros opcionales
   * @param criteria - Criterios de filtrado (opcional). Si está vacío, devuelve todos los productos
   */
  index(criteria?: ProductFilterCriteria): Promise<Product[]>

  /**
   * Obtiene un producto por su ID
   * @param id - ID del producto
   */
  show(id: string): Promise<Product | null>
}
