// Estado vacío cuando no hay productos
export function EmptyProductsState() {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="w-24 h-24 mb-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-gray-400">
                    inventory_2
                </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No se encontraron productos
            </h3>

            <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mb-6">
                No hay productos disponibles en este momento. Por favor, intenta más tarde o ajusta los filtros.
            </p>

            <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
                <span className="material-symbols-outlined text-xl">refresh</span>
                Recargar página
            </button>
        </div>
    );
}
