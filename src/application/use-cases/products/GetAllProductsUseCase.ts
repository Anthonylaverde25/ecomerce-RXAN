import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCaseNoInput } from '../IUseCase';
import { Product } from '@/domain';
import type { IProductRepository } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Caso de uso: Obtener todos los productos
 * Retorna la lista completa de productos disponibles
 */
@injectable()
export class GetAllProductsUseCase implements IUseCaseNoInput<Product[]> {
  constructor(
    @inject(TYPES.IProductRepository) 
    private readonly productRepo: IProductRepository
  ) {}

  async execute(): Promise<Product[]> {
    return await this.productRepo.getAll();
  }
}
