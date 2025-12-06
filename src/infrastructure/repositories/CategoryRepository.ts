import { Category } from '@/domain/entities/Category'
import { ICategoryRepository } from '@/domain/repositories/ICategoryRepository'
import axiosInstance from '@/lib/axios'
import { CategoryResponse } from '@/types/category.types'
import { toast } from 'sonner'

export class CategoryRepository implements ICategoryRepository {
    async index(): Promise<Category[]> {
        try {
            const {
                data: { categories },
            } = await axiosInstance.get(`/api/public/categories`)

            return categories.map(
                (c: CategoryResponse) =>
                    new Category({
                        id: c.id,
                        name: c.name,
                        description: c.description,
                        parent_id: c.parent_id,
                        is_active: c.is_active,
                        createdAt: c.createdAt,
                        updatedAt: c.updatedAt,
                    })
            )
        } catch (error) {
            toast.error('Error fetching categories')
            throw error
        }
    }
}
