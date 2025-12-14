import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCase, IUseCaseNoInput } from '../IUseCase';
import { Product } from '@/domain';
import type { IProductRepository } from '@/domain';
import { TYPES } from '@/di/types';
import { ProductFilterCriteria } from '@/types/product.types';

/**
 * Caso de uso: Obtener todos los productos
 * Retorna la lista completa de productos disponibles
 */
@injectable()
export class AllProductsUseCase implements IUseCase<ProductFilterCriteria, Product[]> {
    constructor(
        @inject(TYPES.IProductRepository)
        private readonly productRepo: IProductRepository
    ) { }

    async execute(criteria: ProductFilterCriteria): Promise<Product[]> {
        return await this.productRepo.index((criteria));
    }
}
