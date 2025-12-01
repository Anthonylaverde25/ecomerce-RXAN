// Inversify Container Configuration
// Configuración del contenedor IoC con todas las dependencias

import { Container } from 'inversify';
import { IProductRepository } from '@/domain/repositories/IProductRepository';
import { ICartRepository } from '@/domain/repositories/ICartRepository';
import { ProductRepository } from '@/infrastructure/repositories/ProductRepository';
import { CartRepository } from '@/infrastructure/repositories/CartRepository';
import { ProductService } from '@/application/services/ProductService';
import { CartService } from '@/application/services/CartService';
import { TYPES } from './types';

const container = new Container();

// Repositories
container.bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository).inSingletonScope();
container.bind<ICartRepository>(TYPES.ICartRepository).to(CartRepository).inSingletonScope();

// Services
container.bind<ProductService>(TYPES.ProductService).to(ProductService).inSingletonScope();
container.bind<CartService>(TYPES.CartService).to(CartService).inSingletonScope();

export { container };
