// 'use client'
// import { products } from "@/data/products";
// import { Box, Button } from "@mui/material";
// import ProductCard from "./ProductCard";
// import Link from "next/link";

// export default function ProductGrid() {
//   // Mostrar solo los primeros 5 productos
//   const featuredProducts = products.slice(0, 5);

//   return (
//     <Box>
//       <div className="flex flex-col gap-4 mb-10">
//           <h2 className="text-4xl font-black leading-tight tracking-[-0.033em] nav-link">
//             Productos Destacados
//           </h2>
//           <p className="text-base font-normal leading-normal text-text-muted-light max-w-2xl">
//             Descubre nuestros productos destacados
//           </p>
//         </div>
//       <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4">
//         {featuredProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             href={`/productos/${product.slug}`}
//             image={product.image}
//             title={product.name}
//             subtitle="Ver Detalles"
//             showOverlay={false}
//           />
//         ))}
//       </div>
//       <Box className="flex p-2 md:p-4 justify-end">
//         <div className="flex justify-end mt-10">
//           <Button
//             variant="contained"
//             href="/productos"
//             component={Link}
//             endIcon={<span className="material-symbols-outlined text-[20px]">arrow_forward</span>}
//             sx={{
//               borderRadius: '12px',
//               padding: '12px 28px',
//               fontSize: '16px',
//               fontWeight: 700,
//               textTransform: 'none',
//               boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
//               '&:hover': {
//                 boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
//               }
//             }}
//           >
//             Ver Todos los Productos
//           </Button>
//         </div>
//       </Box>
//     </Box>
//   );
// }

"use client";
import { products } from "@/data/products";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductGrid() {
  // Mostrar solo los primeros 5 productos
  const featuredProducts = products.slice(0, 5);

  return (
    <Box>
      <div className="flex items-center justify-between gap-4 mb-10 border">
        <div>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.033em] nav-link">
            Productos Destacados
          </h2>
          <p className="text-base font-normal leading-normal text-text-muted-light max-w-2xl">
            Descubre nuestros productos destacados
          </p>
        </div>
        <Link
          href="/products"
          className="w-full md:w-auto text-text-muted-light flex items-center gap-2 hover:text-primary transition-colors"
        >
          <span className="text-text-muted-bold">Ver Todos los Productos</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </Link>

      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            href={`/products/${product.slug}`}
            image={product.image}
            title={product.name}
            subtitle="Ver Detalles"
            showOverlay={false}
          />
        ))}
      </div>


    </Box>
  );
}
