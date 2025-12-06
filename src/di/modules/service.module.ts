import { Container } from 'inversify';
import { ProductService } from '@/application/services/ProductService';
import { CartService } from '@/application/services/CartService';
import { TYPES } from '../types';

export const registerServices = (container: Container) => {
  container.bind<ProductService>(TYPES.ProductService).to(ProductService).inSingletonScope();
  container.bind<CartService>(TYPES.CartService).to(CartService).inSingletonScope();
};
