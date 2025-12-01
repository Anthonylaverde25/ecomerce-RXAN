"use client";

// Custom Hook: useProducts
// Hook para manejar operaciones de productos usando el servicio

import { useState, useEffect, useCallback } from 'react';
import { Product } from '@/domain/entities/Product';
import { ProductFilters } from '@/domain/repositories/IProductRepository';
import { ProductService } from '@/application/services/ProductService';
import { container } from '@/di/container';
import { TYPES } from '@/di/types';

export interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useProducts(filters?: ProductFilters): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productService = container.get<ProductService>(TYPES.ProductService);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      let result: Product[];
      
      if (filters && Object.keys(filters).length > 0) {
        result = await productService.getFilteredProducts(filters);
      } else {
        result = await productService.getAllProducts();
      }

      setProducts(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  }, [filters, productService]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
}

export function useFeaturedProducts(limit: number = 5): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productService = container.get<ProductService>(TYPES.ProductService);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await productService.getFeaturedProducts(limit);
      setProducts(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos destacados');
    } finally {
      setLoading(false);
    }
  }, [limit, productService]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}

export function useProductBySlug(slug: string): {
  product: Product | null;
  loading: boolean;
  error: string | null;
} {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productService = container.get<ProductService>(TYPES.ProductService);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await productService.getProductBySlug(slug);
        setProduct(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar producto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug, productService]);

  return { product, loading, error };
}
