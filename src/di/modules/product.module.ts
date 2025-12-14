import { Container } from 'inversify';
import {
  GetAllProductsUseCase,
  GetProductByIdUseCase,
  GetProductBySlugUseCase,
  GetFeaturedProductsUseCase,
  GetFilteredProductsUseCase,
  SearchProductsUseCase,
} from '@/application/use-cases/products';
import { AllProductsUseCase } from '@/application/use-cases/products/AllProductUseCase';
import { ShowProductUseCase } from '@/application/use-cases/products/ShowProductUseCase';
import { FilterProductsUseCase } from '@/application/use-cases/products/FilterProductsUseCase';
import { TYPES } from '../types';

export const registerProductUseCases = (container: Container) => {
  container.bind<GetAllProductsUseCase>(TYPES.GetAllProductsUseCase).to(GetAllProductsUseCase);
  container.bind<AllProductsUseCase>(TYPES.AllProductsUseCase).to(AllProductsUseCase);
  container.bind<GetProductByIdUseCase>(TYPES.GetProductByIdUseCase).to(GetProductByIdUseCase);
  container.bind<ShowProductUseCase>(TYPES.ShowProductUseCase).to(ShowProductUseCase);
  container.bind<GetProductBySlugUseCase>(TYPES.GetProductBySlugUseCase).to(GetProductBySlugUseCase);
  container.bind<GetFeaturedProductsUseCase>(TYPES.GetFeaturedProductsUseCase).to(GetFeaturedProductsUseCase);
  container.bind<GetFilteredProductsUseCase>(TYPES.GetFilteredProductsUseCase).to(GetFilteredProductsUseCase);
  container.bind<SearchProductsUseCase>(TYPES.SearchProductsUseCase).to(SearchProductsUseCase);
  container.bind<FilterProductsUseCase>(TYPES.FilterProductsUseCase).to(FilterProductsUseCase);
};
