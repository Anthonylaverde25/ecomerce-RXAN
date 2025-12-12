// Skeleton para página de detalle de producto
export function ProductDetailSkeleton() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 animate-pulse">
                {/* Image skeleton */}
                <div className="aspect-[4/5] rounded-2xl bg-gray-200 dark:bg-gray-700"></div>

                {/* Info skeleton */}
                <div className="flex flex-col gap-6">
                    {/* Category badge skeleton */}
                    <div className="w-32 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>

                    {/* Title skeleton */}
                    <div className="space-y-3">
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    </div>

                    {/* Price skeleton */}
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>

                    {/* Description skeleton */}
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                    </div>

                    {/* Buttons skeleton */}
                    <div className="flex gap-3 pt-4">
                        <div className="flex-1 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
                        <div className="w-32 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
