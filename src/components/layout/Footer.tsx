import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-solid border-border-light dark:border-border-dark px-4 pt-16 pb-8 sm:px-6 md:px-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
            <div className="size-6 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold">Artisan Bakes</h2>
          </div>
          <p className="mt-4 max-w-xs text-sm text-text-muted-light dark:text-text-muted-dark">
            Delicias artesanales, horneadas frescas todos los días con los mejores ingredientes
            locales.
          </p>
          <div className="mt-8 flex space-x-6 text-text-light dark:text-text-dark">
            <a className="hover:opacity-75" href="#" target="_blank">
              <span className="sr-only">Facebook</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
            <a className="hover:opacity-75" href="#" target="_blank">
              <span className="sr-only">Instagram</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 0C9.58 0 9.22.01 8.207.058c-1.07.05-1.874.227-2.617.512a6.525 6.525 0 00-2.298 1.543 6.525 6.525 0 00-1.543 2.298c-.285.743-.462 1.547-.512 2.617C.01 9.22 0 9.58 0 12s.01 2.78.058 3.793c.05 1.07.227 1.874.512 2.617a6.525 6.525 0 001.543 2.298 6.525 6.525 0 002.298 1.543c.743.285 1.547.462 2.617.512C9.22 23.99 9.58 24 12 24s2.78-.01 3.793-.058c1.07-.05 1.874-.227 2.617-.512a6.525 6.525 0 002.298-1.543 6.525 6.525 0 001.543-2.298c.285-.743.462-1.547.512-2.617C23.99 14.78 24 14.42 24 12s-.01-2.78-.058-3.793c-.05-1.07-.227-1.874-.512-2.617a6.525 6.525 0 00-1.543-2.298A6.525 6.525 0 0018.407.573c-.743-.285-1.547-.462-2.617-.512C14.78.01 14.42 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
            <a className="hover:opacity-75" href="#" target="_blank">
              <span className="sr-only">Twitter</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
          <div className="text-sm">
            <p className="font-bold text-text-light dark:text-text-dark">
              Mapa del Sitio
            </p>
            <ul className="mt-4 space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li>
                <Link className="transition hover:text-primary" href="#">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-primary" href="#">
                  Productos
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-primary" href="#">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-primary" href="#">
                  Contacto
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-primary" href="#">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="font-bold text-text-light dark:text-text-dark">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li>
                <Link className="transition hover:text-primary" href="#">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-primary" href="#">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="font-bold text-text-light dark:text-text-dark">
              Contáctanos
            </p>
            <ul className="mt-4 space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li>
                <a
                  className="transition hover:text-primary"
                  href="mailto:hello@artisanbakes.com"
                >
                  hello@artisanbakes.com
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-primary"
                  href="tel:+1234567890"
                >
                  (123) 456-7890
                </a>
              </li>
              <li>
                <span>123 Bakery Lane, Foodieville</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-border-light dark:border-border-dark pt-8">
        <p className="text-center text-xs text-text-muted-light dark:text-text-muted-dark">
          © 2024 Artisan Bakes. Todos los Derechos Reservados.
        </p>
      </div>
    </footer>
  );
}
