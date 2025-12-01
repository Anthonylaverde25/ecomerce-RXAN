// Dependency Injection Symbols
// Símbolos únicos para identificar las dependencias en el contenedor IoC

export const TYPES = {
  // Repositories
  IProductRepository: Symbol.for('IProductRepository'),
  ICartRepository: Symbol.for('ICartRepository'),
  
  // Services
  ProductService: Symbol.for('ProductService'),
  CartService: Symbol.for('CartService'),
  
  // Use Cases - Products
  GetAllProductsUseCase: Symbol.for('GetAllProductsUseCase'),
  GetProductBySlugUseCase: Symbol.for('GetProductBySlugUseCase'),
  GetFeaturedProductsUseCase: Symbol.for('GetFeaturedProductsUseCase'),
  GetFilteredProductsUseCase: Symbol.for('GetFilteredProductsUseCase'),
  
  // Use Cases - Cart
  AddToCartUseCase: Symbol.for('AddToCartUseCase'),
  RemoveFromCartUseCase: Symbol.for('RemoveFromCartUseCase'),
  UpdateCartQuantityUseCase: Symbol.for('UpdateCartQuantityUseCase'),
  ClearCartUseCase: Symbol.for('ClearCartUseCase'),
  GetCartTotalUseCase: Symbol.for('GetCartTotalUseCase'),
};
