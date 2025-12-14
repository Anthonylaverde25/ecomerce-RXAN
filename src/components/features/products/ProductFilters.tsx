"use client";

import useFilterProducts from "@/features/product/hooks/useFilterProducts";
import { useCategories } from "@/hooks";
import { CategoryType } from "@/types/category.types";
import { ProductFilterCriteria } from "@/types/product.types";
import { Dispatch, SetStateAction, useState } from "react";

interface ProductFiltersProps {
  onFilterChange?: (filters: FilterState) => void;
  setCriterias?: Dispatch<SetStateAction<ProductFilterCriteria | undefined>>
}

export interface FilterState {
  categories: string[];
  priceRange: number;
  dietary: string[];
}

export default function ProductFilters({ onFilterChange, setCriterias }: ProductFiltersProps) {
  const { data: categoriesData, isLoading } = useCategories();
  const [filteredCategories, setFilteredCategories] = useState<number[]>([]);

  console.log('categories data in filters', categoriesData);
  const [priceRange, setPriceRange] = useState(50);
  const [dietary, setDietary] = useState<string[]>([]);


  console.log('onFilterChange', onFilterChange);


  const handleCategoryChange = (categoryId: number) => {
    const selected = filteredCategories.includes(categoryId)
      ? filteredCategories.filter((id) => id !== categoryId)
      : [...filteredCategories, categoryId];

    setFilteredCategories(selected);

    setCriterias?.(prev => ({
      ...prev,
      categoryIds: selected.length > 0 ? selected : undefined
    }));
  };
  console.log('filteredCategories', filteredCategories);

  const handleDietaryChange = (diet: string) => {
    // const newDietary = dietary.includes(diet)
    //   ? dietary.filter((d) => d !== diet)
    //   : [...dietary, diet];
    // setDietary(newDietary);
    // onFilterChange?.({ categories, priceRange, dietary: newDietary });
  };

  const handlePriceChange = (value: number) => {
    // setPriceRange(value);
    // onFilterChange?.({ categories, priceRange: value, dietary });
  };

  const handleApplyFilters = () => {
    // onFilterChange?.({ categories, priceRange, dietary });
  };

  const handleClearAll = () => {
    // setCategories([]);
    // setPriceRange(50);
    // setDietary([]);
    // onFilterChange?.({ categories: [], priceRange: 50, dietary: [] });
  };

  return (
    <div className="p-6 rounded-xl bg-white border border-border-light sticky top-28">
      <h3 className="text-lg font-bold mb-4 nav-link">Filtros</h3>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <h4 className="font-semibold mb-3 text-text-light">Categorías</h4>
          <div className="space-y-2">
            {
              categoriesData?.map((c) => (
                <label key={c.id} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filteredCategories.includes(c.id ? c.id : 0)}
                    onChange={() => handleCategoryChange(c.id ? c.id : 0)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-2 focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-sm text-text-muted-light">{c.name}</span>
                </label>
              ))
            }
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h4 className="font-semibold mb-3 text-text-light">Rango de Precio</h4>
          <div className="relative pt-1">
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange}
              onChange={(e) => handlePriceChange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:h-4 
                [&::-webkit-slider-thumb]:w-4 
                [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:bg-primary
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:w-4
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-primary
                [&::-moz-range-thumb]:border-0
                [&::-moz-range-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-xs text-text-muted-light mt-2">
              <span>$0</span>
              <span>$100</span>
            </div>
          </div>
        </div>

        {/* Dietary Needs Filter */}
        <div>
          <h4 className="font-semibold mb-3 text-text-light">Necesidades Dietéticas</h4>
          <div className="space-y-2">
            {["Sin Gluten", "Vegano"].map((diet) => (
              <label key={diet} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={dietary.includes(diet)}
                  onChange={() => handleDietaryChange(diet)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-2 focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-sm text-text-muted-light">{diet}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <button
          onClick={handleApplyFilters}
          className="w-full h-10 px-4 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
        >
          Aplicar Filtros
        </button>
        <button
          onClick={handleClearAll}
          className="w-full h-10 px-4 flex items-center justify-center rounded-lg bg-transparent text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
        >
          Limpiar todo
        </button>
      </div>
    </div>
  );
}
