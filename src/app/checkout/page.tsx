"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { Breadcrumbs } from "@/components/shared";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity, total } = useCart();
  const [postalCode, setPostalCode] = useState("");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price / 100);
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = "5491133334444"; // Reemplazar con el número real
    const message = `Hola! Quiero realizar el siguiente pedido:\n\n${items
      .map((item) => `- ${item.quantity}x ${item.name} (${formatPrice(item.price)})`)
      .join("\n")}\n\nTotal: ${formatPrice(total)}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Productos recomendados (aleatorios o fijos por ahora)
  const recommendedProducts = products.slice(0, 4);

  return (
    <>
      <div className="pb-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        {/* Breadcrumbs */}
        <div className="mb-4">
          <Breadcrumbs items={[{ label: "Carrito" }]} />
        </div>
        
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <Link href="/#products" className="text-sm text-text-muted-light hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Seguir comprando
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold font-display mb-10 nav-link">Tu Cesta</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-[64px] text-text-muted-light mb-4">shopping_cart_off</span>
            <h2 className="text-xl font-bold mb-2">Tu carrito está vacío</h2>
            <p className="text-text-muted-light mb-8">¡Agrega algunas delicias para comenzar!</p>
            <Button
              component={Link}
              href="/#products"
              variant="contained"
              size="large"
              sx={{ borderRadius: '12px' }}
            >
              Ver Productos
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Cart Items */}
            <div className="lg:col-span-7 space-y-8">
              {/* Headers (Desktop only) */}
              <div className="hidden md:grid grid-cols-12 gap-4 text-sm text-text-muted-light border-b border-border-light pb-4">
                <div className="col-span-6">Producto</div>
                <div className="col-span-2 text-center">Precio</div>
                <div className="col-span-2 text-center">Cantidad</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>

              {/* Items List */}
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="group relative flex flex-col md:grid md:grid-cols-12 gap-4 items-center border-b border-border-light pb-6 last:border-0">
                    {/* Product Info */}
                    <div className="col-span-6 w-full flex items-center gap-4">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg nav-link">{item.name}</h3>
                        <p className="text-sm text-text-muted-light">{item.category}</p>
                      </div>
                    </div>

                    {/* Price (Mobile: Hidden, Desktop: Visible) */}
                    <div className="hidden md:block col-span-2 text-center font-medium">
                      {formatPrice(item.price)}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-2 flex items-center justify-center">
                      <div className="flex items-center gap-1 bg-white border border-border-light rounded-full px-1 py-1">
                        <IconButton 
                          size="small" 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <span className="material-symbols-outlined text-[16px]">remove</span>
                        </IconButton>
                        <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                        <IconButton 
                          size="small" 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          color="primary"
                        >
                          <span className="material-symbols-outlined text-[16px]">add</span>
                        </IconButton>
                      </div>
                    </div>

                    {/* Subtotal & Delete */}
                    <div className="col-span-2 w-full flex md:block items-center justify-between md:text-right">
                      <span className="md:hidden font-medium text-text-muted-light">Subtotal:</span>
                      <div className="flex items-center justify-end gap-3">
                        <span className="font-bold text-lg text-primary">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        <IconButton 
                          onClick={() => removeItem(item.id)}
                          sx={{ 
                            color: '#78716c',
                            '&:hover': { color: '#ef4444', backgroundColor: '#fee2e2' }
                          }}
                        >
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </IconButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-5">
              <div className="bg-[#fffcf8]  p-6 md:p-8 sticky top-24">
                <h2 className="text-2xl font-bold font-display mb-6">Resumen de compra</h2>

                {/* Shipping Calculator */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                    Calcular tiempos y costos de envío
                  </label>
                  <div className="flex gap-2">
                    <TextField 
                      placeholder="Código postal" 
                      variant="outlined" 
                      size="small" 
                      fullWidth
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      sx={{ 
                        backgroundColor: 'white',
                        '& .MuiOutlinedInput-root': { borderRadius: '8px' }
                      }}
                    />
                    <Button 
                      variant="outlined" 
                      sx={{ 
                        borderRadius: '8px',
                        borderColor: '#d6d3d1',
                        color: '#44403c',
                        fontWeight: 600,
                        '&:hover': { borderColor: '#a8a29e', backgroundColor: '#f5f5f4' }
                      }}
                    >
                      CALCULAR
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 border-t border-border-light pt-6 mb-6">
                  <div className="flex justify-between text-text-light">
                    <span>Subtotal</span>
                    <span className="font-medium">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-text-light">
                    <span>Descuentos</span>
                    <span className="font-medium text-green-600">- $ 0</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-primary pt-4 border-t border-border-light mt-4">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <div className=" flex flex-col gap-2">
                  <Button
                    onClick={handleWhatsAppOrder}
                    variant="contained"
                    fullWidth
                    startIcon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    }
                    sx={{
                      height: 56,
                  
                      
                      
                    }}
                  >
                    Finalizar por WhatsApp
                  </Button>
                  
                  <Link href="/checkout/guest" className="w-full">
                    <Button
                      variant="text"
                      fullWidth
                      sx={{
                        height: 48,
                        fontSize: '15px',
                        fontWeight: 600,
                        textTransform: 'none',
                        color: '#78716c',
                        '&:hover': {
                          backgroundColor: 'rgba(236, 109, 19, 0.05)',
                          color: '#ec6d13',
                        }
                      }}
                    >
                      Comprar como Invitado
                    </Button>
                  </Link>
                  
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M14.7 18.7h-1.8c-.5 0-.8-.3-.9-.8l-.2-1.4c-.1-.5-.5-.8-1-.8h-1.6c-.6 0-1 .4-1 1s.4 1 1 1h.4l.2 1.3c.1.6.6 1.1 1.3 1.1h3.6c.6 0 1.1-.4 1.2-1 .1-.6-.3-1.2-.9-1.3l-.3-.1z"/>
                         <path d="M19.8 11.3c-.2-1.3-1.1-2.4-2.4-2.8l-5.6-1.9c-.6-.2-1.2-.3-1.8-.3-2.1 0-4.1 1.3-4.8 3.3l-.1.4c-.2.6.1 1.2.7 1.4l.4.1c.5.2 1-.1 1.2-.6l.1-.4c.4-1.1 1.5-1.8 2.6-1.8.3 0 .7.1 1 .2l5.6 1.9c.7.2 1.1.8 1.2 1.5.1.7-.3 1.4-1 1.6l-5.6 1.9c-.3.1-.7.2-1 .2-1.1 0-2.2-.7-2.6-1.8l-.1-.4c-.2-.6-.8-.9-1.4-.7-.6.2-.9.8-.7 1.4l.1.4c.7 2 2.7 3.3 4.8 3.3.6 0 1.2-.1 1.8-.3l5.6-1.9c1.3-.4 2.2-1.5 2.4-2.8.1-1.3-.6-2.5-1.8-2.9z"/>
                      </svg>
                    }
                    sx={{
                      height: 56,
                      borderRadius: '9999px',
                      fontSize: '16px',
                      fontWeight: 700,
                      textTransform: 'none',
                      borderWidth: '2px',
                      borderColor: '#009ee3', // MercadoPago Blue
                      color: '#009ee3',
                      '&:hover': {
                        borderWidth: '2px',
                        backgroundColor: 'rgba(0, 158, 227, 0.05)',
                        borderColor: '#009ee3',
                      }
                    }}
                  >
                    Pagar con MercadoPago
                  </Button>
                </div>

                <div className="mt-6 text-center">
                  <Link href="/#products" className="text-sm font-medium text-primary hover:underline">
                    Seguir comprando &rsaquo;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Upselling Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold font-display mb-8">Combiná con tu compra</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-border-light hover:shadow-lg transition-all group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button className="absolute bottom-3 right-3 bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 truncate">{product.name}</h3>
                  <p className="text-primary font-bold">{formatPrice(product.price)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
