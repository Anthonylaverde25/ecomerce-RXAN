import { Container } from 'inversify';
import { IProductRepository } from '@/domain/repositories/IProductRepository';
import { ICartRepository } from '@/domain/repositories/ICartRepository';
import { ICategoryRepository } from '@/domain/repositories/ICategoryRepository';
import { ProductRepository } from '@/infrastructure/repositories/ProductRepository';
import { CartRepository } from '@/infrastructure/repositories/CartRepository';
import { CategoryRepository } from '@/infrastructure/repositories/CategoryRepository';
import { TYPES } from '../types';

export const registerRepositories = (container: Container) => {
  container.bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository).inSingletonScope();
  container.bind<ICartRepository>(TYPES.ICartRepository).to(CartRepository).inSingletonScope();
  container.bind<ICategoryRepository>(TYPES.ICategoryRepository).to(CategoryRepository).inSingletonScope();
};
