export default function Story() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center px-4 py-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black leading-tight tracking-tight text-text-light dark:text-text-dark">
          Nuestra Historia
        </h1>
        <p className="text-base font-normal leading-normal text-text-light dark:text-text-dark/90">
          Nuestra historia comienza en una pequeña cocina con un gran sueño: compartir la alegría
          de productos horneados verdaderamente excepcionales. Usamos recetas tradicionales e
          ingredientes locales para crear delicias que no solo son
          deliciosas, sino también hechas con pasión y cuidado.
        </p>
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCs6UZ5N0UTB0LCSGbAVJ1CVcpfZmgiqwcWwIAcOCDW4Shx2T8qiTqWwEdbgVGF4_F77M7Pi1O9Ch794B6CSRx5Z17C6tRgbg1m7JsybGSvJqV8am4E93FLWYUcGmx3MzehIE3V5Gd40OwEsfM3NaPK-jGHoXfc2C-GQWGoH_OwIzg7-16fVzTpk23mlESfgNAy1qJJvLu29rNvtC3rqcgpeOlmpZ2t6oQmS6aUGogVQfD3kyXHvPWntqeNJFvoj0DNDuMkHxkjTVQ")',
        }}
      ></div>
    </div>
  );
}
