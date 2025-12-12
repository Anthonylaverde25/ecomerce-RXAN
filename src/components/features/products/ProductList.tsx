import { Product } from "@/domain";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    const { addItem } = useCart();

    return (
        <>
            {products.map((product) => (
                <div key={product.id} className="flex flex-col gap-3 group">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden relative">
                        {/* Placeholder para imagen - puedes agregar campo image al backend después */}
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                            <span className="material-symbols-outlined text-6xl text-gray-400">
                                inventory_2
                            </span>
                        </div>
                        <button
                            onClick={() => addItem(product as any)} // Temporal: necesitas adaptar CartContext para Product entities
                            className="absolute bottom-3 right-3 h-10 w-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full text-text-light opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:shadow-lg"
                            aria-label="Agregar al carrito"
                        >
                            <span className="material-symbols-outlined">add_shopping_cart</span>
                        </button>
                    </div>
                    <Link href={`/products/${product.id}`}>
                        <div>
                            <p className="text-base font-medium leading-normal nav-link transition-colors">
                                {product.name}
                            </p>
                            <p className="text-sm font-normal leading-normal text-text-muted-light line-clamp-2">
                                {product.description}
                            </p>
                            <p className="text-sm font-bold leading-normal text-primary mt-1">
                                {product.getFormattedPrice()}
                            </p>
                            {product.isAvailable() ? (
                                <span className="text-xs text-green-600 dark:text-green-400">
                                    ✓ Disponible ({product.stock} en stock)
                                </span>
                            ) : (
                                <span className="text-xs text-red-600 dark:text-red-400">
                                    ✗ No disponible
                                </span>
                            )}
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}