import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCase } from '../IUseCase';
import { Product } from '@/domain';
import type { IProductRepository } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Input para GetProductBySlugUseCase
 */
export type GetProductBySlugInput = { 
  slug: string;
};

/**
 * Caso de uso: Obtener producto por slug
 * Busca un producto específico por su slug URL-friendly
 */
@injectable()
export class GetProductBySlugUseCase 
  implements IUseCase<GetProductBySlugInput, Product | null> {
  
  constructor(
    @inject(TYPES.IProductRepository) 
    private readonly productRepo: IProductRepository
  ) {}

  async execute({ slug }: GetProductBySlugInput): Promise<Product | null> {
    return await this.productRepo.getBySlug(slug);
  }
}
