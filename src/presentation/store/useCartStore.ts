import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, CartItemProps } from '@/domain/entities/CartItem';
import { Product } from '@/domain/entities/Product';
import { toast } from 'sonner';

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

// Custom storage to handle serialization/deserialization of CartItem entities
const storage = {
  getItem: (name: string): any => {
    if (typeof localStorage === 'undefined') return null;
    const str = localStorage.getItem(name);
    if (!str) return null;
    const { state } = JSON.parse(str);
    return {
      state: {
        ...state,
        items: state.items.map((i: CartItemProps) => CartItem.fromJSON(i)),
      },
    };
  },
  setItem: (name: string, value: any): void => {
    if (typeof localStorage === 'undefined') return;
    const state = {
      ...value.state,
      items: value.state.items.map((i: CartItem) => i.toJSON()),
    };
    localStorage.setItem(name, JSON.stringify({ state }));
  },
  removeItem: (name: string): void => {
    if (typeof localStorage === 'undefined') return;
    localStorage.removeItem(name);
  },
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product, quantity = 1) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.productId === product.id
          );

          if (existingItemIndex >= 0) {
            const updatedItems = [...state.items];
            const existingItem = updatedItems[existingItemIndex];
            updatedItems[existingItemIndex] = existingItem.updateQuantity(
              existingItem.quantity + quantity
            );

            toast.success("Cantidad actualizada", {
              description: `${product.name} (x${updatedItems[existingItemIndex].quantity})`,
            });

            return { items: updatedItems };
          }

          toast.success("Producto agregado", {
            description: product.name,
          });

          return {
            items: [...state.items, CartItem.fromProduct(product, quantity)],
          };
        });
      },

      removeItem: (productId: string) => {
        set((state) => {
          const item = state.items.find((i) => i.productId === productId);
          if (item) {
            toast.info("Producto eliminado", {
              description: item.name,
            });
          }
          return {
            items: state.items.filter((i) => i.productId !== productId),
          };
        });
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId
              ? item.updateQuantity(quantity)
              : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
        toast.success("Carrito vaciado");
      },

      getTotal: () => {
        return get().items.reduce((sum, item) => sum + item.getSubtotal(), 0);
      },

      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: 'shopping-cart-storage',
      storage: createJSONStorage(() => storage),
      skipHydration: true, // We handle hydration manually in storage or rely on default behavior with custom storage
    }
  )
);
