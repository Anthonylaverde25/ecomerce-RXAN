"use client";

import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import Button from "@mui/material/Button";
import { Breadcrumbs } from "@/components/shared";

export default function ProductoDetalle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-6">
        <Breadcrumbs
          items={[
            { label: "Productos", href: "/productos" },
            { label: product.name },
          ]}
        />
      </div>

      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-6">
          <Button
            component={Link}
            href="/#products"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url("${product.image}")` }}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              {/* Category badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <span className="material-symbols-outlined text-primary text-[18px]">category</span>
                <span className="text-sm font-medium text-primary">{product.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight nav-link">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">
                  ${(product.price / 100).toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                </span>
                <span className="text-sm text-text-muted-light">/ unidad</span>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed text-text-light">
                {product.description}
              </p>

              {/* Ingredients */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold nav-link flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">nutrition</span>
                  Ingredientes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-background-light border border-border-light rounded-full text-sm text-text-light"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Allergens */}
              {product.allergens.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold nav-link flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">warning</span>
                    Alérgenos
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.allergens.map((allergen, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-red-50 border border-red-200 rounded-full text-sm text-red-700 font-medium"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-row gap-3 pt-4">
                <Button
                  onClick={() => addItem(product)}
                  variant="contained"
                  startIcon={<span className="material-symbols-outlined text-[20px]">shopping_cart</span>}
                  sx={{
                    flex: '1 1 auto', // Allow it to grow and shrink
                    height: 48,
                    borderRadius: '12px',
                    fontSize: { xs: '14px', md: '16px' },
                    fontWeight: 700,
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    '&:hover': {
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    },
                    whiteSpace: 'nowrap'
                  }}
                >
                  Agregar al carrito
                </Button>
                <Button
                  component={Link}
                  href="/#contact"
                  variant="outlined"
                  sx={{
                    flex: '0 0 auto', // Don't grow too much, keep it compact
                    height: 48,
                    borderRadius: '12px',
                    fontSize: { xs: '14px', md: '16px' },
                    fontWeight: 700,
                    padding: '0 16px',
                    borderWidth: '2px',
                    '&:hover': {
                      borderWidth: '2px',
                      backgroundColor: 'rgba(236, 109, 19, 0.05)'
                    },
                    minWidth: 'fit-content'
                  }}
                >
                  <span className="material-symbols-outlined text-[20px] mr-2">mail</span>
                  Consultar
                </Button>
              </div>

              {/* Extra info */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-light">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">schedule</span>
                  <div>
                    <p className="text-xs text-text-muted-light">Disponibilidad</p>
                    <p className="text-sm font-medium nav-link">Hoy mismo</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">local_shipping</span>
                  <div>
                    <p className="text-xs text-text-muted-light">Envío</p>
                    <p className="text-sm font-medium nav-link">Gratis +$5000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
