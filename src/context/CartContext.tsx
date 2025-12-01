"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/presentation/store/useCartStore";
import { ReactNode } from "react";
import { Product as DataProduct } from "@/data/products";
import { Product as DomainProduct } from "@/domain/entities/Product";

// Re-export CartItem for compatibility
export type { CartItem } from "@/domain/entities/CartItem";

// Deprecated Provider - just a pass-through now
export function CartProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function useCart() {
  const store = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    useCartStore.persist.rehydrate();
    setMounted(true);
  }, []);

  // Calculate derived state
  const total = store.items.reduce((sum, item) => sum + item.getSubtotal(), 0);
  const itemCount = store.items.reduce((sum, item) => sum + item.quantity, 0);

  // Adapter for addItem to accept DataProduct
  const addItem = (product: DataProduct) => {
    const domainProduct = DomainProduct.fromJSON({
      ...product,
      stock: 100, // Default stock for mock data
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    store.addItem(domainProduct);
  };

  if (!mounted) {
    return {
      items: [],
      addItem: (product: DataProduct) => {},
      removeItem: () => {},
      updateQuantity: () => {},
      clearCart: () => {},
      total: 0,
      itemCount: 0,
    };
  }

  return {
    items: store.items,
    addItem,
    removeItem: store.removeItem,
    updateQuantity: store.updateQuantity,
    clearCart: store.clearCart,
    total,
    itemCount,
  };
}
