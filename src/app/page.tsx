import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SocialFloating from "@/components/SocialFloating";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        
        {/* Hero - Full viewport width */}
        <div id="home" className="scroll-mt-16">
          <div className="w-full">
            <Hero />
          </div>
        </div>

        {/* Contenido principal - Con contenedor */}
        <div className="flex flex-1 justify-center pb-8 sm:px-4 md:px-10 lg:px-20 xl:px-40">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            <main>
              {/* Categories Section */}
              <div id="categories" className="scroll-mt-16">
                <Categories />
              </div>

              {/* All Products Section */}
              <div id="products" className="scroll-mt-16">
                <ProductGrid />
              </div>

              {/* Testimonials - builds trust */}
              <div id="testimonios" className="scroll-mt-16">
                <Testimonials />
              </div>

              {/* FAQ - E-commerce focused */}
              <div id="faq" className="scroll-mt-16">
                <FAQ />
              </div>
            </main>
          </div>
        </div>
      </div>
      <SocialFloating />
    </div>
  );
}

