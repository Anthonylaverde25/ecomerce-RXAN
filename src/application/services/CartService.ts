// Cart Service
// Servicio de aplicación que orquesta los casos de uso del carrito

import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { CartItem } from '@/domain/entities/CartItem';
import { Product } from '@/domain/entities/Product';
import { ICartRepository } from '@/domain/repositories/ICartRepository';
import { TYPES } from '@/di/types';

@injectable()
export class CartService {
  constructor(
    @inject(TYPES.ICartRepository) private cartRepo: ICartRepository
  ) {}

  async getItems(): Promise<CartItem[]> {
    return await this.cartRepo.getItems();
  }

  async addProduct(product: Product, quantity: number = 1): Promise<void> {
    const cartItem = CartItem.fromProduct(product, quantity);
    await this.cartRepo.addItem(cartItem);
  }

  async updateQuantity(productId: string, quantity: number): Promise<void> {
    await this.cartRepo.updateQuantity(productId, quantity);
  }

  async removeItem(productId: string): Promise<void> {
    await this.cartRepo.removeItem(productId);
  }

  async clearCart(): Promise<void> {
    await this.cartRepo.clear();
  }

  async getTotal(): Promise<number> {
    return await this.cartRepo.getTotal();
  }

  async getItemCount(): Promise<number> {
    return await this.cartRepo.getItemCount();
  }
}
