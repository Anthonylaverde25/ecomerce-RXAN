import { Metadata } from "next";
import CategoriesClient from "./CategoriesClient";

export const metadata: Metadata = {
  title: "Todas las Categorías | Artisan Bakes",
  description: "Explora todas nuestras categorías de productos artesanales.",
};

export default function CategoriesPage() {
  return <CategoriesClient />;
}
