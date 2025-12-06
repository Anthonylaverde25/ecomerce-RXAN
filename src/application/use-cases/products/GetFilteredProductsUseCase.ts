import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCase } from '../IUseCase';
import { Product } from '@/domain';
import type { IProductRepository, ProductFilters } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Caso de uso: Obtener productos filtrados
 * Aplica múltiples filtros (categoría, precio, búsqueda, etc.)
 * para retornar un subconjunto de productos
 */
@injectable()
export class GetFilteredProductsUseCase 
  implements IUseCase<ProductFilters, Product[]> {
  
  constructor(
    @inject(TYPES.IProductRepository) 
    private readonly productRepo: IProductRepository
  ) {}

  async execute(filters: ProductFilters): Promise<Product[]> {
    return await this.productRepo.getFiltered(filters);
  }
}
