// Skeleton loader para productos
export function ProductCardSkeleton() {
    return (
        <div className="flex flex-col gap-3 animate-pulse">
            {/* Image skeleton */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 aspect-[3/4] rounded-xl"></div>

            {/* Text skeleton */}
            <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
        </div>
    );
}

export function ProductsLoadingSkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
                <ProductCardSkeleton key={i} />
            ))}
        </div>
    );
}
