// Repository Interface: IProductRepository
// Define el contrato para acceder a los datos de productos
// La implementación concreta estará en la capa de infraestructura

import { Product } from '../entities/Product';

export interface ProductFilters {
  featured?: boolean; // Ahora mapea a is_active del backend
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

export interface IProductRepository {


  index(): Promise<Product[]>
  show(id: string): Promise<Product | null>
  /**
   * Obtiene todos los productos
   */
  getAll(): Promise<Product[]>;

  /**
   * Obtiene productos con filtros aplicados
   * @param filters - Filtros a aplicar
   */
  getFiltered(filters: ProductFilters): Promise<Product[]>;

  /**
   * Obtiene un producto por su ID
   * @param id - ID del producto
   */
  getById(id: string): Promise<Product | null>;



  /**
   * Obtiene productos destacados
   * @param limit - Número máximo de productos a devolver
   */
  getFeatured(limit?: number): Promise<Product[]>;



  /**
   * Busca productos por término
   * @param term - Término de búsqueda
   */
  search(term: string): Promise<Product[]>;
}
