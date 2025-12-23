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
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/allianceentregasofc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center shrink-0"
                aria-label="Instagram"
              >
                <img
                  src="https://cdn.simpleicons.org/instagram/FF7D44?viewbox=auto&size=20"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center shrink-0"
                aria-label="YouTube"
              >
                <img
                  src="https://cdn.simpleicons.org/youtube/FF7D44?viewbox=auto&size=20"
                  alt="YouTube"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">Empresa</h4>
            <ul className="list-none opacity-70 space-y-4">
              <li>
                <a
                  href="#sobre-nos"
                  className="hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    sessionStorage.setItem("footerScroll", String(window.scrollY));
                    window.location.hash = "#sobre-nos";
                  }}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#carreiras"
                  className="hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    sessionStorage.setItem("footerScroll", String(window.scrollY));
                    window.location.hash = "#carreiras";
                  }}
                >
                  Carreiras
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    sessionStorage.setItem("footerScroll", String(window.scrollY));
                    window.location.hash = "#blog";
                  }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">Legal</h4>
            <ul className="list-none opacity-70 space-y-4">
              <li>
                <a
                  href="https://lanselmo.github.io/allianceentregas/termosdeusoallianceentregas.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="https://lanselmo.github.io/allianceentregas/termosdeusoallianceentregas.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  className="hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    sessionStorage.setItem("footerScroll", String(window.scrollY));
                    window.location.hash = "#cookies";
                  }}
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">Contato</h4>
            <ul className="list-none opacity-70 space-y-4">
              <li>allianceexpressmcz@gmail.com</li>
              <li>82 +55 99355-2525</li>
              <li>Maceio, AL</li>
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
