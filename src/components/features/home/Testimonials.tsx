export default function Testimonials() {
  const reviews = [
    {
      name: "Jessica L.",
      text: '"¡Las mejores galletas de chispas de chocolate con sal marina que he probado! Perfectamente masticables y el equilibrio ideal entre dulce y salado. ¡Soy cliente de por vida!"',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAKgkwdVIkxpt6vDxiNy7l1SIX_rvmCWbQpSYfuzfHY-utk8qdll7hyZM22U4sUDsQfWoROvTS4n1HdEu8FDeeaPVYtsz_fNQEmeRQjo-7_vozMeHm8dJWxdnQ5Y1nfSVVdq8_aqRxvA9d0CsA5DYoJ2o3GqFABNl1vUbCZYVgVr2IPC6bRkdYvUBNk89Kud3Lw8TbkNzMzRlsBtQoXf_WpLJPHWUaZngux0AA43df35-ubdVLHTBuyI4aA2QLP5DjTsdYpRtUjJbM",
    },
    {
      name: "Mark T.",
      text: '"Artisan Bakes sirvió en nuestra fiesta de oficina, y el Pastel de Red Velvet fue un gran éxito. Estaba húmedo, delicioso y hermosamente decorado. ¡Muy recomendable!"',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEyWvRMp39nbOXE7TYLGvdwE8n8MQokSGUDd9CvRuZhNqi3Uz2_o2CfyKs-6qvdTHvP9BDnlAEUWRC0nOkwegX-OmfV9030ikucjz3VSEowbhVOe-9xsCMOcIbrFoRES3ZFa30EGb7W8qhJ2AITn8WGCpsKYZpZkSgG0NWAOeWjA6yt4swoU98RWF8WuhBg3llHWKxKpWrS9eqv8izfaXJs1F2kuodYOOBda8O7DhC_3yXUlEGEMlgOpnZZT8sB1Z8yjo5eDXxFaE",
    },
    {
      name: "Sarah P.",
      text: '"Mi rutina matutina no está completa sin un Muffin de Arándanos con Masa Madre. Siempre están frescos, llenos de sabor y muy satisfactorios."',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCNvTRfQqtbRPbGhG05MbIH0Nxj-VLe9H1gJMpP3wk3nCuQrcICkfl7H80jytztlFNZgnwRiPhzvnobsZVmgMCpqkjzePjNxgXQjVpFb08izV4Q1y1rXwwuFQrKq4FA6x7xEw_A64N6tdB_9kMCjioXPZICftGVJxFN2hSh-SUezyPaDwmRawemYLs3B3ZYWueRTFFYx4MTWLtslXdiOC1QSoE4K-Q5xMjPRO08z3lU6eZk_ifrunyG8h1N8lBcMyURNMWDVdqrhBg",
    },
  ];

  return (
    <div className="px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black leading-tight tracking-tight text-text-light dark:text-text-dark">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <p className="text-text-muted-light dark:text-text-muted-dark mt-2 max-w-2xl mx-auto">
          Palabras de elogio de nuestros clientes felices. Estamos orgullosos de compartir el
          amor que recibimos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg border border-border-light dark:border-border-dark bg-white/5"
          >
            <div
              className="w-20 h-20 rounded-full bg-cover bg-center mb-4"
              style={{ backgroundImage: `url("${review.image}")` }}
            ></div>
            <p className="text-text-muted-light dark:text-text-muted-dark italic leading-relaxed">
              {review.text}
            </p>
            <div className="mt-4">
              <p className="font-bold text-text-light dark:text-text-dark">
                {review.name}
              </p>
              <div className="flex justify-center text-primary mt-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined !text-base"
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
