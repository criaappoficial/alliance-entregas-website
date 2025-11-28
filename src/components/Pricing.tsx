export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "R$ 99",
      period: "/mês",
      description: "Ideal para pequenos negócios que estão começando.",
      features: [
        "Até 50 entregas/mês",
        "Rastreamento básico",
        "Suporte por email",
        "Área de cobertura local",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "R$ 199",
      period: "/mês",
      description: "Para empresas em crescimento que precisam de agilidade.",
      features: [
        "Até 200 entregas/mês",
        "Rastreamento em tempo real",
        "Suporte prioritário (WhatsApp)",
        "Área de cobertura expandida",
        "Relatórios mensais",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Sob Consulta",
      period: "",
      description: "Soluções personalizadas para grandes volumes.",
      features: [
        "Entregas ilimitadas",
        "API de integração",
        "Gerente de conta dedicado",
        "Frota exclusiva",
        "SLA garantido",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-pattern relative">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold uppercase tracking-widest">
            Planos
          </span>
          <h2 className="text-4xl font-extrabold mt-2 text-light-text dark:text-dark-text">
            Escolha o Melhor Plano
          </h2>
          <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-4 max-w-2xl mx-auto">
            Temos opções flexíveis que se adaptam ao tamanho e necessidade do
            seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-primary text-white shadow-xl scale-105 z-10"
                  : "glass-card hover:shadow-lg"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Mais Popular
                </div>
              )}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.highlight
                    ? "text-white"
                    : "text-light-text dark:text-dark-text"
                }`}
              >
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span
                  className={`text-4xl font-extrabold ${
                    plan.highlight ? "text-white" : "text-primary"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlight
                      ? "text-white/80"
                      : "text-light-text/60 dark:text-dark-text/60"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mb-8 ${
                  plan.highlight
                    ? "text-white/90"
                    : "text-light-text/70 dark:text-dark-text/70"
                }`}
              >
                {plan.description}
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={plan.highlight ? "text-white" : "text-primary"}
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span
                      className={
                        plan.highlight
                          ? "text-white"
                          : "text-light-text dark:text-dark-text"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full block text-center py-3 rounded-lg font-bold transition-colors ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary-hover"
                }`}
              >
                Começar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
