import heroImage from "../assets/h1-1.webp";
import heroBg from "../assets/movel-com-mapas-google.webp";
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
      <div className="absolute inset-0 z-0 bg-secondary/95" />

      {/* Animated Elements */}
      <AnimatedElements />

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative z-10">
        <div className="w-full">
          <div className="animate-fade-in mb-10 lg:mb-0 text-center lg:text-left mt-10 lg:mt-0">
            <span className="inline-block px-4 py-2 bg-primary text-white rounded-full font-semibold text-sm mb-6">
              🚀 Entregas Rápidas e Seguras
            </span>
            <h1 className="text-[clamp(32px,5.5vw,56px)] leading-[1.1] font-extrabold mb-6 text-dark-text">
              <span className="block whitespace-nowrap">Você foca na venda</span>
              <span className="block whitespace-nowrap">nós focamos na</span>
              <span className="block whitespace-nowrap text-primary">entrega!</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-text/80 mb-10 max-w-[600px] leading-relaxed mx-auto lg:mx-0">
              Deixe a lojistica da entrega com a gente e foque no que realmente
              importa para sua loja.
            </p>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <a href="#download" className="btn btn-primary text-md px-4 py-2">
                Começar Agora
              </a>
            </div>
          </div>

        </div>
        <div className="animate-fade-in [animation-delay:0.2s] w-full max-w-[460px] lg:max-w-none lg:w-auto justify-self-center lg:justify-self-end mt-8 lg:mt-12 mx-auto">
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
            <img
              src={heroImage}
              alt="App de Entregas"
              className="w-full lg:w-[520px] h-auto block rounded-3xl shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
