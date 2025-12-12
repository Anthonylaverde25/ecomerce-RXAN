"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { CartDrawer } from "@/components/features/cart";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      // Aplicar estilo scrolled cuando está en top absoluto O cuando ha scrolleado
      setIsScrolled(window.scrollY === 0 || window.scrollY > 10);
    };

    // Establecer estado inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid px-4 py-3 transition-all duration-300 sm:px-6 md:px-10 ${isScrolled
        ? "border-border-light/50 bg-background-light/80 backdrop-blur-md shadow-sm"
        : "border-transparent bg-transparent"
        }`}
    >
      <div className="flex items-center gap-4">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] nav-link">
          Artisan Bakes
        </h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            className="text-sm font-medium leading-normal nav-link transition-colors"
            href="/"
          >
            Inicio
          </Link>
          <Link
            className="text-sm font-medium leading-normal nav-link transition-colors"
            href="/#products"
          >
            Productos Destacados
          </Link>
          <Link
            className="text-sm font-medium leading-normal nav-link transition-colors"
            href="/products"
          >
            Todos los Productos
          </Link>
          <Link
            className="text-sm font-medium leading-normal nav-link transition-colors"
            href="/how-to-buy"
          >
            Cómo Comprar
          </Link>
          <Link
            className="text-sm font-medium leading-normal nav-link transition-colors"
            href="/shipping"
          >
            Envíos
          </Link>
        </div>


        {/* Cart Icon Desktop - Minimalista y Elegante */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative group p-2.5 rounded-full hover:bg-primary/10 transition-all duration-200"
          aria-label="Abrir carrito"
        >
          {/* Icono del carrito */}
          <span className="material-symbols-outlined text-[26px] text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
            shopping_cart
          </span>

          {/* Badge contador - Solo si hay items */}
          {itemCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[22px] h-[22px] px-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-lg ring-2 ring-white dark:ring-gray-900">
              {itemCount}
            </span>
          )}
        </button>
      </div>
      <div className="md:hidden flex items-center gap-1">
        {/* Cart Icon Mobile - Minimalista */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative group p-2 rounded-full hover:bg-primary/10 transition-all duration-200"
          aria-label="Abrir carrito"
        >
          <span className="material-symbols-outlined text-[26px] text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
            shopping_cart
          </span>

          {itemCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[22px] h-[22px] px-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-lg ring-2 ring-white">
              {itemCount}
            </span>
          )}
        </button>
        <IconButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          sx={{ color: '#1c1917' }}
        >
          <span className="material-symbols-outlined">menu</span>
        </IconButton>
      </div>

      {/* Overlay - Fondo oscuro */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-background-light shadow-2xl z-[70] md:hidden transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Header del drawer */}
        <div className="flex items-center justify-between p-6 border-b border-border-light">
          <h3 className="text-lg font-bold nav-link">Menú</h3>
          <IconButton
            onClick={() => setIsMenuOpen(false)}
            sx={{ color: '#78716c' }}
          >
            <span className="material-symbols-outlined">close</span>
          </IconButton>
        </div>

        {/* Contenido del drawer */}
        <div className="px-4 py-6 flex flex-col gap-1 overflow-y-auto h-[calc(100%-80px)]">
          <Link
            className="text-base font-medium leading-relaxed nav-link transition-all py-3 px-4 rounded-lg hover:bg-primary/10 flex items-center gap-3"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">home</span>
            Inicio
          </Link>
          <Link
            className="text-base font-medium leading-relaxed nav-link transition-all py-3 px-4 rounded-lg hover:bg-primary/10 flex items-center gap-3"
            href="/#products"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">shopping_bag</span>
            Productos Destacados
          </Link>
          <Link
            className="text-base font-medium leading-relaxed nav-link transition-all py-3 px-4 rounded-lg hover:bg-primary/10 flex items-center gap-3"
            href="/products"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">storefront</span>
            Todos los Productos
          </Link>
          <Link
            className="text-base font-medium leading-relaxed nav-link transition-all py-3 px-4 rounded-lg hover:bg-primary/10 flex items-center gap-3"
            href="/how-to-buy"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">shopping_cart_checkout</span>
            Cómo Comprar
          </Link>
          <Link
            className="text-base font-medium leading-relaxed nav-link transition-all py-3 px-4 rounded-lg hover:bg-primary/10 flex items-center gap-3"
            href="/shipping"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
            Envíos
          </Link>

          {/* Separador */}
          <div className="h-px bg-border-light my-4"></div>

          {/* Botón CTA */}
          {/* Cart Icon - Minimalista */}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsCartOpen(true);
            }}
            className="relative group p-2 rounded-full hover:bg-primary/10 transition-all duration-200 self-center"
            aria-label="Abrir carrito"
          >
            {/* Icono del carrito */}
            <span className="material-symbols-outlined text-2xl text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
              shopping_cart
            </span>

            {/* Badge contador - Solo si hay items */}
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-md">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
