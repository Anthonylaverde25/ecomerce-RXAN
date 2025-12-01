"use client";

import { Button } from "@mui/material";

export default function HowToOrder() {
  const steps = [
    {
      icon: "looks_one",
      title: "Pasos para Realizar tu Pedido",
      content: (
        <div className="space-y-4">
          <p>
            <strong>1. Explora Nuestros Productos:</strong> Navegá por nuestras
            categorías y descubrí tus productos horneados favoritos. Desde pan
            artesanal hasta dulces caprichos, hay algo para todos.
          </p>
          <p>
            <strong>2. Añadí al Carrito:</strong> Seleccioná los artículos que
            te gusten, elegí las cantidades y añadilos a tu carrito de compras
            con un solo clic.
          </p>
          <p>
            <strong>3. Realizá el Pago:</strong> Completá tus datos, seleccioná
            tu método de pago y envío preferido y finalizá tu compra de forma
            segura.
          </p>
          <p>
            <strong>4. ¡Disfrutá!:</strong> Recibirás una confirmación. ¡Prepará
            tus sentidos para disfrutar de delicias recién hechas entregadas
            directamente en tu puerta!
          </p>
        </div>
      ),
      defaultOpen: true,
    },
    {
      icon: "credit_card",
      title: "Métodos de Pago",
      content: (
        <p>
          Aceptamos MercadoPago (Visa, MasterCard, American Express) y
          transferencia bancaria para tu comodidad. Todos los pagos son
          procesados de forma segura.
        </p>
      ),
      defaultOpen: false,
    },
    {
      icon: "local_shipping",
      title: "Información de Envío",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Zona Norte:</strong> Sin cargo - Entrega en 2-4 hs.
          </li>
          <li>
            <strong>Zona Centro:</strong> Sin cargo - Entrega en 1-3 hs.
          </li>
          <li>
            <strong>Zona Sur:</strong> Sin cargo - Entrega en 2-4 hs.
          </li>
          <li>
            <strong>Zona Oeste:</strong> Sin cargo - Entrega en 2-4 hs.
          </li>
        </ul>
      ),
      defaultOpen: false,
    },
  ];

  const infoCards = [
    {
      icon: "schedule",
      title: "Horarios de Atención",
      content: (
        <div className="text-text-muted-light dark:text-text-muted-dark space-y-1">
          <p className="flex justify-between">
            <span>Lunes a Viernes:</span> <span>9:00 AM - 6:00 PM</span>
          </p>
          <p className="flex justify-between">
            <span>Sábados:</span> <span>10:00 AM - 4:00 PM</span>
          </p>
          <p className="flex justify-between">
            <span>Domingos:</span> <span>Cerrado</span>
          </p>
        </div>
      ),
    },
    {
      icon: "help_outline",
      title: "¿Necesitás Ayuda?",
      content: (
        <div className="text-text-muted-light dark:text-text-muted-dark space-y-3">
          <p>Estamos aquí para ayudarte en cada paso del proceso de compra.</p>
          <Button variant="contained" className="w-full">
           
            Contactar por WhatsApp
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-10 md:gap-16 items-center py-10 md:py-16">
      {/* Hero Section */}
      <div className="flex flex-wrap justify-center text-center gap-3 px-4">
        <div className="flex w-full flex-col gap-3">
          <h1 className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
            ¿Cómo Hacer tu Pedido?
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">
            Seguí estos sencillos pasos para disfrutar de nuestros productos
            horneados frescos, hechos con amor y entregados en tu puerta.
          </p>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="w-full max-w-4xl px-4">
        <div className="flex flex-col border-y border-border-light dark:border-border-dark">
          {steps.map((step, index) => (
            <details
              key={index}
              className="group border-b border-border-light dark:border-border-dark last:border-b-0"
              {...(step.defaultOpen ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer items-center justify-between py-4 md:py-6 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-light dark:text-text-dark">
                    {step.title}
                  </h3>
                </div>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-text-muted-light dark:text-text-muted-dark">
                  expand_more
                </span>
              </summary>
              <div className="pb-4 md:pb-6 pt-2 pl-14 pr-8 text-text-muted-light dark:text-text-muted-dark">
                {step.content}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl px-4">
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-white/60 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">
                {card.icon}
              </span>
              <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                {card.title}
              </h3>
            </div>
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
}
