import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { cn } from "@/utils/cn";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Leistungen", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Angebot", href: "#quote" },
    { label: "Notdienst", href: "#emergency" },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-white/95 backdrop-blur-sm",
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Touch target: 44px+ */}
          <a
            href="/"
            onClick={scrollToTop}
            className="flex items-center gap-3 group flex-shrink-0 cursor-pointer min-h-[44px]"
          >
            <img
              src="/images/logo.png"
              alt="B.O INSTALLATIONEN"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              style={{ maxHeight: "56px" }}
              loading="eager"
              width="56"
              height="56"
            />
            <div className="hidden sm:block">
              <span className="text-base sm:text-lg md:text-xl font-bold text-text-heading leading-tight">
                B.O <span className="text-brand-primary">INSTALLATIONEN</span>
              </span>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-text-body/50">
                Sanitär & Heizung · Wien
              </p>
            </div>
          </a>

          {/* Desktop Navigation - Clear visibility */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-body/80 hover:text-brand-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button - Prominent and visible */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+436602626722"
              className="btn-primary text-sm px-4 sm:px-6 py-2.5 sm:py-3 hidden md:inline-flex min-h-[44px]"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Jetzt anrufen</span>
            </a>

            {/* Mobile Menu Button - Touch-friendly */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-text-body hover:text-brand-primary transition-colors duration-200 p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center touch-feedback"
              aria-label={isMobileMenuOpen ? "Menu schließen" : "Menu öffnen"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Smooth and accessible */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border-light space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-text-body/80 hover:text-brand-primary transition-colors duration-200 py-3 px-3 rounded-xl hover:bg-bg-secondary touch-feedback min-h-[44px]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+436602626722"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-cta-orange px-4 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-cta-orange/90 hover:shadow-[0_8px_30px_rgba(242,153,74,0.3)] touch-feedback mt-2 min-h-[52px]"
            >
              <PhoneCall className="h-5 w-5" />
              <span>24/7 Notdienst: 0660 26 26 722</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
