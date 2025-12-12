// Estado de error para problemas del servidor
interface ProductsErrorStateProps {
    error: Error | null;
    onRetry: () => void;
}

export function ProductsErrorState({ error, onRetry }: ProductsErrorStateProps) {
    const is500Error = error?.message?.includes('500') || error?.message?.includes('Server Error');

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="w-24 h-24 mb-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-red-500">
                    {is500Error ? 'cloud_off' : 'error'}
                </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {is500Error ? 'Error del servidor' : 'Algo salió mal'}
            </h3>

            <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mb-2">
                {is500Error
                    ? 'El servidor no está disponible en este momento. Por favor, intenta más tarde.'
                    : 'No pudimos cargar los productos. Por favor, intenta nuevamente.'
                }
            </p>

            {error && (
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-6 font-mono">
                    {error.message}
                </p>
            )}

            <button
                onClick={onRetry}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
                <span className="material-symbols-outlined text-xl">refresh</span>
                Reintentar
            </button>
        </div>
    );
}
