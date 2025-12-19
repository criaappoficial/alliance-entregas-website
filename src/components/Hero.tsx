import heroImage from "../assets/h1-1.webp";
import heroBg from "../assets/hero-image.png";
import { AnimatedElements } from "./AnimatedElements";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] md:min-h-screen flex items-center relative overflow-hidden pt-28 md:pt-28">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center lg:bg-top"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-secondary via-[#002833] to-secondary opacity-95" />

      {/* Animated Elements */}
      <AnimatedElements />

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative z-10">
        <div className="w-full">
          <div className="animate-fade-in mb-10 lg:mb-0 text-center lg:text-left mt-10 lg:mt-0">
            <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary font-bold text-sm mb-8 hover:bg-white/10 transition-colors cursor-default shadow-lg shadow-black/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Entregas Rápidas e Seguras
            </span>
            <h1 className="text-[clamp(32px,6vw,64px)] leading-[1.1] font-extrabold mb-8 text-white tracking-tight">
              <span className="block md:whitespace-nowrap">Você foca na venda</span>
              <span className="block md:whitespace-nowrap">nós focamos na</span>
              <span className="block md:whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff8f00]">
                entrega!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-[540px] leading-relaxed mx-auto lg:mx-0 font-light">
              Deixe a logística da entrega com a gente e foque no que realmente
              importa para sua loja.
            </p>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <a
                href="#download"
                className="btn btn-primary text-base px-6 py-3 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              >
                Começar Agora
              </a>
              <a
                href="#how-it-works"
                className="btn bg-white/10 text-white border border-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                Como Funciona
              </a>
            </div>
          </div>
        </div>
        <div className="animate-fade-in [animation-delay:0.2s] w-full max-w-[520px] lg:max-w-none lg:w-auto justify-self-center lg:justify-self-end mt-6 lg:mt-10 mx-auto">
          <div
            className="relative mx-auto transition-transform duration-300 ease-out transform perspective-1000 rotate-y-0 lg:rotate-y-[-5deg] lg:hover:rotate-y-0 lg:hover:scale-[1.02]"
            onMouseMove={(e) => {
              e.currentTarget.style.transform =
                "perspective(1000px) rotateY(0deg) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "perspective(1000px) rotateY(-5deg)";
            }}
          >
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full -z-10" />
            
            <img
              src={heroImage}
              alt="App de Entregas"
              className="w-full lg:w-[600px] h-auto block rounded-3xl shadow-2xl mx-auto"
            />
            <div className="absolute left-0 right-0 bottom-0 h-24 md:h-28 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-b-3xl" />

            {/* Floating Card 1: Active Delivery */}
            <div className="absolute bottom-8 left-0 md:bottom-12 md:-left-12 bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-float max-w-[200px] md:max-w-none transform transition-all hover:scale-105 z-20">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18.5" cy="17.5" r="3.5" />
                  <circle cx="5.5" cy="17.5" r="3.5" />
                  <path d="M15 6h5l3 5v6h-2" />
                  <path d="M9 17h6" />
                  <path d="M12 12L8 6H2v4h3l2 5" />
                </svg>
              </div>
              <div>
                <p className="text-secondary font-bold text-xs md:text-sm">
                  Entregador Próximo
                </p>
                <p className="text-primary text-[10px] md:text-xs font-medium">
                  Chega em 3 min
                </p>
              </div>
            </div>

            {/* Floating Card 2: 5 Stars */}
            <div className="absolute top-12 right-0 md:top-20 md:-right-8 bg-white/90 backdrop-blur-md border border-white/20 py-2 px-4 rounded-full shadow-xl flex items-center gap-2 animate-float-delayed transform transition-all hover:scale-105 z-20">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#FFC107"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-bold text-secondary">4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
