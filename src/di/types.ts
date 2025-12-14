// Dependency Injection Symbols
// Símbolos únicos para identificar las dependencias en el contenedor IoC

export const TYPES = {
  // Repositories
  IProductRepository: Symbol.for('IProductRepository'),
  ICartRepository: Symbol.for('ICartRepository'),
  ICategoryRepository: Symbol.for('ICategoryRepository'),

  // Services
  ProductService: Symbol.for('ProductService'),
  CartService: Symbol.for('CartService'),

  // Use Cases - Products
  GetAllProductsUseCase: Symbol.for('GetAllProductsUseCase'),
  AllProductsUseCase: Symbol.for('AllProductsUseCase'), // Nuevo: para obtener productos desde la API
  GetProductByIdUseCase: Symbol.for('GetProductByIdUseCase'),
  ShowProductUseCase: Symbol.for('ShowProductUseCase'), // Nuevo: obtener producto específico desde API
  GetProductBySlugUseCase: Symbol.for('GetProductBySlugUseCase'),
  GetFeaturedProductsUseCase: Symbol.for('GetFeaturedProductsUseCase'),
  GetFilteredProductsUseCase: Symbol.for('GetFilteredProductsUseCase'),
  SearchProductsUseCase: Symbol.for('SearchProductsUseCase'),
  FilterProductsUseCase: Symbol.for('FilterProductsUseCase'),

  // Use Cases - Cart
  AddToCartUseCase: Symbol.for('AddToCartUseCase'),
  RemoveFromCartUseCase: Symbol.for('RemoveFromCartUseCase'),
  UpdateCartQuantityUseCase: Symbol.for('UpdateCartQuantityUseCase'),
  ClearCartUseCase: Symbol.for('ClearCartUseCase'),
  GetCartItemsUseCase: Symbol.for('GetCartItemsUseCase'),
  GetCartTotalUseCase: Symbol.for('GetCartTotalUseCase'),

  // Use Cases - Category
  GetAllCategoryUseCase: Symbol.for('GetAllCategoryUseCase'),
};
