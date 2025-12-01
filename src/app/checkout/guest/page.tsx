"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function GuestCheckoutPage() {
  const { items, removeItem, total } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [shippingType, setShippingType] = useState("delivery"); // delivery or pickup
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    }).format(price / 100);
  };

  const shippingCost = deliveryMethod === "standard" ? 500 : 1500; // en centavos
  const taxes = Math.round((total + shippingCost) * 0.07); // 7% de impuestos
  const finalTotal = total + shippingCost + taxes;

  const steps = [
    { number: 1, label: "Información" },
    { number: 2, label: "Envío" },
    { number: 3, label: "Pago" },
  ];

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Carrito", href: "/checkout" },
              { label: "Checkout" },
            ]}
          />
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tight">Checkout</h1>
        </div>

        {/* Progress Stepper */}
        <div className="mb-12">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex-1 flex items-center">
                <div className="flex items-center relative w-full">
                  {/* Step Circle */}
                  <div className={`rounded-full transition duration-500 ease-in-out h-10 w-10 flex items-center justify-center font-bold z-10 ${
                    step.number <=  currentStep
                      ? "bg-primary text-white"
                      : "bg-background-light border-2 border-border-light text-text-muted-light"
                  }`}>
                    {step.number}
                  </div>
                  
                  {/* Step Label */}
                  <div className="absolute top-0 -ml-10 text-center mt-14 w-32 text-xs font-medium uppercase">
                    <span className={step.number <= currentStep ? "text-primary" : "text-text-muted-light"}>
                      {step.label}
                    </span>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                      step.number < currentStep ? "border-primary" : "border-border-light"
                    }`} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Personal Information */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">1. Datos Personales</h2>
              <div className="bg-white rounded-xl border border-border-light p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    label="Apellido"
                    placeholder="Ingrese su apellido"
                    fullWidth
                    variant="outlined"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    label="DNI"
                    placeholder="Ingrese su DNI"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    label="Teléfono"
                    placeholder="Ingrese su teléfono"
                    fullWidth
                    variant="outlined"
                  />
                </div>
                <TextField
                  label="Email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  fullWidth
                  variant="outlined"
                />
              </div>
            </section>

            {/* Step 2: Shipping Address & Delivery */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">2. Dirección de Envío & Entrega</h2>
              <div className="bg-white rounded-xl border border-border-light p-6 space-y-6">
                {/* Tabs: Delivery vs Pickup */}
                <div className="flex border-b border-border-light">
                  <button
                    onClick={() => setShippingType("delivery")}
                    className={`flex items-center gap-2 px-4 py-3 font-bold transition-colors ${
                      shippingType === "delivery"
                        ? "text-primary border-b-2 border-primary"
                        : "text-text-muted-light hover:text-text-light"
                    }`}
                  >
                    <span className="material-symbols-outlined">local_shipping</span>
                    <span>Envío a Domicilio</span>
                  </button>
                  <button
                    onClick={() => setShippingType("pickup")}
                    className={`flex items-center gap-2 px-4 py-3 font-bold transition-colors ${
                      shippingType === "pickup"
                        ? "text-primary border-b-2 border-primary"
                        : "text-text-muted-light hover:text-text-light"
                    }`}
                  >
                    <span className="material-symbols-outlined">storefront</span>
                    <span>Retirar por Sucursal</span>
                  </button>
                </div>

                {/* Address Fields (only for delivery) */}
                {shippingType === "delivery" && (
                  <div className="space-y-6 pt-4">
                    <TextField
                      label="Dirección"
                      placeholder="Calle y número"
                      fullWidth
                      variant="outlined"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <TextField
                        label="Ciudad"
                        placeholder="Buenos Aires"
                        fullWidth
                        variant="outlined"
                      />
                      <TextField
                        label="Provincia"
                        placeholder="CABA"
                        fullWidth
                        variant="outlined"
                      />
                      <TextField
                        label="Código Postal"
                        placeholder="1428"
                        fullWidth
                        variant="outlined"
                      />
                    </div>

                    {/* Delivery Method */}
                    <div className="pt-4">
                      <h3 className="text-lg font-bold mb-4">Método de Entrega</h3>
                      <RadioGroup
                        value={deliveryMethod}
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                      >
                        <div className={`flex items-center p-4 rounded-lg border-2 mb-4 ${
                          deliveryMethod === "standard"
                            ? "border-primary bg-primary/10"
                            : "border-border-light bg-background-light"
                        }`}>
                          <FormControlLabel
                            value="standard"
                            control={<Radio />}
                            label={
                              <div className="flex flex-col ml-2">
                                <span className="font-bold">Envío Estándar</span>
                                <span className="text-sm text-text-muted-light">4-7 días hábiles - $5.00</span>
                              </div>
                            }
                            className="flex-1 m-0"
                          />
                        </div>
                        <div className={`flex items-center p-4 rounded-lg border ${
                          deliveryMethod === "express"
                            ? "border-primary bg-primary/10"
                            : "border-border-light bg-background-light"
                        }`}>
                          <FormControlLabel
                            value="express"
                            control={<Radio />}
                            label={
                              <div className="flex flex-col ml-2">
                                <span className="font-bold">Envío Express</span>
                                <span className="text-sm text-text-muted-light">1-3 días hábiles - $15.00</span>
                              </div>
                            }
                            className="flex-1 m-0"
                          />
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Pickup Location (only for pickup) */}
                {shippingType === "pickup" && (
                  <div className="pt-4">
                    <h3 className="text-lg font-bold mb-4">Seleccionar Sucursal</h3>
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg border border-border-light hover:border-primary cursor-pointer transition-colors">
                        <p className="font-bold">Sucursal Centro</p>
                        <p className="text-sm text-text-muted-light">Av. Corrientes 1234, CABA</p>
                        <p className="text-sm text-text-muted-light">Lun-Vie: 9:00-18:00</p>
                      </div>
                      <div className="p-4 rounded-lg border border-border-light hover:border-primary cursor-pointer transition-colors">
                        <p className="font-bold">Sucursal Palermo</p>
                        <p className="text-sm text-text-muted-light">Honduras 5678, CABA</p>
                        <p className="text-sm text-text-muted-light">Lun-Sáb: 10:00-20:00</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Step 3: Payment Information */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">3. Información de Pago</h2>
              <div className="bg-white rounded-xl border border-border-light p-6 space-y-6">
                <TextField
                  label="Número de Tarjeta"
                  placeholder="0000 0000 0000 0000"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <span className="material-symbols-outlined text-text-muted-light mr-2">credit_card</span>
                    ),
                  }}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    label="Fecha de Vencimiento"
                    placeholder="MM / AA"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    label="CVC"
                    placeholder="123"
                    fullWidth
                    variant="outlined"
                  />
                </div>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="La dirección de facturación es la misma que la de envío"
                  className="mt-2"
                />
              </div>
            </section>

            {/* Place Order Button */}
            <div className="pt-4">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  height: 56,
                  fontSize: '18px',
                  fontWeight: 700,
                  borderRadius: '12px',
                }}
              >
                Realizar Pedido
              </Button>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl border border-border-light p-6">
              <h2 className="text-2xl font-bold tracking-tight mb-6">Resumen del Pedido</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm truncate">{item.name}</p>
                      <p className="text-sm text-text-muted-light">Cantidad: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-sm">{formatPrice(item.price * item.quantity)}</p>
                    <IconButton
                      size="small"
                      onClick={() => removeItem(item.id)}
                      sx={{
                        color: '#78716c',
                        '&:hover': { color: '#ef4444', backgroundColor: '#fee2e2' }
                      }}
                    >
                      <span className="material-symbols-outlined text-xl">delete</span>
                    </IconButton>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="border-t border-border-light pt-4 mb-4">
                <div className="flex items-end gap-2">
                  <TextField
                    label="Código de Promoción"
                    placeholder="Ingrese código"
                    size="small"
                    fullWidth
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'rgba(236, 109, 19, 0.2)',
                      color: '#ec6d13',
                      '&:hover': {
                        backgroundColor: 'rgba(236, 109, 19, 0.3)',
                      },
                      boxShadow: 'none',
                      fontWeight: 700,
                      fontSize: '14px',
                      whiteSpace: 'nowrap',
                      minWidth: 'fit-content',
                      px: 3,
                    }}
                  >
                    Aplicar
                  </Button>
                </div>
              </div>

              {/* Totals */}
              <div className="border-t border-border-light pt-4 space-y-2 mb-4">
                <div className="flex justify-between text-base">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span>Envío</span>
                  <span>{formatPrice(shippingCost)}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span>Impuestos</span>
                  <span>{formatPrice(taxes)}</span>
                </div>
              </div>

              {/* Final Total */}
              <div className="border-t border-border-light pt-4">
                <div className="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(finalTotal)}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
