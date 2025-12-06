import { Container } from 'inversify';
import {
  AddToCartUseCase,
  RemoveFromCartUseCase,
  UpdateCartQuantityUseCase,
  ClearCartUseCase,
  GetCartItemsUseCase,
  GetCartTotalUseCase,
} from '@/application/use-cases/cart';
import { TYPES } from '../types';

export const registerCartUseCases = (container: Container) => {
  container.bind<AddToCartUseCase>(TYPES.AddToCartUseCase).to(AddToCartUseCase);
  container.bind<RemoveFromCartUseCase>(TYPES.RemoveFromCartUseCase).to(RemoveFromCartUseCase);
  container.bind<UpdateCartQuantityUseCase>(TYPES.UpdateCartQuantityUseCase).to(UpdateCartQuantityUseCase);
  container.bind<ClearCartUseCase>(TYPES.ClearCartUseCase).to(ClearCartUseCase);
  container.bind<GetCartItemsUseCase>(TYPES.GetCartItemsUseCase).to(GetCartItemsUseCase);
  container.bind<GetCartTotalUseCase>(TYPES.GetCartTotalUseCase).to(GetCartTotalUseCase);
};
