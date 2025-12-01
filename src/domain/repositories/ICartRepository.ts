// Repository Interface: ICartRepository
// Define el contrato para el manejo del carrito de compras

import { CartItem } from '../entities/CartItem';

export interface ICartRepository {
  /**
   * Obtiene todos los items del carrito
   */
  getItems(): Promise<CartItem[]>;

  /**
   * Agrega un item al carrito
   * @param item - Item a agregar
   */
  addItem(item: CartItem): Promise<void>;

  /**
   * Actualiza la cantidad de un item
   * @param productId - ID del producto
   * @param quantity - Nueva cantidad
   */
  updateQuantity(productId: string, quantity: number): Promise<void>;

  /**
   * Elimina un item del carrito
   * @param productId - ID del producto a eliminar
   */
  removeItem(productId: string): Promise<void>;

  /**
   * Limpia todos los items del carrito
   */
  clear(): Promise<void>;

  /**
   * Obtiene el total del carrito
   */
  getTotal(): Promise<number>;

  /**
   * Obtiene la cantidad total de items
   */
  getItemCount(): Promise<number>;
}
