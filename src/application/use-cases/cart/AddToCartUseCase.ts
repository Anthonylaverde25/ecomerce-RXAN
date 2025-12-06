import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCaseVoid } from '../IUseCase';
import { Product, CartItem, CART } from '@/domain';
import type { ICartRepository } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Input para AddToCartUseCase
 */
export type AddToCartInput = {
  product: Product;
  quantity?: number;
};

/**
 * Caso de uso: Agregar producto al carrito
 * Valida disponibilidad del producto y cantidad antes de agregar
 * Aplica reglas de negocio para cantidades mínimas y máximas
 */
@injectable()
export class AddToCartUseCase implements IUseCaseVoid<AddToCartInput> {
  constructor(
    @inject(TYPES.ICartRepository) 
    private readonly cartRepo: ICartRepository
  ) {}

  async execute({ product, quantity = 1 }: AddToCartInput): Promise<void> {
    // Validación: cantidad mínima
    if (quantity < CART.MIN_QUANTITY_PER_ITEM) {
      throw new Error(`La cantidad mínima es ${CART.MIN_QUANTITY_PER_ITEM}`);
    }
    
    // Validación: cantidad máxima
    if (quantity > CART.MAX_QUANTITY_PER_ITEM) {
      throw new Error(`La cantidad máxima es ${CART.MAX_QUANTITY_PER_ITEM}`);
    }
    
    // Validación: disponibilidad del producto
    if (!product.isAvailable()) {
      throw new Error('El producto no está disponible en este momento');
    }
    
    // Crear item del carrito y agregarlo
    const cartItem = CartItem.fromProduct(product, quantity);
    await this.cartRepo.addItem(cartItem);
  }
}
