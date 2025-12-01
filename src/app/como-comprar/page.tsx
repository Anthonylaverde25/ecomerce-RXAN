"use client";

import HowToOrder from "@/components/HowToOrder";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ComoComprarPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-6">
        <Breadcrumbs items={[{ label: "Cómo Comprar" }]} />
      </div>
      <HowToOrder />
    </>
  );
}
