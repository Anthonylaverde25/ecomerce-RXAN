import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCaseNoInput } from '../IUseCase';
import { CartItem } from '@/domain';
import type { ICartRepository } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Caso de uso: Obtener items del carrito
 * Retorna todos los items actualmente en el carrito de compras
 */
@injectable()
export class GetCartItemsUseCase implements IUseCaseNoInput<CartItem[]> {
  constructor(
    @inject(TYPES.ICartRepository) 
    private readonly cartRepo: ICartRepository
  ) {}

  async execute(): Promise<CartItem[]> {
    return await this.cartRepo.getItems();
  }
}
