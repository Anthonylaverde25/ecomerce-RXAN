import { products } from "@/data/products";
import { Box, Button } from "@mui/material";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductGrid() {
  // Mostrar solo los primeros 5 productos
  const featuredProducts = products.slice(0, 5);

  return (
    <Box>
      <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">
        Productos Destacados
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            href={`/productos/${product.slug}`}
            image={product.image}
            title={product.name}
            subtitle="Ver Detalles"
            showOverlay={false}
          />
        ))}
      </div>
      <Box className="flex p-2 md:p-4 justify-end">
        <Link href="/productos" className="w-full md:w-auto">
          <Button 
            className="w-full" 
            variant="contained"
          >
            Ver Todos los Productos
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
