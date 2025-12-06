import { injectable, inject } from 'inversify'
import 'reflect-metadata'
import { IUseCaseNoInput } from '../IUseCase'
import { Category } from '@/domain/entities/Category'
import type { ICategoryRepository } from '@/domain/repositories/ICategoryRepository'
import { TYPES } from '@/di/types'

/**
 * Caso de uso: Obtener todas las categorías
 * Retorna la lista completa de categorías disponibles
 */
@injectable()
export class GetAllCategoryUseCase implements IUseCaseNoInput<Category[]> {
    constructor(
        @inject(TYPES.ICategoryRepository)
        private readonly categoryRepo: ICategoryRepository
    ) {}

    async execute(): Promise<Category[]> {
        return await this.categoryRepo.index()
    }
}
