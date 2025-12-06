import { Container } from 'inversify';
import {
  GetAllProductsUseCase,
  GetProductByIdUseCase,
  GetProductBySlugUseCase,
  GetFeaturedProductsUseCase,
  GetFilteredProductsUseCase,
  SearchProductsUseCase,
} from '@/application/use-cases/products';
import { TYPES } from '../types';

export const registerProductUseCases = (container: Container) => {
  container.bind<GetAllProductsUseCase>(TYPES.GetAllProductsUseCase).to(GetAllProductsUseCase);
  container.bind<GetProductByIdUseCase>(TYPES.GetProductByIdUseCase).to(GetProductByIdUseCase);
  container.bind<GetProductBySlugUseCase>(TYPES.GetProductBySlugUseCase).to(GetProductBySlugUseCase);
  container.bind<GetFeaturedProductsUseCase>(TYPES.GetFeaturedProductsUseCase).to(GetFeaturedProductsUseCase);
  container.bind<GetFilteredProductsUseCase>(TYPES.GetFilteredProductsUseCase).to(GetFilteredProductsUseCase);
  container.bind<SearchProductsUseCase>(TYPES.SearchProductsUseCase).to(SearchProductsUseCase);
};
