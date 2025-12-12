'use client'

import Link from 'next/link'
import { CATEGORIES } from '@/domain'
import { Button } from '@mui/material'
import { useCategories } from '@/hooks'

// Mapeo de categorías a imágenes (usando las mismas del código de ejemplo)
const categoryImages: Record<
    string,
    { image: string; title: string; alt: string }
> = {
    Pasteles: {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu6brYXnU2WE8kBDet2kDd6Anr8dGhJIkGvqdGAGTgDX3OUCYsWNmSFA5B75oaNaExqVqPqldRkhZj3Uyc7zEC3gwcKpmhNhCWgVz3mq914YdwbuDocD0uUZ83sxgx7DfPvmkiqJS66CQorXetZSvXiFf-RBLrzir9ZPM5TpChMDZ03Uv0qtDjW_T4kiajmpiK_2u1_Bh365VpqgrAurf6uixDAWO5YrA-XRY2erjfWRpsRkcmFzLc5fIofdadtkQ0ollbxyUgWwE',
        title: 'Nuestros Pasteles',
        alt: 'Delicioso pastel de chocolate con fresas representando la categoría de pasteles',
    },
    Panes: {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-c2bdF8Oc8QVR0Ap7h8PnRzYC9BiPxKMXhzXXOnZWR3iJPcfgHZlJJx1i0wX_SVZVhiSJ4Sj-VG35Picnv7SDbE3yI4tVX1wHTIAJ9z7hVfz6vxNDrRCacKd7iHAkozHmyh2vg1gDTa-rLcUmmr3gRmF5OOQeWngxUorvN88DgqAQofXNZZfSiugjktTMMAKznWoj8ugjbwpv-gI6r8i-2gaDNmE2kiQx-E9PSMcu0tMmbBPdR9-OPuaDR2JJz97CaQhTn-8wGBk',
        title: 'Panes Frescos',
        alt: 'Variedad de panes artesanales recién horneados sobre superficie de madera',
    },
    Galletas: {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB48AAWNFXSFX6EaJSgdSxxjLJBGXQ4kJ6fQtNeZIydpTtg8N_agP_x8B996l-FrOJfoTlZzJ1N0XBHTAgeMBOcbfJ-DGCvbedkav33um5q3nDtd2rXq9gqVtA6pQaZp_r1iN5tgJxI3qTxKxBALfHJcoWAqkKJ73xJotMCI6l_cj4oeDMUYOKODMrWlA4rp8HcC7o8dZizySpabMfEzn4I4s1xGomoeuDrlGGn-tNiawo-Cv4Zm0Fa2PHRGQ8b_27PFK3IyXn7r84',
        title: 'Nuestras Galletas',
        alt: 'Selección de galletas artesanales coloridas sobre mostrador de mármol',
    },
    Muffins: {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB48AAWNFXSFX6EaJSgdSxxjLJBGXQ4kJ6fQtNeZIydpTtg8N_agP_x8B996l-FrOJfoTlZzJ1N0XBHTAgeMBOcbfJ-DGCvbedkav33um5q3nDtd2rXq9gqVtA6pQaZp_r1iN5tgJxI3qTxKxBALfHJcoWAqkKJ73xJotMCI6l_cj4oeDMUYOKODMrWlA4rp8HcC7o8dZizySpabMfEzn4I4s1xGomoeuDrlGGn-tNiawo-Cv4Zm0Fa2PHRGQ8b_27PFK3IyXn7r84',
        title: 'Deliciosos Muffins',
        alt: 'Muffins recién horneados en exhibición',
    },
}

// Solo 4 categorías principales para el collage
const mainCategories = [
    CATEGORIES.PASTELES,
    CATEGORIES.PANES,
    CATEGORIES.GALLETAS,
    CATEGORIES.MUFFINS,
]

