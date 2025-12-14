// Product Repository Implementation
// Implementación concreta del repositorio de productos usando mock data

import { injectable } from 'inversify';
import 'reflect-metadata';
import { Product } from '@/domain/entities/Product';
import { IProductRepository } from '@/domain/repositories/IProductRepository';
import { MOCK_PRODUCTS } from '../api/mock/products.mock';
import { toast } from 'sonner';
import axiosInstance from '@/lib/axios';
import { getAllProductsRequest, ProductFilterCriteria, ProductProps, showProductRequest } from '@/types/product.types';

@injectable()
export class ProductRepository implements IProductRepository {
  private products: Product[];

  constructor() {
    // Convertimos los datos mock a entidades de dominio
    this.products = MOCK_PRODUCTS.map(p => Product.fromJSON(p));
  }





  /**
   * Simula delay de red
   */
  private async delay(ms: number = 300): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Serializa parámetros para Laravel (sin usar librerías externas)
   * Convierte arrays a formato indices: categoryIds[0]=1&categoryIds[1]=2
   */
  private serializeParams(criteria: ProductFilterCriteria): string {
    const params = new URLSearchParams();

    Object.entries(criteria).forEach(([key, value]) => {
      if (value === undefined || value === null) return;

      if (Array.isArray(value)) {
        // Serializar arrays con índices: key[0]=val1&key[1]=val2
        value.forEach((item, index) => {
          params.append(`${key}[${index}]`, String(item));
        });
      } else {
        params.append(key, String(value));
      }
    });

    return params.toString();
  }

  async index(criteria: ProductFilterCriteria = {}): Promise<Product[]> {
    try {
      // Construir URL con parámetros serializados correctamente
      // const queryString = this.serializeParams(criteria);
      // const url = `api/public/products${queryString ? `?${queryString}` : ''}`;

      const { data: { products } } = await axiosInstance.get<{ products: getAllProductsRequest[] }>(`api/public/products`, {
        params: criteria
      });
      return products.map((p: getAllProductsRequest) => new Product(p));
    } catch (error) {
      toast.error('Error al cargar los productos');
      throw error;
    }
  }

  async show(id: string): Promise<Product | null> {
    try {
      const { data: { product } } = await axiosInstance.get<{ product: showProductRequest }>(`api/public/products/${id}`)
      return new Product(product)
    } catch (error) {
      toast.error('Error al cargar el producto')
      throw error
    }
  }
}
