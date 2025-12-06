import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCase } from '../IUseCase';
import { Product } from '@/domain';
import type { IProductRepository } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Input para SearchProductsUseCase
 */
export type SearchProductsInput = { 
  searchTerm: string;
};

/**
 * Caso de uso: Buscar productos
 * Realiza búsqueda de texto en nombre, descripción, categoría e ingredientes
 */
@injectable()
export class SearchProductsUseCase 
  implements IUseCase<SearchProductsInput, Product[]> {
  
  constructor(
    @inject(TYPES.IProductRepository) 
    private readonly productRepo: IProductRepository
  ) {}

  async execute({ searchTerm }: SearchProductsInput): Promise<Product[]> {
    // Validación: no buscar con términos muy cortos
    if (searchTerm.trim().length < 2) {
      return [];
    }
    
    return await this.productRepo.search(searchTerm);
  }
}
