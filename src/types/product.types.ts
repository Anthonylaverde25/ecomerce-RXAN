// product.types.ts

// ==============================
// 📦 DOMAIN ENTITY (BASE)
// ==============================

export interface ProductProps {
    id: string;
    name: string;
    slug?: string;
    description: string;
    price: number; // precio en centavos
    image?: string;
    images?: string[];
    category?: string;
    ingredients?: string[];
    allergens?: string[];
    featured?: boolean;
    stock?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ProductEntity {
    id: string,
    name: string,
    description: string,
    price: number, // precio en centavos o decimal según backend
    cost_price: number, // precio de costo
    stock: number,
    is_active: boolean,
    created_at?: string, // Laravel timestamp
    updated_at?: string, // Laravel timestamp
}


// ==============================
// 🌐 API REQUEST TYPES
// ==============================

export interface getAllProductsRequest {
    id: string,
    name: string,
    description: string,
    price: number,
    cost_price: number,
    stock: number,
    is_active: boolean,
    created_at?: string,
    updated_at?: string,
}

export interface showProductRequest {
    id: string,
    name: string,
    description: string,
    price: number,
    cost_price: number,
    stock: number,
    is_active: boolean,
    created_at?: string,
    updated_at?: string,
}




// ==============================
// 📡 API RESPONSE TYPES
// ==============================


// ==============================
// 🔄 DTO PARA FORMULARIOS
// ==============================
