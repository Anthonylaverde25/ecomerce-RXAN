import { Container } from 'inversify';
import { GetAllCategoryUseCase } from '@/application/use-cases/category/GetAllCategoryUseCase';
import { TYPES } from '../types';

export const registerCategoryUseCases = (container: Container) => {
  container.bind<GetAllCategoryUseCase>(TYPES.GetAllCategoryUseCase).to(GetAllCategoryUseCase);
};
