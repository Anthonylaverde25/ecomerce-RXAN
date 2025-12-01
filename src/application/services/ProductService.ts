// Product Service
// Servicio de aplicación que orquesta los casos de uso de productos

import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { Product } from '@/domain/entities/Product';
import type { IProductRepository, ProductFilters } from '@/domain/repositories/IProductRepository';
import { TYPES } from '@/di/types';

@injectable()
export class ProductService {
  constructor(
    @inject(TYPES.IProductRepository) private productRepo: IProductRepository
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepo.getAll();
  }

  async getFilteredProducts(filters: ProductFilters): Promise<Product[]> {
    return await this.productRepo.getFiltered(filters);
  }

  async getProductById(id: string): Promise<Product | null> {
    return await this.productRepo.getById(id);
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    return await this.productRepo.getBySlug(slug);
  }

  async getFeaturedProducts(limit: number = 5): Promise<Product[]> {
    return await this.productRepo.getFeatured(limit);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return await this.productRepo.getByCategory(category);
  }

  async searchProducts(term: string): Promise<Product[]> {
    return await this.productRepo.search(term);
  }
}
