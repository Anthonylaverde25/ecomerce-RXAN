// Domain Entity: CartItem
// Representa un item en el carrito de compras

import { Product } from './Product';

export interface CartItemProps {
  productId: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

export class CartItem {
  private readonly props: CartItemProps;

  constructor(props: CartItemProps) {
    if (props.quantity < 1) {
      throw new Error('Quantity must be at least 1');
    }
    this.props = props;
  }

  // Getters
  get id(): string {
    return this.props.productId;
  }

  get productId(): string {
    return this.props.productId;
  }

  get name(): string {
    return this.props.name;
  }

  get slug(): string {
    return this.props.slug;
  }

  get price(): number {
    return this.props.price;
  }

  get image(): string {
    return this.props.image;
  }

  get category(): string {
    return this.props.category;
  }

  get quantity(): number {
    return this.props.quantity;
  }

  // Métodos de dominio

  /**
   * Calcula el subtotal del item (precio * cantidad)
   */
  getSubtotal(): number {
    return this.price * this.quantity;
  }

  /**
   * Crea un nuevo CartItem con cantidad actualizada
   */
  updateQuantity(newQuantity: number): CartItem {
    if (newQuantity < 1) {
      throw new Error('Quantity must be at least 1');
    }
    return new CartItem({
      ...this.props,
      quantity: newQuantity,
    });
  }

  /**
   * Incrementa la cantidad en 1
   */
  incrementQuantity(): CartItem {
    return this.updateQuantity(this.quantity + 1);
  }

  /**
   * Decrementa la cantidad en 1 (mínimo 1)
   */
  decrementQuantity(): CartItem {
    return this.updateQuantity(Math.max(1, this.quantity - 1));
  }

  /**
   * Convierte a objeto plano
   */
  toJSON(): CartItemProps {
    return { ...this.props };
  }

  /**
   * Crea un CartItem desde un Product
   */
  static fromProduct(product: Product, quantity: number = 1): CartItem {
    return new CartItem({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity,
    });
  }

  /**
   * Crea desde objeto plano
   */
  static fromJSON(data: CartItemProps): CartItem {
    return new CartItem(data);
  }
}
