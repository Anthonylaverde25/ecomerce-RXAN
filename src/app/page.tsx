import { Hero, Categories, Testimonials } from "@/components/features/home";
import { ProductGrid } from "@/components/features/products";
import FAQ from "@/components/FAQ";
import { SocialFloating } from "@/components/shared";

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Width */}
      <div id="inicio">
        <Hero />
      </div>

      {/* Categories + Products - Centrado con contenedor */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Categories Section */}
          <div id="categories" className="scroll-mt-16">
            <Categories />
          </div>

          {/* Featured Products */}
          <div id="destacados" className="scroll-mt-16">
            <ProductGrid />
          </div>
        </div>
      </div>

      {/* Testimonials - Full Width */}
      <div id="testimonios" className="scroll-mt-16">
        <Testimonials />
      </div>

      {/* FAQ - Centrado con contenedor */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* FAQ Section */}
          <div id="faq" className="scroll-mt-16">
            <FAQ />
          </div>
        </div>
      </div>

      <SocialFloating />
    </>
  );
}
