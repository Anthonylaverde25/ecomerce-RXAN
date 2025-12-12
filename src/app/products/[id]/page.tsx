"use client";

import { use } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Breadcrumbs } from "@/components/shared";
import useProductById from "@/features/product/hooks/useProductById";
import { ProductDetailSkeleton } from "@/components/features/products/ProductDetailSkeleton";
import { ProductNotFound } from "@/components/features/products/ProductNotFound";
import { ProductsErrorState } from "@/components/features/products";

export default function ProductoDetalle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: product, isLoading, isError, error } = useProductById(id);
  const { addItem } = useCart();

  console.log('producto desde nuestro backend', product);

  // Loading state
  if (isLoading) {
    return (
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-6">
          <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
        <ProductDetailSkeleton />
      </>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16">
        <ProductsErrorState error={error} onRetry={() => window.location.reload()} />
      </div>
    );
  }

  // Not found state
  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-6">
        <Breadcrumbs
          items={[
            { label: "Productos", href: "/products" },
            { label: product.name },
          ]}
        />
      </div>

      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-6">
        <Button
          component={Link}
          href="/products"
          variant="text"
          startIcon={<span className="material-symbols-outlined text-[20px]">arrow_back</span>}
          sx={{
            color: '#1c1917',
            textTransform: 'none',
            fontSize: '14px',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'transparent',
              gap: '12px'
            },
            transition: 'gap 0.2s'
          }}
        >
          Volver a productos
        </Button>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Placeholder */}
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <span className="material-symbols-outlined text-9xl text-gray-400">
              inventory_2
            </span>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            {/* Availability badge */}
            <div className="flex gap-2">
              <div className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 ${product.isAvailable()
                  ? 'bg-green-100 dark:bg-green-900/20'
                  : 'bg-red-100 dark:bg-red-900/20'
                }`}>
                <span className={`material-symbols-outlined text-[18px] ${product.isAvailable() ? 'text-green-600' : 'text-red-600'
                  }`}>
                  {product.isAvailable() ? 'check_circle' : 'cancel'}
                </span>
                <span className={`text-sm font-medium ${product.isAvailable() ? 'text-green-700' : 'text-red-700'
                  }`}>
                  {product.isAvailable()
                    ? (product.stock ? `En stock (${product.stock} disponibles)` : 'Disponible')
                    : 'Agotado'
                  }
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight nav-link">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 py-2">
              <span className="text-4xl font-bold text-primary">
                {product.getFormattedPrice()}
              </span>
              <span className="text-sm text-text-muted-light">por unidad</span>
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed text-text-light">
              {product.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                onClick={() => addItem(product as any)}
                variant="contained"
                disabled={!product.isAvailable()}
                startIcon={<span className="material-symbols-outlined text-[20px]">shopping_cart</span>}
                sx={{
                  flex: '1 1 auto',
                  height: 56,
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 700,
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  '&:hover': {
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  },
                  '&:disabled': {
                    backgroundColor: '#E5E7EB',
                    color: '#9CA3AF',
                  }
                }}
              >
                {product.isAvailable() ? 'Agregar al carrito' : 'Sin stock'}
              </Button>

              <Button
                component={Link}
                href="/#contact"
                variant="outlined"
                sx={{
                  flex: '0 0 auto',
                  height: 56,
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 700,
                  padding: '0 24px',
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                    backgroundColor: 'rgba(236, 109, 19, 0.05)'
                  },
                  minWidth: { xs: '100%', sm: 'fit-content' }
                }}
              >
                <span className="material-symbols-outlined text-[20px] mr-2">mail</span>
                Consultar
              </Button>
            </div>

            {/* Features / Benefits */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-light">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[28px]">verified</span>
                <div>
                  <p className="text-xs text-text-muted-light">Calidad</p>
                  <p className="text-sm font-semibold nav-link">Garantizada</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[28px]">local_shipping</span>
                <div>
                  <p className="text-xs text-text-muted-light">Envío</p>
                  <p className="text-sm font-semibold nav-link">Gratis +$5000</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[28px]">support_agent</span>
                <div>
                  <p className="text-xs text-text-muted-light">Soporte</p>
                  <p className="text-sm font-semibold nav-link">24/7</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[28px]">swap_horiz</span>
                <div>
                  <p className="text-xs text-text-muted-light">Devolución</p>
                  <p className="text-sm font-semibold nav-link">30 días</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
