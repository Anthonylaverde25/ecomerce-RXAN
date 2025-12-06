import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCaseVoid } from '../IUseCase';
import type { ICartRepository } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Input para RemoveFromCartUseCase
 */
export type RemoveFromCartInput = {
  productId: string;
};

/**
 * Caso de uso: Eliminar producto del carrito
 * Remueve un item específico del carrito por su ID de producto
 */
@injectable()
export class RemoveFromCartUseCase implements IUseCaseVoid<RemoveFromCartInput> {
  constructor(
    @inject(TYPES.ICartRepository) 
    private readonly cartRepo: ICartRepository
  ) {}

  async execute({ productId }: RemoveFromCartInput): Promise<void> {
    await this.cartRepo.removeItem(productId);
  }
}
