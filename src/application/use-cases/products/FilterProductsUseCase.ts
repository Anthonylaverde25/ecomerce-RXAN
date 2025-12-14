import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCase } from '../IUseCase';
import { Product } from '@/domain';
import type { IProductRepository } from '@/domain';
import { TYPES } from '@/di/types';
import { ProductFilterCriteria } from '@/types/product.types';

/**
 * Input para SearchProductsUseCase
 */
export type SearchProductsInput = {
    criteria: ProductFilterCriteria;
};

/**
 * Caso de uso: Buscar productos
 * Realiza búsqueda de productos en función de los criterios proporcionados
 */
@injectable()
export class FilterProductsUseCase
    implements IUseCase<SearchProductsInput, Product[]> {

    constructor(
        @inject(TYPES.IProductRepository)
        private readonly productRepo: IProductRepository
    ) { }


    async execute({ criteria }: SearchProductsInput): Promise<Product[]> {
        return await this.productRepo.index(criteria);
    }

}
