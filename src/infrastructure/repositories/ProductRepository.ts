// Product Repository Implementation
// Implementación concreta del repositorio de productos usando mock data

import { injectable } from 'inversify';
import 'reflect-metadata';
import { Product } from '@/domain/entities/Product';
import { IProductRepository, ProductFilters } from '@/domain/repositories/IProductRepository';
import { MOCK_PRODUCTS } from '../api/mock/products.mock';

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

  async getAll(): Promise<Product[]> {
    await this.delay();
    return [...this.products];
  }

  async getFiltered(filters: ProductFilters): Promise<Product[]> {
    await this.delay();
    
    let filtered = [...this.products];

    if (filters.category) {
      filtered = filtered.filter(p => 
        p.category.toLowerCase() === filters.category?.toLowerCase()
      );
    }

    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter(p =>
        filters.categories!.some(cat => p.category.toLowerCase() === cat.toLowerCase())
      );
    }

    if (filters.featured !== undefined) {
      filtered = filtered.filter(p => p.featured === filters.featured);
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
        p.description.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
      );
    }

    return filtered;
  }

  async getById(id: string): Promise<Product | null> {
    await this.delay();
    return this.products.find(p => p.id === id) || null;
  }

  async getBySlug(slug: string): Promise<Product | null> {
    await this.delay();
    return this.products.find(p => p.slug === slug) || null;
  }

  async getFeatured(limit?: number): Promise<Product[]> {
    await this.delay();
    const featured = this.products.filter(p => p.featured);
    return limit ? featured.slice(0, limit) : featured;
  }

  async getByCategory(category: string): Promise<Product[]> {
    await this.delay();
    return this.products.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );
  }

  async search(term: string): Promise<Product[]> {
    await this.delay();
    const searchTerm = term.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm) ||
      p.ingredients.some(i => i.toLowerCase().includes(searchTerm))
    );
  }
}
