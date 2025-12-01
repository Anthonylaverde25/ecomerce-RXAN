"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function FeaturedProducts() {
  const { addItem } = useCart();
  const featuredProducts = products.filter(p => p.featured);

  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-2">
              Más Vendidos
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Los favoritos de nuestros clientes
            </p>
          </div>
          <div className="hidden md:block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="material-symbols-outlined text-lg">trending_up</span>
              Top 4
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={`/productos/${product.slug}`} className="block">
                {/* Product Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url("${product.image}")` }}
                  />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Popular
                  </div>

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-base font-semibold text-text-light dark:text-text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        ${(product.price / 100).toFixed(0)}
                      </span>
                      <span className="text-xs text-text-muted-light dark:text-text-muted-dark ml-1">
                        c/u
                      </span>
                    </div>

                    <Button
                      variant="contained"
                      size="small"
                      onClick={(e) => handleAddToCart(product, e)}
                      sx={{
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontSize: '12px',
                        padding: '6px 12px',
                        minWidth: 'auto',
                      }}
                      startIcon={<span className="material-symbols-outlined text-sm">add_shopping_cart</span>}
                    >
                      Agregar
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Button
            component={Link}
            href="/#products"
            variant="outlined"
            size="large"
            sx={{
              borderRadius: '12px',
              padding: '12px 32px',
              fontSize: '16px',
              fontWeight: 600,
            }}
            endIcon={<span className="material-symbols-outlined">arrow_forward</span>}
          >
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
}
