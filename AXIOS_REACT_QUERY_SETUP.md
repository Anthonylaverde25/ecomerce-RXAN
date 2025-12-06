# Axios & React Query Setup

This project has been configured with Axios and React Query for efficient API data fetching and state management.

## 📦 Installed Packages

- **axios** (v1.13.2) - Promise-based HTTP client
- **@tanstack/react-query** (v5.90.11) - Powerful data synchronization for React

## 🔧 Configuration Files

### 1. Axios Instance
**Location:** `src/lib/axios.ts`

A pre-configured axios instance with:
- Base URL from environment variables
- 10-second timeout
- Request/Response interceptors
- Global error handling
- Ready for authentication token integration

### 2. React Query Provider
**Location:** `src/providers/ReactQueryProvider.tsx`

Configured with:
- 1-minute stale time for SSR optimization
- 2 retry attempts
- Disabled refetch on window focus

The provider is already integrated in the app layout.

### 3. Example API Usage
**Location:** `src/lib/api/example-usage.ts`

Contains complete examples of:
- CRUD operations with Axios
- Custom React Query hooks
- TypeScript interfaces
- Component usage patterns

## 🌍 Environment Variables

You need to set up environment variables for different environments:

### Development (.env.development)
Create this file with:
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Production (.env.production)
Create this file with:
```bash
NEXT_PUBLIC_API_URL=https://your-production-api.com/api
```

### Local Override (.env.local)
For local testing, you can create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

> **Note:** `.env.local` takes precedence over `.env.development` and `.env.production`

## 📝 Example Usage

### Basic Query Example

```tsx
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

interface Product {
  id: number;
  name: string;
  price: number;
}

function ProductList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axiosInstance.get<Product[]>('/api/products');
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.map(product => (
        <div key={product.id}>{product.name} - ${product.price}</div>
      ))}
    </div>
  );
}
```

### Mutation Example

```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

interface CreateProductDto {
  name: string;
  price: number;
}

function CreateProductForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: CreateProductDto) => {
      const response = await axiosInstance.post('/api/products', data);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate and refetch products
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      name: 'New Product',
      price: 99.99
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Creating...' : 'Create Product'}
      </button>
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>Product created!</div>}
    </form>
  );
}
```

### Organized API Structure (Recommended)

Create separate files for each API resource:

**src/lib/api/products.ts**
```tsx
import axiosInstance from '@/lib/axios';

export const productsApi = {
  getAll: () => axiosInstance.get('/api/products'),
  getById: (id: number) => axiosInstance.get(`/api/products/${id}`),
  create: (data: any) => axiosInstance.post('/api/products', data),
  update: (id: number, data: any) => axiosInstance.put(`/api/products/${id}`, data),
  delete: (id: number) => axiosInstance.delete(`/api/products/${id}`),
};
```

**src/hooks/useProducts.ts**
```tsx
import { useQuery } from '@tanstack/react-query';
import { productsApi } from '@/lib/api/products';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await productsApi.getAll();
      return response.data;
    },
  });
};
```

## 🔐 Authentication

To add authentication, update `src/lib/axios.ts`:

```tsx
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

## 🚀 Next Steps

1. Create your environment files (`.env.development` and `.env.production`)
2. Update the API URL with your actual backend URL
3. Create API functions in `src/lib/api/`
4. Create custom hooks in `src/hooks/`
5. Use the hooks in your components

## 📚 Documentation

- [Axios Documentation](https://axios-http.com/docs/intro)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
