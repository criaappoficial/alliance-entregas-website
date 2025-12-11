export const CourierBenefits = () => {
  const benefits = [
    {
      title: "Ganhe por km",
      description:
        "Pagamento por distância percorrida com valores claros e previsíveis.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h18v4H3z"></path>
          <path d="M3 13h18v8H3z"></path>
          <path d="M7 3v18"></path>
        </svg>
      ),
    },
    {
      title: "Valores garantidos",
      description:
        "Sem perda: mínimo garantido em corridas elegíveis e taxas transparentes.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1l3 5 5 .5-4 3.5 1 5-5-2.5-5 2.5 1-5-4-3.5 5-.5z"></path>
        </svg>
      ),
    },
    {
      title: "Bônus por desempenho",
      description:
        "Mais entregas e boas avaliações rendem bônus adicionais por período.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20l9-8-9-8-9 8 9 8z"></path>
          <path d="M12 12l9-8"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="courier-benefits" className="section-padding bg-white dark:bg-dark-bg scroll-mt-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-widest">Importância do Entregador</span>
          <h2 className="text-4xl font-extrabold mt-2 text-light-text dark:text-dark-text">Ganhe dinheiro com entregas</h2>
          <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-4 max-w-2xl mx-auto">
            Pagamento por km, valores garantidos e sem perda. Transparência total nas corridas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-light-text dark:text-dark-text">{item.title}</h3>
              <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://forms.gle/QyiLRGWWUN6FaJis9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-secondary text-white hover:bg-secondary/90"
          >
            Quero ser Entregador
          </a>
        </div>
      </div>
    </section>
  );
};
