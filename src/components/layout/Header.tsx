import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, PhoneCall } from "lucide-react";
import { cn } from "@/utils/cn";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(11,95,165,0.08)]"
          : "bg-white/80 backdrop-blur-sm",
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={scrollToTop}
            className="flex items-center gap-3 group flex-shrink-0 cursor-pointer"
          >
            <div className="relative">
              <img
                src="/images/logo.png"
                alt="B.O INSTALLATIONEN"
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                style={{ maxHeight: "48px" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-text-heading leading-tight">
                B.O <span className="text-brand-primary">INSTALLATIONEN</span>
              </h1>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-text-body/40">
                Sanitär & Heizung · Wien
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-body/70 hover:text-brand-primary transition-colors duration-150 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right side: Phone + CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+436602626722"
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-cta-orange hover:text-cta-orange/80 transition-colors duration-150"
            >
              <Phone className="h-4 w-4" />
              <span>0660 26 26 722</span>
            </a>

            <a
              href="tel:+436602626722"
              className="btn-primary text-sm px-4 sm:px-6 py-2.5 sm:py-3 hidden md:inline-flex"
            >
              <PhoneCall className="h-4 w-4" />
              <span className="hidden sm:inline">Jetzt anrufen</span>
              <span className="sm:hidden">24/7</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-text-body/60 hover:text-brand-primary transition-colors duration-150 p-2 -mr-2 touch-feedback"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-border-light space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base text-text-body/70 hover:text-brand-primary transition-colors duration-150 py-2 px-2 rounded-lg hover:bg-bg-secondary touch-feedback"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+436602626722"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-cta-orange px-4 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-cta-orange/90 hover:shadow-[0_4px_20px_rgba(242,153,74,0.3)] touch-feedback mt-2"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span>24/7 Notdienst: 0660 26 26 722</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
