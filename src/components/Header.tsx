"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ isScrolled, setIsScrolled] = useState(false);
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
      className={`fixed w-full top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid px-4 py-3 transition-all duration-300 sm:px-6 md:px-10 ${
        isScrolled
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
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] nav-link">
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
            href="/productos"
          >
            Todos los Productos
          </Link>
          <Link
            className="text-sm font-medium leading-normal nav-link transition-colors"
            href="/como-comprar"
          >
            Cómo Comprar
          </Link>
          <Link
            className="text-sm font-medium leading-normal nav-link transition-colors"
            href="/envios"
          >
            Envíos
          </Link>
        </div>
        
        {/* Cart button desktop */}
        <Button
          onClick={() => setIsCartOpen(true)}
          variant="contained"
          startIcon={<span className="material-symbols-outlined text-[20px]">shopping_cart</span>}
          sx={{
            borderRadius: '12px',
            height: 40,
            padding: '0 16px',
            fontSize: '14px',
            fontWeight: 700,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
              backgroundColor: 'rgba(236, 109, 19, 0.9)',
            }
          }}
        >
          <span className="truncate mr-1">Carrito</span>
          <Badge badgeContent={itemCount} color="error" sx={{ '& .MuiBadge-badge': { right: -3, top: 3 } }}>
            <span />
          </Badge>
        </Button>
      </div>
      <div className="md:hidden flex items-center gap-1">
        {/* Cart button mobile */}
        <IconButton
          onClick={() => setIsCartOpen(true)}
          sx={{ color: '#1c1917' }}
        >
          <Badge badgeContent={itemCount} color="primary">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Badge>
        </IconButton>
        <IconButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          sx={{ color: '#1c1917' }}
        >
          <span className="material-symbols-outlined">menu</span>
        </IconButton>
      </div>
      
      {/* Overlay - Fondo oscuro */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer lateral */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-background-light shadow-2xl z-[70] md:hidden transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
            href="/productos"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">storefront</span>
            Todos los Productos
          </Link>
          <Link
            className="text-base font-medium leading-relaxed nav-link transition-all py-3 px-4 rounded-lg hover:bg-primary/10 flex items-center gap-3"
            href="/como-comprar"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">shopping_cart_checkout</span>
            Cómo Comprar
          </Link>
          <Link
            className="text-base font-medium leading-relaxed nav-link transition-all py-3 px-4 rounded-lg hover:bg-primary/10 flex items-center gap-3"
            href="/envios"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
            Envíos
          </Link>
          
          {/* Separador */}
          <div className="h-px bg-border-light my-4"></div>
          
          {/* Botón CTA */}
          <Button
            onClick={() => {
              setIsMenuOpen(false);
              setIsCartOpen(true);
            }}
            variant="contained"
            fullWidth
            startIcon={<span className="material-symbols-outlined text-[20px]">shopping_cart</span>}
            sx={{
              borderRadius: '12px',
              height: 48,
              fontSize: '16px',
              fontWeight: 700,
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
          >
            <span className="truncate mr-1">Ver Carrito</span>
            <Badge badgeContent={itemCount} color="error" sx={{ '& .MuiBadge-badge': { right: -3, top: 3 } }}>
              <span />
            </Badge>
          </Button>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
