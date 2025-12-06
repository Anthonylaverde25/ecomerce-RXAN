import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCase } from '../IUseCase';
import { Product } from '@/domain';
import type { IProductRepository } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Input para GetProductByIdUseCase
 */
export type GetProductByIdInput = { 
  id: string;
};

/**
 * Caso de uso: Obtener producto por ID
 * Busca un producto específico por su identificador único
 */
@injectable()
export class GetProductByIdUseCase 
  implements IUseCase<GetProductByIdInput, Product | null> {
  
  constructor(
    @inject(TYPES.IProductRepository) 
    private readonly productRepo: IProductRepository
  ) {}

  async execute({ id }: GetProductByIdInput): Promise<Product | null> {
    return await this.productRepo.getById(id);
  }
}
