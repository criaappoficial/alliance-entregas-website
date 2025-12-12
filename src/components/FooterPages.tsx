import { useEffect, useState } from "react";

const useHashModal = (hash: string) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setOpen(window.location.hash === hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [hash]);
  const close = () => {
    if (window.history && window.history.pushState) {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    } else {
      window.location.hash = "";
    }
    setOpen(false);
  };
  return { open, close };
};

const ModalShell = ({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) => (
  <div className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm flex items-center justify-center">
    <div className="bg-white dark:bg-dark-bg rounded-2xl p-6 w-[92%] max-w-[900px] shadow-xl relative">
      <button onClick={onClose} className="absolute top-3 right-3 text-dark-text hover:text-primary" aria-label="Fechar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <div className="mb-4">
        <span className="text-primary font-semibold uppercase tracking-widest">Informações</span>
        <h2 className="text-3xl font-extrabold mt-2 text-light-text dark:text-dark-text">{title}</h2>
      </div>
      {children}
    </div>
  </div>
);

export const AboutModal = () => {
  const { open, close } = useHashModal("#sobre-nos");
  if (!open) return null;
  return (
    <ModalShell title="Sobre Nós" onClose={close}>
      <div className="space-y-4 text-light-text/80 dark:text-dark-text/80 leading-relaxed">
        <p>
          A Alliance Entregas é uma plataforma desenvolvida para conectar lojistas e entregadores de forma rápida, segura e eficiente.
          Nosso objetivo é simplificar a logística diária, oferecendo tecnologia acessível e rotas inteligentes que reduzem custos e aumentam a produtividade.
        </p>
        <p>
          Atendemos empresas de todos os portes, garantindo entregas ágeis, comunicação transparente e suporte dedicado.
        </p>
        <p>
          Combinamos inovação, organização e simplicidade para que cada entrega seja concluída com excelência. Somos uma solução criada para impulsionar negócios e gerar oportunidades reais para milhares de profissionais.
        </p>
      </div>
    </ModalShell>
  );
};

export const CareersModal = () => {
  const { open, close } = useHashModal("#carreiras");
  if (!open) return null;
  return (
    <ModalShell title="Carreiras" onClose={close}>
      <div className="space-y-4 text-light-text/80 dark:text-dark-text/80 leading-relaxed">
        <p>
          Na Alliance Entregas, valorizamos pessoas que buscam crescimento, autonomia e uma forma moderna de trabalhar.
        </p>
        <p> Aqui, entregadores parceiros contam com:</p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Chamadas otimizadas e rotas inteligentes</li>
          <li>Valores justos e transparência total nos ganhos</li>
          <li>Flexibilidade de horários</li>
          <li>Suporte contínuo e ambiente seguro para trabalhar</li>
        </ul>
        <p>
          Buscamos profissionais responsáveis, com boa postura, respeito às regras de trânsito e vontade de oferecer um serviço de qualidade.
        </p>
        <p>
          Se você deseja fazer parte de um ecossistema que cresce diariamente e oferece oportunidades reais de ganho, junte-se à Alliance Entregas.
        </p>
      </div>
    </ModalShell>
  );
};

const Article = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="glass-card rounded-xl p-5 flex gap-4">
    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-light-text dark:text-dark-text">{title}</h3>
      <p className="text-light-text/70 dark:text-dark-text/70 leading-relaxed mt-1">{children}</p>
    </div>
  </div>
);

export const BlogModal = () => {
  const { open, close } = useHashModal("#blog");
  if (!open) return null;
  return (
    <ModalShell title="Blog" onClose={close}>
      <div className="space-y-5">
        <Article
          title="Como aumentar seus ganhos sendo entregador"
          icon={
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M21 21H3" />
            </svg>
          }
        >
          Ser entregador parceiro da Alliance Entregas significa ter total controle sobre sua rotina e ganhos. Ao aceitar rotas mais estratégicas e utilizar períodos de maior demanda,
          você pode aumentar a rentabilidade diária. Nossa plataforma envia chamadas transparentes, mostrando valores e distâncias para facilitar suas decisões. Trabalhar com foco,
          planejamento e horários inteligentes amplia significativamente seus ganhos.
        </Article>

        <Article
          title="Por que lojistas estão migrando para entregas independentes"
          icon={
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6h12l2 4H4l2-4Z" />
              <path d="M4 10h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6Z" />
              <path d="M12 14l4 2" />
            </svg>
          }
        >
          O mercado percebeu que depender exclusivamente de motoboys fixos gera custos altos e pouca flexibilidade. A Alliance Entregas resolve esse problema oferecendo entregadores
          disponíveis sob demanda, sem burocracia e com rastreamento em tempo real. Os lojistas ganham agilidade, reduzem custos operacionais e evitam atrasos, fortalecendo a experiência
          do cliente final.
        </Article>

        <Article
          title="Segurança e garantias: como protegemos cada entrega"
          icon={
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l7 4v6c0 5-3.5 7.5-7 10-3.5-2.5-7-5-7-10V6l7-4Z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          }
        >
          Segurança é prioridade na Alliance Entregas. Todas as chamadas passam por uma verificação automática, e os entregadores contam com suporte dedicado durante todo o percurso.
          As rotas são registradas, garantindo mais tranquilidade ao lojista e ao cliente final. Nosso sistema reduz riscos, mantém histórico completo e assegura que cada entrega seja
          feita com responsabilidade e transparência.
        </Article>
      </div>
    </ModalShell>
  );
};

