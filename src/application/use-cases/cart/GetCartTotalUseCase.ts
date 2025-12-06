import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCaseNoInput } from '../IUseCase';
import type { ICartRepository } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Caso de uso: Obtener total del carrito
 * Calcula y retorna el valor total de todos los items en el carrito
 */
@injectable()
export class GetCartTotalUseCase implements IUseCaseNoInput<number> {
  constructor(
    @inject(TYPES.ICartRepository) 
    private readonly cartRepo: ICartRepository
  ) {}

  async execute(): Promise<number> {
    return await this.cartRepo.getTotal();
  }
}
