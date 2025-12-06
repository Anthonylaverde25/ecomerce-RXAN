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
            <h2 className="text-4xl font-black text-text-light dark:text-text-dark mb-2">
              Más Vendidos
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Los favoritos de nuestros clientes
            </p>
          </div>
          
          {/* Link "Ver Catálogo Completo" - Desktop */}
          <Link
            href="/#products"
            className="hidden md:flex items-center gap-2 text-text-muted-light hover:text-primary transition-colors"
          >
            <span className="font-medium">Ver Catálogo Completo</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>

          {/* Badge "Top 4" - Mobile */}
          <div className="md:hidden">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="material-symbols-outlined text-lg">trending_up</span>
              Top 4
            </span>
          </div>
        </div>

        {/* Grid con cards más anchas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/productos/${product.slug}`}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
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

                {/* Botón flotante que aparece en hover - Más sutil */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
                    aria-label="Agregar al carrito"
                  >
                    <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Precio más prominente */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary">
                    ${(product.price / 100).toFixed(0)}
                  </span>
                  <span className="text-xs text-text-muted-light dark:text-text-muted-dark">
                    c/u
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button - Comentado para usar después */}
        {/* <div className="mt-10 text-center">
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
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
                backgroundColor: 'rgba(236, 109, 19, 0.05)',
              }
            }}
            endIcon={<span className="material-symbols-outlined">arrow_forward</span>}
          >
            Ver Catálogo Completo
          </Button>
        </div> */}
      </div>
    </section>
  );
}
