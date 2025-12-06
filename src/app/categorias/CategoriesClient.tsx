"use client";

import Link from "next/link";
import { Breadcrumbs } from "@/components/shared";
import { useCategories } from "@/hooks";

const DEFAULT_CATEGORY_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBNyJOUv636qzs_ZDAk083mLOqpi6w0rT9oulJtQrtemio9Zl7rt7vz-cYXZLHmpDXDldMYdbn1pkoZhFHLT-c1c2ZtokMBnOTmDbFg9jqzQmVSs4E93sqyRPCeMQaYVFUB6DBtGWx5pTRDa82pFyaBgfVe7kVGJAbAXO1RKd2RYB1dqjcX3ltBG8tUIQuNwZAn9Nbo2uSlwPl4b7Nnomn9XiWlcJDH0yp1a4ipf66CbNj-ntO0FO4XEdG2mf3MaNFwh9sWIrNHj08";

export default function CategoriesClient() {
  const { data: categoriesData, isLoading } = useCategories();
  console.log('categories data', categoriesData);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-8 p-4 mt-8 max-w-[960px] mx-auto w-full">
        <div className="flex flex-col gap-2 p-4">
          <Breadcrumbs items={[{ label: "Todas las Categorías" }]} />
          <div className="h-10 w-72 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mt-2" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-4 mt-8 max-w-[960px] mx-auto w-full">
      <div className="flex flex-col gap-2 p-4">
        <Breadcrumbs items={[{ label: "Todas las Categorías" }]} />
        <div className="flex flex-wrap justify-between gap-3 pt-2">
          <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] min-w-72 nav-link">
            Todas las Categorías
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {categoriesData?.map((category) => (
          <Link key={category.id} className="group" href="#">
            <div
              className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-[3/4] overflow-hidden transform transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("${DEFAULT_CATEGORY_IMAGE}")`,
              }}
            >
              <p className="text-white text-base font-bold leading-tight line-clamp-3">
                {category.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
