export const Features = () => {
  const features = [
    {
      title: "Foco Regional",
      description:
        "Entregas exclusivas entre bairros, garantindo agilidade e conhecimento da região.",
      icon: "🏙️",
    },
    {
      title: "100% Moto",
      description:
        "Agilidade no trânsito com frota exclusivamente de motocicletas.",
      icon: "🛵",
    },
    {
      title: "Rastreio em Tempo Real",
      description: "Acompanhe o entregador desde a coleta até a entrega final.",
      icon: "📍",
    },
    {
      title: "Parceiros Verificados",
      description:
        "Todos os entregadores passam por um rigoroso processo de verificação.",
      icon: "✅",
    },
    {
      title: "Suporte Dedicado",
      description:
        "Equipe pronta para resolver qualquer imprevisto durante a entrega.",
      icon: "🎧",
    },
    {
      title: "Economia",
      description: "Taxas justas para parceiros e entregadores, sem surpresas.",
      icon: "💰",
    },
  ];

  return (
    <section id="features" className="section-padding bg-gradient-subtle scroll-mt-24">
      <div className="container-custom">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16 items-center">
          <div>
            <span className="text-primary font-semibold uppercase tracking-widest">
              Por que nos escolher?
            </span>
            <h2 className="text-4xl font-extrabold mt-2 mb-6 text-light-text dark:text-dark-text">
              A melhor solução para <br />
              <span className="text-primary">suas entregas locais</span>
            </h2>
            <p className="text-lg text-light-text/70 dark:text-dark-text/70 mb-8 leading-relaxed">
              Diferente de outros apps, focamos na eficiência local. Conectamos
              bairros próximos para garantir que sua encomenda chegue em
              minutos, não horas.
            </p>
            <a href="#download" className="btn btn-primary">
              Quero ser Parceiro
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-light-text dark:text-dark-text">
                  {feature.title}
                </h3>
                <p className="text-sm text-light-text/70 dark:text-dark-text/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
