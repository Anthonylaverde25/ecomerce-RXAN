import Link from "next/link";

interface ProductCardProps {
  href: string;
  image: string;
  title: string;
  subtitle: string;
  showOverlay?: boolean;
}

export default function ProductCard({ 
  href, 
  image, 
  title, 
  subtitle,
  showOverlay = false 
}: ProductCardProps) {
  return (
    <Link 
      href={href}
      className="flex flex-col gap-3 pb-3 group cursor-pointer"
    >
      <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden relative">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url("${image}")` }}
        />
        
        {showOverlay && (
          <>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Title on Image */}
            <div className="absolute inset-0 flex items-end p-4">
              <h3 className="text-white text-lg font-bold">
                {title}
              </h3>
            </div>
          </>
        )}
      </div>
      
      <div>
        <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
          {title}
        </p>
        <p className="text-sm font-normal leading-normal text-text-muted-light dark:text-text-muted-dark flex items-center gap-1 group-hover:gap-2 transition-all">
          {subtitle}
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </p>
      </div>
    </Link>
  );
}
