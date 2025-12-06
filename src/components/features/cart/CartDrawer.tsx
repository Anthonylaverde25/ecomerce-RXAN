"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "5491138765700";

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, clearCart, total, itemCount } = useCart();

  const formatPrice = (price: number) => {
    return `$${(price / 100).toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return "";

    let message = "🛒 *Nuevo Pedido - Artisan Bakes*\n\n";
    
    items.forEach((item) => {
      message += `• ${item.name}\n`;
      message += `  Cantidad: ${item.quantity}\n`;
      message += `  Precio: ${formatPrice(item.price * item.quantity)}\n\n`;
    });

    message += `*Total: ${formatPrice(total + (total >= 5000 ? 0 : 500))}*\n\n`;
    message += "¡Gracias por tu pedido! 🥐";

    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    clearCart();
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: {
            xs: '100%',
            md: '420px',
          },
          backgroundColor: '#f8f7f6',
        },
      }}
    >
      <div className="h-full flex flex-col bg-background-light">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border-light">
          <h2 className="text-lg font-bold uppercase tracking-wide nav-link">MI COMPRA</h2>
          <button
            onClick={onClose}
            className="text-text-muted-light hover:text-text-light transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
              <div className="bg-primary/10 p-8 rounded-full">
                <span className="material-symbols-outlined text-[64px] text-primary/60">
                  shopping_cart
                </span>
              </div>
              <div>
                <p className="text-xl font-bold nav-link mb-2">Tu carrito está vacío</p>
                <p className="text-sm text-text-muted-light">
                  Agregá productos deliciosos para comenzar
                </p>
              </div>
              <Link
                href="/#products"
                onClick={onClose}
                className="mt-4 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-md"
              >
                Ver productos
              </Link>
            </div>
          ) : (
            <>
              {/* Banner promocional */}
              {total >= 3000 && (
                <div className="bg-primary/10 px-5 py-3 text-center border-b border-primary/20">
                  <p className="text-sm font-semibold text-primary">
                    ¡Envío gratis en compras mayores a {formatPrice(5000)}!
                  </p>
                </div>
              )}

              {/* Items */}
              <div className="px-4 py-3 space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="relative bg-background-light rounded-xl p-3 hover:bg-white/50 transition-colors">
                    {/* Delete button */}
                    <IconButton
                      onClick={() => removeItem(item.id)}
                      size="small"
                      className="absolute top-1 right-1"
                      sx={{
                        color: '#78716c',
                        '&:hover': { color: '#ef4444' }
                      }}
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </IconButton>

                    <div className="flex gap-3 items-center">
                      {/* Image */}
                      <Link
                        href={`/productos/${item.slug}`}
                        onClick={onClose}
                        className="flex-shrink-0"
                      >
                        <div
                          className="w-16 h-16 rounded-xl bg-cover bg-center"
                          style={{ backgroundImage: `url("${item.image}")` }}
                        />
                      </Link>

                      {/* Info */}
                      <div className="flex-1 min-w-0 pr-6">
                        <Link
                          href={`/productos/${item.slug}`}
                          onClick={onClose}
                          className="font-semibold text-sm nav-link hover:text-primary line-clamp-1 mb-0.5"
                        >
                          {item.name}
                        </Link>
                        <p className="text-[11px] text-text-muted-light mb-3">
                          {item.category}
                        </p>

                        {/* Quantity and Price row */}
                        <div className="flex items-center justify-between">
                          {/* Quantity controls */}
                          <div className="flex items-center gap-1 bg-white rounded-full px-1 py-0.5">
                            <IconButton
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              size="small"
                              sx={{ padding: '4px' }}
                            >
                              <span className="material-symbols-outlined text-[16px]">remove</span>
                            </IconButton>
                            <span className="text-sm font-bold nav-link min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <IconButton
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              size="small"
                              color="primary"
                              sx={{ padding: '4px' }}
                            >
                              <span className="material-symbols-outlined text-[16px]">add</span>
                            </IconButton>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-base font-bold text-primary">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-[10px] text-text-muted-light line-through">
                                {formatPrice(item.price * item.quantity * 1.2)}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border-light bg-background-light">
            {/* Shipping calculator */}
            <div className="px-5 py-3.5 border-b border-border-light">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-text-muted-light">
                    local_shipping
                  </span>
                  <span className="text-text-light">Envío</span>
                </div>
                <Button
                  variant="text"
                  size="small"
                  endIcon={<span className="material-symbols-outlined text-[14px]">chevron_right</span>}
                  sx={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#1c1917',
                    '&:hover': { color: '#ec6d13' }
                  }}
                >
                  CALCULAR ENVÍO
                </Button>
              </div>
            </div>

            {/* Ver detalle - ABIERTO POR DEFECTO */}
            <details open className="px-5 py-2.5 border-b border-border-light">
              <summary className="text-xs text-text-muted-light cursor-pointer hover:text-text-light py-1">
                Ver detalle
              </summary>
              <div className="mt-2 space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted-light text-xs">Subtotal</span>
                  <span className="font-semibold nav-link text-sm">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted-light text-xs">Envío</span>
                  <span className="font-semibold text-green-600 text-sm">
                    {total >= 5000 ? 'Gratis' : formatPrice(500)}
                  </span>
                </div>
              </div>
            </details>

            {/* Total */}
            <div className="px-5 py-3.5">
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-sm font-bold uppercase nav-link">TOTAL</span>
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(total + (total >= 5000 ? 0 : 500))}
                </span>
              </div>

              {/* Finalizar compra button */}
              <Button
                component={Link}
                href="/checkout"
                onClick={onClose}
                variant="contained"
                fullWidth
                startIcon={
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                }
                sx={{
                  height: 48,
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'none',
                  marginBottom: '10px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  '&:hover': {
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  }
                }}
              >
                Finalizar Compra
              </Button>

              {/* Secondary actions */}
              <div className="flex items-center justify-between text-xs">
                <Button
                  component={Link}
                  href="/#products"
                  onClick={onClose}
                  variant="text"
                  size="small"
                  startIcon={<span className="material-symbols-outlined text-[14px]">chevron_left</span>}
                  sx={{
                    fontSize: '11px',
                    color: '#78716c',
                    textTransform: 'none',
                    padding: '4px 8px',
                    minWidth: 'auto',
                    '&:hover': { color: '#1c1917' }
                  }}
                >
                  Seguir comprando
                </Button>
                <Button
                  onClick={clearCart}
                  variant="text"
                  size="small"
                  sx={{
                    fontSize: '11px',
                    color: '#dc2626',
                    fontWeight: 500,
                    textTransform: 'none',
                    padding: '4px 8px',
                    minWidth: 'auto',
                    '&:hover': {
                      color: '#b91c1c',
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  Vaciar carrito
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
}
