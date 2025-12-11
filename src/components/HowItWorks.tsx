export const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Pedido Realizado",
      description: "O cliente faz a compra no estabelecimento parceiro online.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Notificação",
      description:
        "O parceiro notifica nosso sistema e localizamos o entregador mais próximo.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Coleta Rápida",
      description:
        "O entregador vai até a loja de moto para retirar a mercadoria.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Entrega Finalizada",
      description:
        "O produto chega ao cliente final com segurança e agilidade.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-pattern scroll-mt-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest">
            Sobre nós
          </span>
          <h2 className="text-4xl font-extrabold mt-2 text-light-text dark:text-dark-text">
            Entregas em Maceió
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-16">
          {steps.map((step) => (
            <div
              key={step.id}
              className="glass-card relative p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-2 cursor-default"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-light-text dark:text-dark-text">
                {step.title}
              </h3>
              <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed">
                {step.description}
              </p>

              {/* Connector line for desktop - could be implemented with pseudo-elements in Tailwind */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
