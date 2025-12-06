/**
 * Example usage of axios instance with React Query
 * 
 * This file demonstrates how to use the axios instance with React Query
 * for making API requests.
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

// Example: Define TypeScript interfaces for your data
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

interface CreateProductDto {
  name: string;
  price: number;
  description?: string;
}

// ===== API FUNCTIONS =====

/**
 * Fetch all products
 */
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get('/api/products');
  return response.data;
};

/**
 * Fetch a single product by ID
 */
export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await axiosInstance.get(`/api/products/${id}`);
  return response.data;
};

/**
 * Create a new product
 */
export const createProduct = async (data: CreateProductDto): Promise<Product> => {
  const response = await axiosInstance.post('/api/products', data);
  return response.data;
};

/**
 * Update a product
 */
export const updateProduct = async ({ id, data }: { id: number; data: Partial<CreateProductDto> }): Promise<Product> => {
  const response = await axiosInstance.put(`/api/products/${id}`, data);
  return response.data;
};

/**
 * Delete a product
 */
export const deleteProduct = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/api/products/${id}`);
};

// ===== REACT QUERY HOOKS =====

/**
 * Hook to fetch all products
 * 
 * Usage:
 * const { data, isLoading, error } = useProducts();
 */
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

/**
 * Hook to fetch a single product
 * 
 * Usage:
 * const { data, isLoading, error } = useProduct(productId);
 */
export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    enabled: !!id, // Only run query if ID exists
  });
};

/**
 * Hook to create a product
 * 
 * Usage:
 * const mutation = useCreateProduct();
 * mutation.mutate({ name: 'New Product', price: 100 });
 */
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      // Invalidate and refetch products list after creation
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

/**
 * Hook to update a product
 * 
 * Usage:
 * const mutation = useUpdateProduct();
 * mutation.mutate({ id: 1, data: { name: 'Updated Name' } });
 */
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (data) => {
      // Invalidate the specific product and products list
      queryClient.invalidateQueries({ queryKey: ['product', data.id] });
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

/**
 * Hook to delete a product
 * 
 * Usage:
 * const mutation = useDeleteProduct();
 * mutation.mutate(productId);
 */
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      // Invalidate products list after deletion
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

// ===== EXAMPLE COMPONENT USAGE =====

/**
 * Example component showing how to use the hooks
 * 
 * import { useProducts, useCreateProduct } from '@/lib/api/products';
 * 
 * function ProductList() {
 *   const { data: products, isLoading, error } = useProducts();
 *   const createMutation = useCreateProduct();
 * 
 *   const handleCreate = () => {
 *     createMutation.mutate({
 *       name: 'New Product',
 *       price: 99.99
 *     });
 *   };
 * 
 *   if (isLoading) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error.message}</div>;
 * 
 *   return (
 *     <div>
 *       <button onClick={handleCreate}>Create Product</button>
 *       {products?.map(product => (
 *         <div key={product.id}>{product.name}</div>
 *       ))}
 *     </div>
 *   );
 * }
 */
