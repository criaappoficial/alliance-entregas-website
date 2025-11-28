export const Footer = () => {
  return (
    <footer className="bg-dark-bg text-dark-text pt-16 pb-5">
      <div className="container-custom">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 mb-16">
          <div>
            <div className="font-extrabold text-2xl text-primary mb-5 flex items-center gap-2.5">
              <span>Alliance</span>
            </div>
            <p className="opacity-70 leading-relaxed">
              Conectando bairros, entregando agilidade. A melhor solução de
              logística local para o seu negócio.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">Empresa</h4>
            <ul className="list-none opacity-70 space-y-4">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">Legal</h4>
            <ul className="list-none opacity-70 space-y-4">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">Contato</h4>
            <ul className="list-none opacity-70 space-y-4">
              <li>contato@alliance.com</li>
              <li>0800 123 4567</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 text-center opacity-50 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Alliance Entregas. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
