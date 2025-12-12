import { useEffect, useState } from "react";

type PageKey = "#sobre-nos" | "#carreiras" | "#blog";

const useHashPage = () => {
  const [hash, setHash] = useState<string>(window.location.hash);
  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return hash as PageKey | string;
};

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="fixed top-4 right-4 z-[1100] bg-white/90 dark:bg-dark-bg/90 border border-black/10 dark:border-white/10 rounded-full p-2 shadow hover:text-primary"
    aria-label="Fechar"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  </button>
);

const PageLayout = ({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) => (
  <div className="fixed inset-0 z-[1000] overflow-y-auto bg-white dark:bg-dark-bg">
    <CloseButton onClick={onClose} />
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-6">
          <span className="text-primary font-semibold uppercase tracking-widest">Empresa</span>
          <h1 className="text-4xl font-extrabold mt-2 text-light-text dark:text-dark-text">{title}</h1>
        </div>
        <div className="prose max-w-none prose-p:leading-relaxed prose-p:text-light-text/80 dark:prose-p:text-dark-text/80">
          {children}
        </div>
      </div>
    </section>
  </div>
);

const AboutIndex = ({ onClose }: { onClose: () => void }) => (
  <PageLayout title="Sobre Nós" onClose={onClose}>
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
  </PageLayout>
);

const CareersIndex = ({ onClose }: { onClose: () => void }) => (
  <PageLayout title="Carreiras" onClose={onClose}>
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
  </PageLayout>
);

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

const BlogIndex = ({ onClose }: { onClose: () => void }) => (
  <PageLayout title="Blog" onClose={onClose}>
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
  </PageLayout>
);

export const FooterRouter = () => {
  const hash = useHashPage();
  const close = () => {
    window.location.hash = "";
    const pos = Number(sessionStorage.getItem("footerScroll") ?? "NaN");
    if (!Number.isNaN(pos)) {
      window.scrollTo(0, pos);
    }
  };

  switch (hash as PageKey) {
    case "#sobre-nos":
      return <AboutIndex onClose={close} />;
    case "#carreiras":
      return <CareersIndex onClose={close} />;
    case "#blog":
      return <BlogIndex onClose={close} />;
    default:
      return null;
  }
};

