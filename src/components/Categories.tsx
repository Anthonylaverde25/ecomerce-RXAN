"use client";

import { products } from "@/data/products";
import { Box, Button } from "@mui/material";
import ProductCard from "./ProductCard";

export default function Categories() {
  // Extract unique categories from products
  const categories = Array.from(new Set(products.map(p => p.category)));

  // Get a representative image for each category
  const getCategoryImage = (category: string) => {
    const categoryProduct = products.find(p => p.category === category);
    return categoryProduct?.image || "";
  };

  return (
    <Box>
      <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">
        Categorías Destacadas
      </h2>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4">
        {categories.map((category) => {
          const image = getCategoryImage(category);
          
          return (
            <ProductCard
              key={category}
              href="#products"
              image={image}
              title={category}
              subtitle="Ver Productos"
              showOverlay={true}
            />
          );
        })}
      </div>

      <Box className="flex p-2 md:p-4 justify-end">
        <Button className="w-full md:w-auto" variant="contained">
          Ver Todos los Productos
        </Button>
      </Box>
    </Box>
  );
}


