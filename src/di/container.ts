// Inversify Container Configuration
// Configuración del contenedor IoC modularizado

import { Container } from 'inversify';
import { registerRepositories } from './modules/repository.module';
import { registerServices } from './modules/service.module';
import { registerProductUseCases } from './modules/product.module';
import { registerCartUseCases } from './modules/cart.module';
import { registerCategoryUseCases } from './modules/category.module';

const container = new Container();

// Registrar dependencias
registerRepositories(container);
registerServices(container);
registerProductUseCases(container);
registerCartUseCases(container);
registerCategoryUseCases(container);

export { container };
