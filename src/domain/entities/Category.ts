// Domain Entity: Category
// Entidad de dominio pura (sin dependencias externas)

import { CategoryProps } from '@/types/category.types'

export class Category {
    public readonly id?: number
    public readonly name: string
    public readonly description: string
    public readonly parent_id?: number | null
    public readonly is_active: boolean
    public readonly createdAt?: string
    public readonly updatedAt?: string

    constructor(props: CategoryProps) {
        this.id = props.id
        this.name = props.name
        this.description = props.description
        this.parent_id = props.parent_id ?? null
        this.is_active = props.is_active
        this.createdAt = props.createdAt
        this.updatedAt = props.updatedAt
    }
}
