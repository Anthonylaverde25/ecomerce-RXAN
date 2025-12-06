import { Category } from '../entities/Category'

export interface ICategoryRepository {
    index(): Promise<Category[]>
}
