// Repository Interface: IProductRepository
// Define el contrato para acceder a los datos de productos
// La implementación concreta estará en la capa de infraestructura

import { Product } from '../entities/Product';

export interface ProductFilters {
  category?: string;
  categories?: string[];
  featured?: boolean;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

export interface IProductRepository {
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
   * Obtiene un producto por su slug
   * @param slug - Slug del producto
   */
  getBySlug(slug: string): Promise<Product | null>;

  /**
   * Obtiene productos destacados
   * @param limit - Número máximo de productos a devolver
   */
  getFeatured(limit?: number): Promise<Product[]>;

  /**
   * Obtiene productos por categoría
   * @param category - Nombre de la categoría
   */
  getByCategory(category: string): Promise<Product[]>;

  /**
   * Busca productos por término
   * @param term - Término de búsqueda
   */
  search(term: string): Promise<Product[]>;
}
