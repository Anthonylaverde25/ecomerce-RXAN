"use client";

import ShippingInfo from "@/components/ShippingInfo";
import { Breadcrumbs } from "@/components/shared";

export default function EnviosPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-6">
        <Breadcrumbs items={[{ label: "Envíos" }]} />
      </div>
      <ShippingInfo />
    </>
  );
}
