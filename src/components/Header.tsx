import { useState, useEffect } from "react";
import imgLogo from "../assets/img-logo.png";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-secondary/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-extrabold text-primary h-14 -ml-3"
          onClick={(e) => {
            e.preventDefault();
            if (window.history && window.history.pushState) {
              window.history.pushState("", document.title, window.location.pathname + window.location.search);
            } else {
              window.location.hash = "";
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileMenuOpen(false);
          }}
          aria-label="Ir para Home"
        >
          <div
            className="w-14 h-14 bg-[currentColor] shrink-0 transform -translate-y-[6px] md:-translate-y-[7px]"
            style={{
              WebkitMaskImage: `url(${imgLogo})`,
              maskImage: `url(${imgLogo})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
            aria-label="Alliance"
          />
          <span className="leading-none h-14 inline-flex items-center -translate-y-[4px] md:-translate-y-[2px]">Alliance</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center h-14">
          <a
            href="#about"
            className="inline-flex items-center h-full relative font-medium text-dark-text transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Sobre Nós
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center h-full relative font-medium text-dark-text transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Como Funciona
          </a>
          <a
            href="#features"
            className="inline-flex items-center h-full relative font-medium text-dark-text transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Vantagens
          </a>
          {/**
           * <a
           *   href="#pricing"
           *   className="font-medium text-dark-text hover:text-primary transition-colors"
           * >
           *   Preços
           * </a>
           */}
          <a href="#download" className="btn btn-primary inline-flex items-center h-14">
            Seja um parceiro
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-gray-800 shadow-lg p-6 flex flex-col gap-4 animate-fade-in">
          <a
            href="#about"
            className="relative font-medium text-lg text-dark-text hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre Nós
          </a>
          <a
            href="#how-it-works"
            className="relative font-medium text-lg text-dark-text hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Como Funciona
          </a>
          <a
            href="#features"
            className="relative font-medium text-lg text-dark-text hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Vantagens
          </a>
          {/**
           * <a
           *   href="#pricing"
           *   className="font-medium text-lg text-dark-text hover:text-primary"
           *   onClick={() => setMobileMenuOpen(false)}
           * >
           *   Preços
           * </a>
           */}
          <a
            href="#download"
            className="btn btn-primary text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Seja um parceiro
          </a>
        </div>
      )}
    </header>
  );
};
