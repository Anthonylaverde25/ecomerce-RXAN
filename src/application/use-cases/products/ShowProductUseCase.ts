import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCase } from '../IUseCase';
import { Product } from '@/domain';
import type { IProductRepository } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Input para ShowProductUseCase
 */
export type ShowProductInput = {
    id: string;
};

/**
 * Caso de uso: Obtener un producto por ID
 * Busca y retorna un producto específico desde el repositorio
 */
@injectable()
export class ShowProductUseCase implements IUseCase<ShowProductInput, Product | null> {
    constructor(
        @inject(TYPES.IProductRepository)
        private readonly productRepo: IProductRepository
    ) { }

    async execute({ id }: ShowProductInput): Promise<Product | null> {
        return await this.productRepo.show(id);
    }
}
