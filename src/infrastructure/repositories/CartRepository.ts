// Cart Repository Implementation
// Usa localStorage para persistir el carrito

import { injectable } from 'inversify';
import 'reflect-metadata';
import { CartItem } from '@/domain/entities/CartItem';
import { ICartRepository } from '@/domain/repositories/ICartRepository';

@injectable()
export class CartRepository implements ICartRepository {
  private readonly STORAGE_KEY = 'shopping-cart';

  private getCartFromStorage(): CartItem[] {
    if (typeof window === 'undefined') return [];
    
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) return [];

    try {
      const data = JSON.parse(stored);
      return data.map((item: any) => CartItem.fromJSON(item));
    } catch {
      return [];
    }
  }

  private saveCartToStorage(items: CartItem[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items.map(i => i.toJSON())));
  }

  async getItems(): Promise<CartItem[]> {
    return this.getCartFromStorage();
  }

  async addItem(item: CartItem): Promise<void> {
    const items = await this.getItems();
    
    const existingIndex = items.findIndex(i => i.productId === item.productId);
    
    if (existingIndex >= 0) {
      // Incrementar cantidad si ya existe
      items[existingIndex] = items[existingIndex].incrementQuantity();
    } else {
      items.push(item);
    }

    this.saveCartToStorage(items);
  }

  async updateQuantity(productId: string, quantity: number): Promise<void> {
    const items = await this.getItems();
    const index = items.findIndex(i => i.productId === productId);
    
    if (index >= 0) {
      items[index] = items[index].updateQuantity(quantity);
      this.saveCartToStorage(items);
    }
  }

  async removeItem(productId: string): Promise<void> {
    const items = await this.getItems();
    const filtered = items.filter(i => i.productId !== productId);
    this.saveCartToStorage(filtered);
  }

  async clear(): Promise<void> {
    this.saveCartToStorage([]);
  }

  async getTotal(): Promise<number> {
    const items = await this.getItems();
    return items.reduce((sum, item) => sum + item.getSubtotal(), 0);
  }

  async getItemCount(): Promise<number> {
    const items = await this.getItems();
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }
}
