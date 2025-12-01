"use client";

import Link from "next/link";
import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="relative flex min-h-[520px] flex-col overflow-hidden shadow-lg">
        {/* Capa de imagen de fondo con blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.75) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDW7wg_JrIjaLfxFLMTQbv_ofH1IXb0ex6HR61A5Y9f8F9-qp7qE0B3Z9AgO4QJHcefBP2ZkA1T5Zjhf0ojkdXDuxyg_fuB5B0O9k_ybMNUeQIztmUUZ-G4g8S7cMgueRJf06yQz8qPkxWStEKXBfGTnV3rol4i2TXJICmfM_99nY6aw8oLt0h9a9iNwxjyiNaZX2_KoROqN308Olcyd681zaNhXH7JexyLYykdP7vyZNC_3leWqvJREYWMrRNkCOTxMaEsPZ0_rS0")',
            filter: 'blur(2px)',
          }}
        />

        {/* Contenedor centrado para el contenido - SIN blur */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-1 flex-col md:flex-row items-center justify-between gap-10 py-10">
            {/* Columna texto */}
            <div className="max-w-xl text-center md:text-left flex flex-col gap-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 self-center md:self-start">
                Recién horneado · Envíos en el día
              </p>

              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Delicias artesanales,
                <span className="block text-primary-200">
                  horneadas frescas a diario
                </span>
              </h1>

              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                Panes, facturas y postres hechos a mano con ingredientes seleccionados.
                Pedí online y recibí en tu casa con la misma calidez que una panadería de barrio.
              </p>

              {/* Bullets de valor */}
              <div className="mt-2 flex flex-col gap-2 text-xs md:text-sm text-white/85">
                <div className="inline-flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full border border-white/40 flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                  <span>Pedidos antes de las 11:00 hs: ¡envío en el día!</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full border border-white/40 flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                  <span>Recetas artesanales sin conservantes ni mezclas raras.</span>
                </div>
              </div>

              {/* Botones */}
              <div className="mt-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <Button
                  component={Link}
                  href="/#products"
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: '12px',
                    height: 48,
                    padding: '0 24px',
                    fontSize: { xs: '14px', md: '16px' },
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    '&:hover': {
                      filter: 'brightness(1.1)',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    },
                    transition: 'all 0.2s'
                  }}
                >
                  Comprar Ahora
                </Button>
                <Button
                  component={Link}
                  href="/#categories"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: '12px',
                    height: 48,
                    padding: '0 24px',
                    fontSize: { xs: '14px', md: '16px' },
                    fontWeight: 500,
                    color: '#fff',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'rgba(255, 255, 255, 0.6)',
                    }
                  }}
                >
                  Ver Categorías
                </Button>
              </div>

              {/* Métrica social / confianza */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start text-xs md:text-sm text-white/80">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-white/80 border border-white/40" />
                  <div className="h-8 w-8 rounded-full bg-white/60 border border-white/40" />
                  <div className="h-8 w-8 rounded-full bg-white/40 border border-white/40 flex items-center justify-center text-[10px] font-semibold">
                    +99
                  </div>
                </div>
                <span>+500 pedidos felices este mes · 4.9/5 en reseñas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Degradado inferior para efecto visual */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-[5]" />
      </div>
    </section>
  );
}
