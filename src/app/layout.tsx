import "reflect-metadata";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { Toaster } from "sonner";
import { CartProvider } from "@/context/CartContext";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import ThemeRegistry from "@/components/ThemeRegistry";
import { Header, Footer } from "@/components/layout";
import "../styles/globals.scss";

const epilogue = Epilogue({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Panadería Artesanal - Compra Online | Productos Frescos",
  description: "Compra online delicias artesanales horneadas frescas todos los días. Envío gratis en CABA. Pedidos antes de las 11hs = entrega el mismo día.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" style={{ scrollPaddingTop: '80px' }}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${epilogue.variable} font-display antialiased bg-background-light text-text-light`}>
        <ThemeRegistry>
          <ReactQueryProvider>
            <Header />
            <main className="pt-16 min-h-screen">
              {children}
            </main>
            <Footer />
            <Toaster position="top-right" richColors />
          </ReactQueryProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
