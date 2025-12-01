export default function FAQ() {
  return (
    <div className="px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-text-light dark:text-text-dark text-[32px] font-bold leading-tight tracking-tighter md:text-4xl">
          Preguntas Frecuentes
        </h2>
        <p className="text-text-muted-light dark:text-text-muted-dark mt-2 max-w-2xl mx-auto">
          Todo lo que necesitás saber sobre pedidos, envíos y pagos
        </p>
      </div>
      <div className="mx-auto max-w-3xl space-y-4">
        <details
          className="group rounded-lg bg-white/5 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light dark:text-text-dark">
            <h2 className="text-lg font-medium">
              ¿Cómo realizo un pedido?
            </h2>
            <span className="relative size-5 shrink-0">
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text-muted-light dark:text-text-muted-dark">
            Es muy simple: navegá por nuestro catálogo, agregá los productos que te gusten al carrito,
            completá tus datos de envío y elegí tu método de pago preferido. Una vez confirmado el pago,
            comenzamos a preparar tu pedido de inmediato.
          </p>
        </details>
        <details className="group rounded-lg bg-white/5 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light dark:text-text-dark">
            <h2 className="text-lg font-medium">
              ¿Cuánto tiempo tarda el envío?
            </h2>
            <span className="relative size-5 shrink-0">
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text-muted-light dark:text-text-muted-dark">
            Si hacés tu pedido antes de las 11:00 hs, ¡lo recibís el mismo día! Los pedidos posteriores
            se entregan al día siguiente. Entregamos sin cargo en toda CABA. Te avisamos por WhatsApp
            cuando el pedido está en camino.
          </p>
        </details>
        <details className="group rounded-lg bg-white/5 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light dark:text-text-dark">
            <h2 className="text-lg font-medium">
              ¿Qué métodos de pago aceptan?
            </h2>
            <span className="relative size-5 shrink-0">
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text-muted-light dark:text-text-muted-dark">
            Aceptamos MercadoPago (tarjetas de débito y crédito), transferencia bancaria y pago
            por WhatsApp. Todos los pagos son 100% seguros. El pedido se procesa una vez
            confirmado el pago.
          </p>
        </details>
        <details className="group rounded-lg bg-white/5 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light dark:text-text-dark">
            <h2 className="text-lg font-medium">
              ¿Puedo cambiar o cancelar mi pedido?
            </h2>
            <span className="relative size-5 shrink-0">
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text-muted-light dark:text-text-muted-dark">
            Podés cancelar o modificar tu pedido contactándonos por WhatsApp dentro de los primeros
            30 minutos después de haberlo realizado. Una vez que comenzamos a hornear, ya no podemos
            hacer cambios. Si hay algún problema con tu pedido al recibirlo, contactanos de inmediato.
          </p>
        </details>
        <details className="group rounded-lg bg-white/5 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light dark:text-text-dark">
            <h2 className="text-lg font-medium">
              ¿Los productos contienen alérgenos?
            </h2>
            <span className="relative size-5 shrink-0">
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text-muted-light dark:text-text-muted-dark">
            Cada producto en nuestro catálogo incluye la lista completa de ingredientes y alérgenos.
            Los alérgenos más comunes son gluten, lácteos y huevo. Si tenés alguna alergia específica,
            revisá la información del producto o contactanos antes de realizar tu pedido.
          </p>
        </details>
        <details className="group rounded-lg bg-white/5 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light dark:text-text-dark">
            <h2 className="text-lg font-medium">
              ¿Cuánto tiempo duran los productos?
            </h2>
            <span className="relative size-5 shrink-0">
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text-muted-light dark:text-text-muted-dark">
            Todos nuestros productos se hornean frescos diariamente sin conservantes artificiales.
            Recomendamos consumir las galletas y muffins dentro de los 3 días, y los pasteles y
            panes dentro de los 4-5 días. Guardalos en un recipiente hermético a temperatura ambiente
            para mantener la frescura.
          </p>
        </details>
      </div>
    </div>
  );
}
