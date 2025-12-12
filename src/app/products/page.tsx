"use client";

import { useState } from "react";
import {
  ProductFilters,
  ProductList,
  ProductsLoadingSkeleton,
  EmptyProductsState,
  ProductsErrorState
} from "@/components/features/products";
import { Breadcrumbs } from "@/components/shared";
import type { FilterState } from "@/components/features/products/ProductFilters";
import useAllProducts from "@/features/product/hooks/useAllProducts";

export default function ProductosPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: 50,
    dietary: [],
  });
  const itemsPerPage = 9;

  // Obtener productos desde el hook
  const { data: products, isLoading, isError, error, refetch } = useAllProducts();

  // Filter products based on active filters
  const filteredProducts = products?.filter((product) => {
    // Aquí puedes agregar filtros cuando tengas categorías en el backend
    // Por ahora solo filtramos por precio si es necesario
    return true;
  }) || [];

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const activeFiltersCount = filters.categories.length + filters.dietary.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Todos los Productos" }]} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Hidden on mobile by default */}
        <aside className="lg:col-span-1 hidden lg:block">
          <ProductFilters onFilterChange={setFilters} />
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] nav-link">
              Todos los Productos
            </h1>
          </div>

          {/* Filter pills and controls */}
          <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 px-3 hover:bg-gray-200 transition-colors">
              <span className="material-symbols-outlined text-base text-text-light">swap_vert</span>
              <p className="text-sm font-medium text-text-light">Ordenar por</p>
              <span className="material-symbols-outlined text-base text-text-light">expand_more</span>
            </button>

            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 px-3 hover:bg-gray-200 transition-colors">
              <span className="material-symbols-outlined text-base text-text-light">grid_view</span>
              <p className="text-sm font-medium text-text-light">Vista de cuadrícula</p>
              <span className="material-symbols-outlined text-base text-text-light">expand_more</span>
            </button>

            {activeFiltersCount > 0 && (
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-3">
                <span className="material-symbols-outlined text-base text-primary">tune</span>
                <p className="text-sm font-medium text-primary">Filtros</p>
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full">
                  {activeFiltersCount}
                </span>
              </button>
            )}
          </div>

          {/* ESTADO DE CARGA */}
          {isLoading && <ProductsLoadingSkeleton />}

          {/* ESTADO DE ERROR */}
          {isError && !isLoading && (
            <ProductsErrorState error={error} onRetry={() => refetch()} />
          )}

          {/* ESTADO VACÍO */}
          {!isLoading && !isError && filteredProducts.length === 0 && (
            <EmptyProductsState />
          )}

          {/* PRODUCTOS - Solo mostrar si hay datos y no hay error */}
          {!isLoading && !isError && filteredProducts.length > 0 && (
            <>
              {/* Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <ProductList products={paginatedProducts} />
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center mt-10 gap-1">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="flex size-10 items-center justify-center text-text-muted-light hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Página anterior"
                  >
                    <span className="material-symbols-outlined text-xl">chevron_left</span>
                  </button>

                  {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    const showPage =
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      Math.abs(pageNum - currentPage) <= 1;

                    const showEllipsis =
                      (pageNum === 2 && currentPage > 3) ||
                      (pageNum === totalPages - 1 && currentPage < totalPages - 2);

                    if (showEllipsis) {
                      return (
                        <span
                          key={pageNum}
                          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-muted-light"
                        >
                          ...
                        </span>
                      );
                    }

                    if (!showPage) return null;

                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`text-sm font-${pageNum === currentPage ? "bold" : "normal"
                          } leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${pageNum === currentPage
                            ? "text-white bg-primary"
                            : "text-text-light hover:bg-gray-100"
                          }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="flex size-10 items-center justify-center text-text-muted-light hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Página siguiente"
                  >
                    <span className="material-symbols-outlined text-xl">chevron_right</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
