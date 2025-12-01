// Domain Entity: Product
// Esta entidad representa un producto en nuestro dominio de negocio
// No tiene dependencias externas, es una clase pura de TypeScript

export interface ProductProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number; // precio en centavos
  image: string;
  images: string[];
  category: string;
  ingredients: string[];
  allergens: string[];
  featured: boolean;
  stock?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Product {
  private readonly props: ProductProps;

  constructor(props: ProductProps) {
    this.props = props;
  }

  // Getters
  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get slug(): string {
    return this.props.slug;
  }

  get description(): string {
    return this.props.description;
  }

  get price(): number {
    return this.props.price;
  }

  get image(): string {
    return this.props.image;
  }

  get images(): string[] {
    return this.props.images;
  }

  get category(): string {
    return this.props.category;
  }

  get ingredients(): string[] {
    return [...this.props.ingredients];
  }

  get allergens(): string[] {
    return [...this.props.allergens];
  }

  get featured(): boolean {
    return this.props.featured;
  }

  get stock(): number {
    return this.props.stock ?? 0;
  }

  // Métodos de dominio (lógica de negocio)
  
  /**
   * Verifica si el producto está disponible para compra
   */
  isAvailable(): boolean {
    return this.stock > 0;
  }

  /**
   * Obtiene el precio formateado en la moneda local
   */
  getFormattedPrice(locale: string = 'es-AR', currency: string = 'ARS'): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
    }).format(this.price / 100);
  }

  /**
   * Verifica si el producto tiene un alérgeno específico
   */
  hasAllergen(allergen: string): boolean {
    return this.allergens.some(
      (a) => a.toLowerCase() === allergen.toLowerCase()
    );
  }

  /**
   * Verifica si el producto contiene un ingrediente específico
   */
  hasIngredient(ingredient: string): boolean {
    return this.ingredients.some(
      (i) => i.toLowerCase().includes(ingredient.toLowerCase())
    );
  }

  /**
   * Convierte la entidad a un objeto plano para serialización
   */
  toJSON(): ProductProps {
    return {
      ...this.props,
    };
  }

  /**
   * Crea una instancia de Product desde un objeto plano
   */
  static fromJSON(data: ProductProps): Product {
    return new Product(data);
  }
}
