"use client";

import { Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Si no se proporcionan items, generarlos automáticamente desde la ruta
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname);

  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      sx={{
        mb: 3,
        '& .MuiBreadcrumbs-separator': {
          color: '#78716c',
        },
      }}
    >
      <Link
        href="/"
        className="text-sm text-text-muted-light hover:text-primary transition-colors"
      >
        Inicio
      </Link>
      {breadcrumbItems.map((item, index) => {
        const isLast = index === breadcrumbItems.length - 1;
        
        if (isLast) {
          return (
            <Typography
              key={item.label}
              sx={{
                fontSize: '14px',
                color: '#1c1917',
                fontWeight: 500,
              }}
            >
              {item.label}
            </Typography>
          );
        }

        return item.href ? (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm text-text-muted-light hover:text-primary transition-colors"
          >
            {item.label}
          </Link>
        ) : (
          <Typography
            key={item.label}
            sx={{
              fontSize: '14px',
              color: '#78716c',
            }}
          >
            {item.label}
          </Typography>
        );
      })}
    </MuiBreadcrumbs>
  );
}

// Función para generar breadcrumbs automáticamente desde la ruta
function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  // Eliminar la primera barra y dividir por barras
  const paths = pathname.split('/').filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [];
  
  // Mapeo de rutas a labels amigables
  const labelMap: Record<string, string> = {
    'productos': 'Productos',
    'checkout': 'Carrito',
    'como-comprar': 'Cómo Comprar',
    'envios': 'Envíos',
  };

  let currentPath = '';
  
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    
    // No agregar IDs dinámicos como breadcrumb
    if (path.match(/^[a-f0-9-]{36}$/i) || path.includes('-')) {
      // Si parece ser un slug de producto, no agregarlo aún
      if (index === paths.length - 1) {
        // Es el último, podría ser el nombre del producto
        return;
      }
    }
    
    const label = labelMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
    
    breadcrumbs.push({
      label,
      href: index < paths.length - 1 ? currentPath : undefined,
    });
  });

  return breadcrumbs;
}