export default function Categories() {
    // Usar el hook correctamente - React Query retorna { data, isLoading, error }
    const { data: categories, isLoading, error } = useCategories()

    // Log para debugging
    console.log('categorias', categories)
    console.log('isLoading', isLoading)
    console.log('error', error)

    return (
        <section className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header de la sección */}
                <div className="flex items-center justify-between gap-4 mb-10">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] nav-link">
                            Categorías Destacadas
                        </h2>
                        <p className="text-base font-normal leading-normal text-text-muted-light max-w-2xl">
                            Descubre nuestra selección de productos artesanales
                            organizados por categoría
                        </p>
                    </div>
                    <Link
                        href="/categories"
                        className="hidden md:flex items-center gap-2 text-text-muted-light hover:text-primary transition-colors"
                    >
                        <span className="text-text-muted-bold">
                            Ver Todas las Categorías
                        </span>
                        <span className="material-symbols-outlined text-[20px]">
                            arrow_forward
                        </span>
                    </Link>
                </div>

                {/* Grid Masonry Layout - Simétrico 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {/* Columna Izquierda */}
                    <div className="flex flex-col gap-4 lg:gap-6">
                        {/* Card 1 - Grande */}
                        {(() => {
                            const category = mainCategories[0]
                            const categoryData = categoryImages[category]
                            return (
                                <Link
                                    href={`/products?category=${encodeURIComponent(
                                        category
                                    )}`}
                                    className="relative group overflow-hidden rounded-2xl h-[400px] md:h-[450px] lg:h-[500px] cursor-pointer"
                                >
                                    <img
                                        src={categoryData.image}
                                        alt={categoryData.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8"
                                        style={{
                                            background:
                                                'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0) 100%)',
                                        }}
                                    >
                                        <div className="text-white">
                                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-3 border border-white/30">
                                                <span className="material-symbols-outlined text-base">
                                                    category
                                                </span>
                                                <span>Categoría</span>
                                            </div>
                                            <h3 className="text-3xl lg:text-4xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {categoryData.title}
                                            </h3>
                                            {/* Indicador de hover */}
                                            <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                                                <span>Explorar categoría</span>
                                                <span className="material-symbols-outlined text-base">
                                                    arrow_forward
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-300 pointer-events-none" />
                                </Link>
                            )
                        })()}

                        {/* Card 2 - Mediana */}
                        {(() => {
                            const category = mainCategories[1]
                            const categoryData = categoryImages[category]
                            return (
                                <Link
                                    href={`/products?category=${encodeURIComponent(
                                        category
                                    )}`}
                                    className="relative group overflow-hidden rounded-2xl h-[280px] md:h-[300px] cursor-pointer"
                                >
                                    <img
                                        src={categoryData.image}
                                        alt={categoryData.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 flex flex-col justify-end p-6"
                                        style={{
                                            background:
                                                'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0) 100%)',
                                        }}
                                    >
                                        <div className="text-white">
                                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-3 border border-white/30">
                                                <span className="material-symbols-outlined text-base">
                                                    category
                                                </span>
                                                <span>Categoría</span>
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {categoryData.title}
                                            </h3>
                                            {/* Indicador de hover */}
                                            <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                                                <span>Explorar categoría</span>
                                                <span className="material-symbols-outlined text-base">
                                                    arrow_forward
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-300 pointer-events-none" />
                                </Link>
                            )
                        })()}
                    </div>

                    {/* Columna Derecha */}
                    <div className="flex flex-col gap-4 lg:gap-6">
                        {/* Card 3 - Mediana */}
                        {(() => {
                            const category = mainCategories[2]
                            const categoryData = categoryImages[category]
                            return (
                                <Link
                                    href={`/products?category=${encodeURIComponent(
                                        category
                                    )}`}
                                    className="relative group overflow-hidden rounded-2xl h-[300px] cursor-pointer"
                                >
                                    <img
                                        src={categoryData.image}
                                        alt={categoryData.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 flex flex-col justify-end p-6"
                                        style={{
                                            background:
                                                'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0) 100%)',
                                        }}
                                    >
                                        <div className="text-white">
                                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-3 border border-white/30">
                                                <span className="material-symbols-outlined text-base">
                                                    category
                                                </span>
                                                <span>Categoría</span>
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {categoryData.title}
                                            </h3>
                                            {/* Indicador de hover */}
                                            <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                                                <span>Explorar categoría</span>
                                                <span className="material-symbols-outlined text-base">
                                                    arrow_forward
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-300 pointer-events-none" />
                                </Link>
                            )
                        })()}

                        {/* Card 4 - Grande */}
                        {(() => {
                            const category = mainCategories[3]
                            const categoryData = categoryImages[category]
                            return (
                                <Link
                                    href={`/products?category=${encodeURIComponent(
                                        category
                                    )}`}
                                    className="relative group overflow-hidden rounded-2xl h-[400px] lg:h-[500px] cursor-pointer"
                                >
                                    <img
                                        src={categoryData.image}
                                        alt={categoryData.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8"
                                        style={{
                                            background:
                                                'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0) 100%)',
                                        }}
                                    >
                                        <div className="text-white">
                                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-3 border border-white/30">
                                                <span className="material-symbols-outlined text-base">
                                                    category
                                                </span>
                                                <span>Categoría</span>
                                            </div>
                                            <h3 className="text-3xl lg:text-4xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {categoryData.title}
                                            </h3>
                                            {/* Indicador de hover */}
                                            <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                                                <span>Explorar categoría</span>
                                                <span className="material-symbols-outlined text-base">
                                                    arrow_forward
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-300 pointer-events-none" />
                                </Link>
                            )
                        })()}
                    </div>
                </div>

                {/* Botón Ver Todas las Categorías */}
                {/* <div className="flex justify-end mt-10">
          <Button
            variant="contained"
            href="/products"
            component={Link}
            endIcon={<span className="material-symbols-outlined text-[20px]">arrow_forward</span>}
            sx={{
              borderRadius: '12px',
              padding: '12px 28px',
              fontSize: '16px',
              fontWeight: 700,
              textTransform: 'none',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              '&:hover': {
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
              }
            }}
          >
            Ver Todas las Categorías
          </Button>
        </div> */}
            </div>
        </section>
    )
}
