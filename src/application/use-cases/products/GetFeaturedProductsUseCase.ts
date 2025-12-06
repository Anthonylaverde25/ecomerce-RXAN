import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCase } from '../IUseCase';
import { Product, PAGINATION } from '@/domain';
import type { IProductRepository } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Input para GetFeaturedProductsUseCase
 */
export type GetFeaturedProductsInput = { 
  limit?: number;
};

/**
 * Caso de uso: Obtener productos destacados
 * Retorna los productos marcados como destacados, con límite configurable
 * Incluye validación de límite para prevenir queries excesivamente grandes
 */
@injectable()
export class GetFeaturedProductsUseCase 
  implements IUseCase<GetFeaturedProductsInput, Product[]> {
  
  constructor(
    @inject(TYPES.IProductRepository) 
    private readonly productRepo: IProductRepository
  ) {}

  async execute({ limit }: GetFeaturedProductsInput = {}): Promise<Product[]> {
    // Lógica de negocio: validar y aplicar límite razonable
    const validLimit = limit 
      ? Math.min(limit, PAGINATION.MAX_PAGE_SIZE)
      : 5; // Default: 5 productos destacados
    
    return await this.productRepo.getFeatured(validLimit);
  }
}
