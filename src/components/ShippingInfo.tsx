"use client";

import Link from "next/link";
import { Button } from "@mui/material";

export default function ShippingInfo() {
  const faqs = [
    {
      question: "¿Puedo rastrear mi pedido?",
      answer: "Sí, una vez que tu pedido sea despachado, recibirás un correo electrónico con un enlace de seguimiento para que puedas ver el estado de tu entrega en tiempo real.",
    },
    {
      question: "¿Qué pasa si no estoy en casa para recibirlo?",
      answer: "El servicio de mensajería intentará una segunda visita al día siguiente. Si tampoco te encuentras, el pedido volverá a nuestra tienda y nos pondremos en contacto contigo para coordinar un nuevo envío, que podría tener un costo adicional.",
    },
    {
      question: "¿Hacen entregas los domingos?",
      answer: "No, actualmente realizamos entregas de lunes a sábados en la franja horaria de 9:00 a 18:00 hs.",
    },
  ];

  return (
    <div className="flex-1 px-4 sm:px-10 py-10">
      <div className="layout-content-container flex flex-col max-w-4xl mx-auto flex-1 gap-12">
        {/* Header */}
        <div className="flex flex-col gap-2 p-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark">
            Información de Envíos
          </h1>
          <p className="text-base font-normal leading-normal max-w-2xl mx-auto text-text-muted-light dark:text-text-muted-dark">
            En Artisan Bakes, nos comprometemos a llevar la frescura de nuestros
            productos artesanales directamente a tu puerta. A continuación,
            encontrarás toda la información que necesitas sobre nuestras zonas de
            entrega, horarios y costos para planificar tu pedido.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Zonas de Entrega - Full Width */}
          <div className="flex flex-col gap-4 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary p-2 rounded-lg">
                <span className="material-symbols-outlined">map</span>
              </div>
              <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">
                Zonas de Entrega
              </h2>
            </div>
            <p className="text-sm font-normal leading-normal text-text-muted-light dark:text-text-muted-dark">
              Actualmente realizamos entregas en toda la Ciudad Autónoma de Buenos
              Aires. Consultá el mapa para ver nuestra área de cobertura y
              asegúrate de que llegamos a tu barrio.
            </p>
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl">
              <div 
                className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEdXgsaxOoSMQhwmRJrsKjrSS6zUUbzUZ3onSs_XftR5lr_DQbminN061lBJvJHPiwL9rpi882qUNy4JY3JjdCla89Ddv2V23g5bKkN8EEzU-7_yrFWF8gguo78Dc-Vi9oDHwdDZJZznbdCE51Tzvw9DuDeNfGaPHBBnwbZrA5mcIbPr7cIvpfAJ-CCw0-1K-7sAsU_wzLASFaNqtN5cvOFs40HGfwX7OOVjE1uDFAnjebyD7s6Ib2geXtGN40t571SYObTBCOSRc")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
          </div>

          {/* Horarios y Plazos */}
          <div className="flex flex-col gap-4 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary p-2 rounded-lg">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">
                Horarios y Plazos
              </h2>
            </div>
            <p className="text-sm font-normal leading-normal text-text-muted-light dark:text-text-muted-dark">
              Para garantizar la máxima frescura, todos los pedidos se preparan al
              momento.
            </p>
            <ul className="space-y-3 text-sm text-text-light dark:text-text-dark">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary mt-0.5">
                  check_circle
                </span>
                <span>
                  <strong>Días de entrega:</strong> Lunes a Sábados.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary mt-0.5">
                  check_circle
                </span>
                <span>
                  <strong>Franja horaria:</strong> De 9:00 a 18:00 hs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary mt-0.5">
                  check_circle
                </span>
                <span>
                  <strong>Tiempo estimado:</strong> Los pedidos se entregan en
                  24-48 hs hábiles.
                </span>
              </li>
            </ul>
          </div>

          {/* Costos de Envío */}
          <div className="flex flex-col gap-4 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary p-2 rounded-lg">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">
                Costos de Envío
              </h2>
            </div>
            <p className="text-sm font-normal leading-normal text-text-muted-light dark:text-text-muted-dark">
              Nuestras tarifas de envío son fijas para facilitar tu compra.
            </p>
            <ul className="space-y-3 text-sm text-text-light dark:text-text-dark">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary mt-0.5">
                  check_circle
                </span>
                <span>
                  <strong>Costo fijo:</strong> $500 para toda CABA.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-base text-primary mt-0.5">
                  check_circle
                </span>
                <span>
                  <strong>Envío gratis:</strong> En compras superiores a $5,000.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-2xl font-bold leading-tight tracking-[-0.015em] pt-8 text-text-light dark:text-text-dark">
            Preguntas Frecuentes
          </h2>
          <div className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
            {faqs.map((faq, index) => (
              <details key={index} className="group cursor-pointer py-4">
                <summary className="flex items-center justify-between text-base font-bold text-text-light dark:text-text-dark [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-text-muted-light dark:text-text-muted-dark">
                    expand_more
                  </span>
                </summary>
                <p className="mt-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-4 text-center p-8 mt-8 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark">
          <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">
            ¿Listo para disfrutar?
          </h3>
          <p className="text-base font-normal max-w-md text-text-muted-light dark:text-text-muted-dark">
            Explorá nuestro catálogo de productos horneados con amor y hacé tu
            pedido hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full sm:w-auto">
            <Button
              component={Link}
              href="/#products"
              variant="contained"
              size="large"
              sx={{
                borderRadius: "12px",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: 600,
                width: { xs: "100%", sm: "auto" },
              }}
              endIcon={
                <span className="material-symbols-outlined">arrow_forward</span>
              }
            >
              Ver Productos
            </Button>
            <Button
              component="a"
              href="https://wa.me/5491234567890"
              target="_blank"
              variant="contained"
              size="large"
              sx={{
                borderRadius: "12px",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: 600,
                backgroundColor: "#25D366",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  backgroundColor: "#20c75a",
                },
              }}
              startIcon={
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                </svg>
              }
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

