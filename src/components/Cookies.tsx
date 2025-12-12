import { useEffect, useState } from "react";

export const Cookies = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setOpen(window.location.hash === "#cookies");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  const close = () => {
    if (window.history && window.history.pushState) {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    } else {
      window.location.hash = "";
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white dark:bg-dark-bg rounded-2xl p-6 w-[92%] max-w-[800px] shadow-xl relative">
        <button
          onClick={close}
          className="absolute top-3 right-3 text-dark-text hover:text-primary"
          aria-label="Fechar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-4">
          <span className="text-primary font-semibold uppercase tracking-widest">Cookies</span>
          <h2 className="text-3xl font-extrabold mt-2 text-light-text dark:text-dark-text">Política de Cookies</h2>
          <p className="text-light-text/80 dark:text-dark-text/80 mt-3 leading-relaxed">
            Utilizamos cookies para garantir a melhor experiência no nosso aplicativo de mobilidade urbana de entregas
            (moto entregas), melhorar desempenho, segurança e personalização.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass-card rounded-xl p-4">
            <h3 className="text-lg font-bold mb-1 text-light-text dark:text-dark-text">Essenciais</h3>
            <p className="text-light-text/70 dark:text-dark-text/70">Sessão, login, preferências de tema e funcionamento básico.</p>
          </div>
          <div className="glass-card rounded-xl p-4">
            <h3 className="text-lg font-bold mb-1 text-light-text dark:text-dark-text">Desempenho e Analytics</h3>
            <p className="text-light-text/70 dark:text-dark-text/70">Otimização de rotas, telas e estabilidade sem identificação direta.</p>
          </div>
          <div className="glass-card rounded-xl p-4">
            <h3 className="text-lg font-bold mb-1 text-light-text dark:text-dark-text">Localização e Personalização</h3>
            <p className="text-light-text/70 dark:text-dark-text/70">Sugestão de entregadores próximos e tempos estimados.</p>
          </div>
          <div className="glass-card rounded-xl p-4">
            <h3 className="text-lg font-bold mb-1 text-light-text dark:text-dark-text">Marketing Responsável</h3>
            <p className="text-light-text/70 dark:text-dark-text/70">Campanhas relevantes; desativação sem impacto nas funções essenciais.</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <a href="#contact" className="btn btn-primary">Falar com Suporte</a>
          <a href="#download" className="btn bg-secondary text-white hover:bg-secondary/90">Baixar o App</a>
        </div>
      </div>
    </div>
  );
};
