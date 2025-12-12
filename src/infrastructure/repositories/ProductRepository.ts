// Product Repository Implementation
// Implementación concreta del repositorio de productos usando mock data

import { injectable } from 'inversify';
import 'reflect-metadata';
import { Product } from '@/domain/entities/Product';
import { IProductRepository, ProductFilters } from '@/domain/repositories/IProductRepository';
import { MOCK_PRODUCTS } from '../api/mock/products.mock';
import { toast } from 'sonner';
import axiosInstance from '@/lib/axios';
import { getAllProductsRequest, ProductProps, showProductRequest } from '@/types/product.types';

@injectable()
export class ProductRepository implements IProductRepository {
  private products: Product[];

  constructor() {
    // Convertimos los datos mock a entidades de dominio
    this.products = MOCK_PRODUCTS.map(p => Product.fromJSON(p));
  }





  /**
   * Simula delay de red
   */
  private async delay(ms: number = 300): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async index(): Promise<Product[]> {
    try {
      const { data: { products } } = await axiosInstance.get<{ products: getAllProductsRequest[] }>(`api/public/products`)
      return products.map((p: getAllProductsRequest) => new Product(p))
    } catch (error) {
      toast.error('Error al cargar los productos')
      throw error
    }
  }

  async show(id: string): Promise<Product | null> {
    try {
      const { data: { product } } = await axiosInstance.get<{ product: showProductRequest }>(`api/public/products/${id}`)
      return new Product(product)
    } catch (error) {
      toast.error('Error al cargar el producto')
      throw error
    }
  }

  async getAll(): Promise<Product[]> {
    await this.delay();
    return [...this.products];
  }

  async getFiltered(filters: ProductFilters): Promise<Product[]> {
    await this.delay();

    let filtered = [...this.products];

    // Solo filtramos por is_active si el filtro featured está presente
    // (asumiendo que "featured" se mapea a "is_active" en el nuevo modelo)
    if (filters.featured !== undefined) {
      filtered = filtered.filter(p => p.isActive === filters.featured);
    }

    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(p => p.price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice!);
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
      );
    }

    return filtered;
  }

  async getById(id: string): Promise<Product | null> {
    await this.delay();
    return this.products.find(p => p.id === id) || null;
  }

  // Método getBySlug eliminado: el campo slug ya no existe en el modelo
  // Si necesitas buscar por slug, debes agregarlo al backend primero

  async getFeatured(limit?: number): Promise<Product[]> {
    await this.delay();
    // Ahora "featured" se mapea a productos activos
    const active = this.products.filter(p => p.isActive);
    return limit ? active.slice(0, limit) : active;
  }

  // Método getByCategory eliminado: el campo category ya no existe en el modelo
  // Si necesitas categorías, debes agregarlas al backend primero

  async search(term: string): Promise<Product[]> {
    await this.delay();
    const searchTerm = term.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm)
    );
  }
}
