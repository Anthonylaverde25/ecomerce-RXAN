import HowToOrder from "@/components/HowToOrder";

export const metadata = {
  title: "Cómo Comprar - Panadería Artesanal",
  description: "Guía paso a paso para realizar tu pedido online. Pedidos antes de las 11hs se entregan el mismo día.",
};

export default function ComoComprarPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark border mt-5">
      <HowToOrder />
    </div>
  );
}
