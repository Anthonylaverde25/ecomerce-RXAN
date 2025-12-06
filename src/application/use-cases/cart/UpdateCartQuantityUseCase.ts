import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCaseVoid } from '../IUseCase';
import { CART } from '@/domain';
import type { ICartRepository } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Input para UpdateCartQuantityUseCase
 */
export type UpdateCartQuantityInput = {
  productId: string;
  quantity: number;
};

/**
 * Caso de uso: Actualizar cantidad de producto en carrito
 * Valida que la nueva cantidad esté dentro de los límites permitidos
 * Si la cantidad es 0 o menor, elimina el item del carrito
 */
@injectable()
export class UpdateCartQuantityUseCase 
  implements IUseCaseVoid<UpdateCartQuantityInput> {
  
  constructor(
    @inject(TYPES.ICartRepository) 
    private readonly cartRepo: ICartRepository
  ) {}

  async execute({ productId, quantity }: UpdateCartQuantityInput): Promise<void> {
    // Si la cantidad es 0 o negativa, eliminar el item
    if (quantity <= 0) {
      await this.cartRepo.removeItem(productId);
      return;
    }
    
    // Validación: cantidad máxima
    if (quantity > CART.MAX_QUANTITY_PER_ITEM) {
      throw new Error(`La cantidad máxima es ${CART.MAX_QUANTITY_PER_ITEM}`);
    }
    
    await this.cartRepo.updateQuantity(productId, quantity);
  }
}
