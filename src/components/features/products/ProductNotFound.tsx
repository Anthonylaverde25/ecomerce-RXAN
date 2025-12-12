import Link from "next/link";
import Button from "@mui/material/Button";

// Estado cuando no se encuentra el producto (404)
export function ProductNotFound() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16">
            <div className="flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 mb-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-red-500">
                        search_off
                    </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Producto no encontrado
                </h1>

                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
                    El producto que estás buscando no existe o ha sido eliminado.
                </p>

                <Button
                    component={Link}
                    href="/products"
                    variant="contained"
                    startIcon={<span className="material-symbols-outlined text-[20px]">arrow_back</span>}
                    sx={{
                        height: 48,
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: 700,
                        px: 4,
                    }}
                >
                    Volver a productos
                </Button>
            </div>
        </div>
    );
}
