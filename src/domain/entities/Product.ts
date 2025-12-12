// Domain Entity: Product
// Esta entidad representa un producto en nuestro dominio de negocio
// No tiene dependencias externas, es una clase pura de TypeScript

import { ProductEntity } from "@/types/product.types";


export class Product {
  private readonly props: ProductEntity;

  constructor(props: ProductEntity) {
    this.props = props;
  }

  // Getters
  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get price(): number {
    return this.props.price;
  }

  get costPrice(): number {
    return this.props.cost_price;
  }

  get stock(): number {
    return this.props.stock;
  }

  get isActive(): boolean {
    return this.props.is_active;
  }

  get createdAt(): string | undefined {
    return this.props.created_at;
  }

  get updatedAt(): string | undefined {
    return this.props.updated_at;
  }

  // Métodos de dominio (lógica de negocio)

  /**
   * Verifica si el producto está disponible para compra
   * Un producto está disponible si está activo y tiene stock
   */
  isAvailable(): boolean {
    return this.isActive && this.stock > 0;
  }

  /**
   * Obtiene el precio formateado en la moneda local
   * Nota: Ajusta el divisor según cómo Laravel devuelva el precio
   * Si Laravel ya devuelve el decimal (ej: 99.99), usa this.price directamente
   * Si devuelve en centavos (ej: 9999), divide por 100
   */
  getFormattedPrice(locale: string = 'es-AR', currency: string = 'ARS'): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
    }).format(this.price); // Ajusta esto si Laravel devuelve en centavos
  }

  /**
   * Obtiene el precio de costo formateado
   */
  getFormattedCostPrice(locale: string = 'es-AR', currency: string = 'ARS'): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
    }).format(this.costPrice);
  }

  /**
   * Calcula el margen de ganancia (diferencia entre precio y costo)
   */
  getProfitMargin(): number {
    return this.price - this.costPrice;
  }

  /**
   * Calcula el porcentaje de ganancia
   */
  getProfitPercentage(): number {
    if (this.costPrice === 0) return 0;
    return ((this.price - this.costPrice) / this.costPrice) * 100;
  }

  /**
   * Convierte la entidad a un objeto plano para serialización
   */
  toJSON(): ProductEntity {
    return {
      ...this.props,
    };
  }

  /**
   * Crea una instancia de Product desde un objeto plano
   */
  static fromJSON(data: ProductEntity): Product {
    return new Product(data);
  }
}
