export const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-dark-bg relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-10 opacity-5">
        <svg
          width="200"
          height="200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-primary animate-float"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </div>

      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 bg-gradient-subtle rounded-2xl p-8 border border-primary/10 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Conectando Negócios
                </h3>
                <p className="text-lg text-light-text/80 dark:text-dark-text/80 leading-relaxed mb-6">
                  A Alliance é a ponte entre estabelecimentos comerciais e uma
                  rede de entregadores parceiros qualificados. Nossa missão é
                  simplificar a logística de entregas em Maceió.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white dark:border-dark-bg flex items-center justify-center text-xs font-bold text-gray-500">
                      +100
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary text-white border-2 border-white dark:border-dark-bg flex items-center justify-center text-xs font-bold">
                      Lojas
                    </div>
                  </div>
                  <p className="text-sm font-medium text-light-text dark:text-dark-text">
                    Parceiros confiam na Alliance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 animate-fade-in [animation-delay:0.2s]">
            <span className="text-primary font-semibold uppercase tracking-widest mb-2 block">
              Sobre Nós
            </span>
            <h2 className="text-4xl font-extrabold mb-6 text-light-text dark:text-dark-text">
              Logística Inteligente para o Seu Negócio
            </h2>
            <p className="text-lg text-light-text/80 dark:text-dark-text/80 mb-6 leading-relaxed">
              Não somos apenas um aplicativo de entregas. Somos uma solução
              completa que permite que você foque no que faz de melhor: vender.
            </p>
            <p className="text-lg text-light-text/80 dark:text-dark-text/80 mb-8 leading-relaxed">
              Nossa tecnologia localiza o entregador mais próximo
              instantaneamente, garantindo que seu produto chegue ao cliente com
              a máxima rapidez e segurança, tudo monitorado em tempo real.
            </p>

            <ul className="space-y-4">
              {[
                "Entregadores verificados e treinados",
                "Rastreamento em tempo real",
                "Suporte dedicado para parceiros",
                "Área de cobertura em toda Maceió",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-light-text dark:text-dark-text font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
