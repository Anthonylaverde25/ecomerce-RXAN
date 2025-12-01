import ShippingInfo from "@/components/ShippingInfo";

export const metadata = {
  title: "Información de Envíos - Panadería Artesanal",
  description: "Conocé nuestras zonas de entrega en CABA, tiempos de envío y costos. Envío gratis en todas las zonas. Pedidos antes de las 11hs se entregan el mismo día.",
};

export default function EnviosPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark mt-5">
      <ShippingInfo />
    </div>
  );
}
