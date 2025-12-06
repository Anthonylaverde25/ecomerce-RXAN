// category.types.ts

// ==============================
// 📦 DOMAIN ENTITY (BASE)
// ==============================

export interface CategoryProps {
    id?: number
    name: string
    description: string
    parent_id?: number | null
    is_active: boolean
    createdAt?: string
    updatedAt?: string
}

// ==============================
// 🌐 API REQUEST TYPES
// ==============================

// ✅ Para crear (POST)
export interface CreateCategoryRequest {
    name: string
    description: string
    parent_id?: number | null
    is_active: boolean
}

// ✅ Para actualizar (PUT / PATCH)
export interface UpdateCategoryRequest {
    name?: string
    description?: string
    parent_id?: number | null
    is_active?: boolean
}

// ==============================
// 📡 API RESPONSE TYPES
// ==============================

// ✅ Para GET / SHOW
export interface CategoryResponse {
    id: number
    name: string
    description: string
    parent_id: number | null
    is_active: boolean
    createdAt: string
    updatedAt: string
}

// ✅ Para listados (GET /)
export interface CategoryListResponse {
    data: CategoryResponse[]
    total: number
}

// ==============================
// 🔄 DTO PARA FORMULARIOS
// ==============================

// ✅ Para formularios (create/edit)
export interface CategoryFormData {
    name: string
    description: string
    parent_id?: number | null
    is_active: boolean
}
