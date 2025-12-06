import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IUseCaseNoInputVoid } from '../IUseCase';
import type { ICartRepository } from '@/domain';
import { TYPES } from '@/di/types';

/**
 * Caso de uso: Vaciar carrito
 * Elimina todos los items del carrito de compras
 */
@injectable()
export class ClearCartUseCase implements IUseCaseNoInputVoid {
  constructor(
    @inject(TYPES.ICartRepository) 
    private readonly cartRepo: ICartRepository
  ) {}

  async execute(): Promise<void> {
    await this.cartRepo.clear();
  }
}
