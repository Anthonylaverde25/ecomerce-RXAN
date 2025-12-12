/**
 * EJEMPLO DE USO: useCategories Hook
 * 
 * Este archivo muestra cómo usar el hook useCategories con React Query
 * para obtener y mostrar las categorías en componentes.
 */

import { useCategories } from '@/hooks';
import type { Category } from '@/domain/entities/Category';

// ===== EJEMPLO 1: Uso Básico =====

export function CategoryListBasic() {
  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) {
    return <div>Cargando categorías...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Categorías</h2>
      {categories?.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          {category.is_active && <span>✓ Activa</span>}
        </div>
      ))}
    </div>
  );
}

// ===== EJEMPLO 2: Filtrar solo categorías activas =====

export function ActiveCategoriesOnly() {
  const { data: categories, isLoading } = useCategories();

  // Filtrar solo categorías activas
  const activeCategories = categories?.filter((cat) => cat.is_active) || [];

  return (
    <div>
      <h2>Categorías Activas ({activeCategories.length})</h2>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <ul>
          {activeCategories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ===== EJEMPLO 3: Menú de navegación con categorías =====

export function CategoryNavMenu() {
  const { data: categories, isLoading } = useCategories();

  if (isLoading) {
    return <nav>Cargando menú...</nav>;
  }

  return (
    <nav>
      <ul>
        {categories
          ?.filter((cat) => cat.is_active && !cat.parent_id) // Solo categorías padre activas
          .map((category) => (
            <li key={category.id}>
              <a href={`/categories/${category.id}`}>{category.name}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

// ===== EJEMPLO 4: Con loading skeleton =====

function CategorySkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
  );
}

export function CategoryListWithSkeleton() {
  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <CategorySkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded p-4">
        <p className="text-red-800">Error al cargar categorías: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {categories?.map((category) => (
        <div key={category.id} className="p-4 border rounded">
          <h3 className="font-bold">{category.name}</h3>
          <p className="text-gray-600">{category.description}</p>
        </div>
      ))}
    </div>
  );
}

// ===== EJEMPLO 5: Select/Dropdown de categorías =====

export function CategorySelect() {
  const { data: categories, isLoading } = useCategories();

  return (
    <div>
      <label htmlFor="category">Selecciona una categoría:</label>
      <select id="category" disabled={isLoading}>
        <option value="">
          {isLoading ? 'Cargando...' : 'Seleccione una categoría'}
        </option>
        {categories
          ?.filter((cat) => cat.is_active)
          .map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
      </select>
    </div>
  );
}

// ===== EJEMPLO 6: Verificar estado de la query =====

export function CategoryStatusCheck() {
  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    refetch,
  } = useCategories();

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <span>Loading: {isLoading ? '✓' : '✗'}</span>
        <span>Fetching: {isFetching ? '✓' : '✗'}</span>
        <span>Success: {isSuccess ? '✓' : '✗'}</span>
        <span>Error: {isError ? '✓' : '✗'}</span>
      </div>

      {isError && <div>Error: {error?.message}</div>}

      {isSuccess && (
        <div>
          <p>Total categorías: {data?.length}</p>
          <button onClick={() => refetch()}>Recargar</button>
        </div>
      )}
    </div>
  );
}

// ===== EJEMPLO 7: Categorías jerárquicas (padre-hijo) =====

export function HierarchicalCategories() {
  const { data: categories } = useCategories();

  // Separar categorías padre e hijos
  const parentCategories = categories?.filter((cat) => !cat.parent_id) || [];

  const getSubcategories = (parentId: number) => {
    return categories?.filter((cat) => cat.parent_id === parentId) || [];
  };

  return (
    <div>
      {parentCategories.map((parent) => {
        const subcategories = getSubcategories(parent.id!);

        return (
          <div key={parent.id} className="mb-4">
            <h3 className="font-bold text-lg">{parent.name}</h3>
            {subcategories.length > 0 && (
              <ul className="ml-4 mt-2">
                {subcategories.map((sub) => (
                  <li key={sub.id} className="text-gray-700">
                    → {sub.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ===== TIPOS DE DATOS DISPONIBLES =====

/*
Category interface:

{
  id?: number;
  name: string;
  description: string;
  parent_id?: number | null;
  is_active: boolean;
  createdAt?: string;
  updatedAt?: string;
}
*/

// ===== OPCIONES DE REACT QUERY =====

/*
El hook useCategories ya está configurado con:
- queryKey: ['categories']
- staleTime: 5 minutos
- gcTime: 10 minutos (cache)

Para refrescar manualmente:
const { refetch } = useCategories();
refetch();

Para invalidar la cache desde otro componente:
import { useQueryClient } from '@tanstack/react-query';

const queryClient = useQueryClient();
queryClient.invalidateQueries({ queryKey: ['categories'] });
*/
