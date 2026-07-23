import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  ArrowDown,
  Calendar,
  Wrench,
  Shield,
  Clock,
  Star,
  BadgeCheck,
  Gauge,
} from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden pt-14 sm:pt-16 md:pt-20"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/herosection.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-bg-primary/85 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-0 right-0 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 flex min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Brand Badge - Visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 sm:mb-6 md:mb-8 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/90 backdrop-blur-sm border border-brand-primary/20 px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 shadow-sm"
        >
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary/60" />
            <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-primary" />
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-widest text-brand-primary">
            Wien · 24/7 Service · Zertifiziert
          </span>
        </motion.div>

        {/* Main Headline - High contrast */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] sm:leading-[1.15] md:leading-[1.2]"
        >
          <span className="block text-text-heading drop-shadow-[0_2px_20px_rgba(255,255,255,0.3)]">
            PRÄZISION
          </span>
          <span className="block text-brand-primary drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]">
            IN JEDEM DETAIL
          </span>
        </motion.h1>

        {/* Sub-headline - Visible */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="mt-3 sm:mt-4 md:mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-text-heading/80 drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
        >
          Von der Bauplanung bis zum Notdienst — <br className="sm:hidden" />
          Ihr Partner für präzise Gebäudetechnik in Wien.
        </motion.p>

        {/* Trust Indicators - White cards for visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-6 sm:mt-7 md:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4"
        >
          {[
            { icon: Shield, label: "Zertifiziert", sub: "Höchste Standards" },
            { icon: Gauge, label: "Reaktionszeit", sub: "< 20 Minuten" },
            { icon: Clock, label: "24/7 Erreichbar", sub: "Rund um die Uhr" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 sm:gap-2 md:gap-3 rounded-xl bg-white/95 backdrop-blur-sm border border-border-light px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 shadow-sm"
            >
              <item.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-brand-primary" />
              <div className="text-left">
                <div className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-text-heading">
                  {item.label}
                </div>
                <div className="text-[8px] sm:text-[9px] md:text-[10px] text-text-body/50">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons - All visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto"
        >
          <a
            href="tel:+436602626722"
            className="btn-primary text-base px-8 sm:px-10 py-3.5 sm:py-4 shadow-[0_4px_20px_rgba(242,153,74,0.3)]"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap">Notdienst: 0660 26 26 722</span>
          </a>

          <button
            onClick={scrollToServices}
            className="btn-secondary text-base px-8 sm:px-10 py-3.5 sm:py-4 bg-white/90 backdrop-blur-sm"
          >
            <Wrench className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Unsere Services</span>
          </button>

          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-border-light bg-white/90 backdrop-blur-sm px-8 sm:px-10 py-3.5 sm:py-4 text-base font-semibold text-text-heading transition-all duration-150 hover:border-brand-primary/30 hover:bg-brand-primary/5 hover:scale-105 active:scale-95 touch-feedback"
          >
            <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-primary" />
            <span>Angebot anfragen</span>
          </a>
        </motion.div>

        {/* Trust Badge Row - Visible */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8 sm:mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-[9px] sm:text-[10px] md:text-xs font-medium uppercase tracking-widest text-text-body/60"
        >
          <span className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <BadgeCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brand-primary" />
            15+ Jahre Erfahrung
          </span>
          <span className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <Shield className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brand-primary" />
            Zertifizierte Qualität
          </span>
          <span className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brand-primary" />
            4.9/5 · 200+ Bewertungen
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hidden sm:block"
          onClick={scrollToServices}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-text-body/40">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-text-body/40 hover:text-text-body/70 transition-colors" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
