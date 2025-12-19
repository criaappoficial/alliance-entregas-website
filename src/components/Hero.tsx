import heroImage from "../assets/h1-1.webp";
import heroBg from "../assets/hero-image.png";
import { AnimatedElements } from "./AnimatedElements";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] md:min-h-screen flex items-center relative overflow-hidden pt-32 md:pt-32">
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
            <h1 className="text-[clamp(40px,6vw,64px)] leading-[1.1] font-extrabold mb-8 text-white tracking-tight">
              <span className="block whitespace-nowrap">Você foca na venda</span>
              <span className="block whitespace-nowrap">nós focamos na</span>
              <span className="block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff8f00]">
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
                className="btn btn-primary text-lg px-8 py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                Começar Agora
              </a>
              <a
                href="#how-it-works"
                className="btn bg-white/10 text-white border border-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl transition-all duration-300"
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
          </div>
        </div>
      </div>
    </section>
  );
};
