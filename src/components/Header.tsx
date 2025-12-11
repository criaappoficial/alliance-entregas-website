import { useState, useEffect } from "react";

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
      <div className="container-custom max-w-[1440px] flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-extrabold text-primary">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Alliance</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            href="#about"
            className="font-medium text-dark-text hover:text-primary transition-colors hover:underline underline-offset-8 decoration-2 decoration-primary"
          >
            Sobre Nós
          </a>
          <a
            href="#how-it-works"
            className="font-medium text-dark-text hover:text-primary transition-colors hover:underline underline-offset-8 decoration-2 decoration-primary"
          >
            Como Funciona
          </a>
          <a
            href="#features"
            className="font-medium text-dark-text hover:text-primary transition-colors hover:underline underline-offset-8 decoration-2 decoration-primary"
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
          <a href="#download" className="btn btn-primary">
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
            className="font-medium text-lg text-dark-text hover:text-primary hover:underline underline-offset-8 decoration-2 decoration-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre Nós
          </a>
          <a
            href="#how-it-works"
            className="font-medium text-lg text-dark-text hover:text-primary hover:underline underline-offset-8 decoration-2 decoration-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Como Funciona
          </a>
          <a
            href="#features"
            className="font-medium text-lg text-dark-text hover:text-primary hover:underline underline-offset-8 decoration-2 decoration-primary"
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
