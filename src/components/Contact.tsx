export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-bg">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold uppercase tracking-widest">
            Contato
          </span>
          <h2 className="text-4xl font-extrabold mt-2 text-light-text dark:text-dark-text">
            Faça Parte da Alliance
          </h2>
          <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-4 max-w-2xl mx-auto">
            Escolha como você quer crescer com a gente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Partner Card */}
          <div className="glass-card p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
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
                <path d="M3 21h18v-8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8z"></path>
                <path d="M9 10a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0v1z"></path>
                <path d="M19 10a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0v1z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
              Quero ser Parceiro
            </h3>
            <p className="text-light-text/70 dark:text-dark-text/70 mb-8">
              Cadastre seu estabelecimento e aumente suas vendas com nossa
              logística eficiente.
            </p>
            <a
              href="https://wa.me/558293552525"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full block"
            >
              Cadastrar Loja
            </a>
          </div>

          {/* Courier Card */}
          <div className="glass-card p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-secondary">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
              Quero ser Entregador
            </h3>
            <p className="text-light-text/70 dark:text-dark-text/70 mb-8">
              Tenha liberdade para trabalhar e ganhe dinheiro fazendo entregas
              na sua região.
            </p>
            <a
              href="https://forms.gle/QyiLRGWWUN6FaJis9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-secondary text-white hover:bg-secondary/90 w-full block"
            >
              Cadastrar como Entregador
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
