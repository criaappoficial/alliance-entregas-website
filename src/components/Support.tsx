
export const Support = () => {
  return (
    <section id="support" className="py-20 bg-[#FF7D44] text-white relative overflow-hidden">
            {/* Top Curve */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg className="relative block w-[calc(100%+1.3px)] h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white dark:fill-dark-bg"></path>
                </svg>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-center md:text-left max-w-xl animate-fade-in">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-white/20">
                            Atendimento Online
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
                            Precisa de Ajuda ou Suporte?
                        </h2>
                        <p className="text-lg text-white/90 mb-8 leading-relaxed font-light">
                            Nossa equipe está pronta para tirar todas as suas dúvidas!
                            Fale diretamente conosco pelo WhatsApp e tenha atendimento rápido e personalizado para resolver qualquer questão.
                        </p>
                        <a
                            href="https://wa.me/5582993552525"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-primary font-bold py-4 px-8 rounded-2xl shadow-xl shadow-black/10 hover:bg-gray-50 transition-all hover:-translate-y-1 group"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Falar com Suporte
                        </a>
                    </div>

                    <div className="relative animate-float">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl transform scale-110" />

                        {/* Main Circle */}
                        <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                            {/* Headset Icon */}
                            <svg
                                viewBox="0 0 24 24"
                                className="w-24 h-24 md:w-32 md:h-32 text-primary"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                                {/* Mic */}
                                <path d="M14 16.5a3 3 0 0 0 3-3v-2" />
                                <path d="M19 19a2 2 0 0 1-2 2h-2" />
                            </svg>

                            {/* WhatsApp Badge */}
                            <div className="absolute bottom-2 right-2 md:bottom-5 md:right-5 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center border-4 border-primary shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="w-7 h-7 md:w-9 md:h-9">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg className="relative block w-[calc(100%+1.3px)] h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white dark:fill-dark-bg"></path>
                </svg>
            </div>
        </section>
    );
};
