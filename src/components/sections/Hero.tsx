import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Wrench,
  Shield,
  Clock,
  Star,
  BadgeCheck,
  Gauge,
} from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16 sm:pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/images/hero-poster.jpg"
          preload="metadata"
        >
          <source src="/videos/herosection.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 via-transparent to-transparent" />
      </div>

      {/* Content - Full height, no scroll */}
      <div className="relative z-10 flex h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3 sm:px-4 py-1 sm:py-1.5 shadow-lg"
        >
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
            <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white" />
          </span>
          <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-widest text-white drop-shadow-md">
            Wien · 24/7 Service · Zertifiziert
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] sm:leading-[1.15]"
        >
          <span className="block text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            PRÄZISION
          </span>
          <span className="block text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            IN JEDEM <span className="text-cta-orange">DETAIL</span>
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 sm:mt-3 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg text-white/90 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          Von der Bauplanung bis zum Notdienst — Ihr Partner für präzise
          Gebäudetechnik in Wien.
        </motion.p>

        {/* Trust Indicators - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {[
            { icon: Shield, label: "Zertifiziert", sub: "Höchste Standards" },
            { icon: Gauge, label: "Reaktionszeit", sub: "< 20 Minuten" },
            { icon: Clock, label: "24/7 Erreichbar", sub: "Rund um die Uhr" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 px-2.5 sm:px-3 py-1.5 shadow-lg"
            >
              <item.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-cta-orange" />
              <div className="text-left">
                <div className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-white drop-shadow-sm">
                  {item.label}
                </div>
                <div className="text-[7px] sm:text-[8px] md:text-[9px] text-white/60">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto"
        >
          <a
            href="tel:+436602626722"
            className="btn-primary text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 shadow-[0_8px_30px_rgba(242,153,74,0.4)] min-h-[44px]"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Notdienst: 0660 26 26 722</span>
          </a>

          <button
            onClick={scrollToServices}
            className="btn-outline text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 min-h-[44px]"
          >
            <Wrench className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Unsere Services</span>
          </button>

          <a
            href="#quote"
            className="btn-outline text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 min-h-[44px]"
          >
            <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Angebot anfragen</span>
          </a>
        </motion.div>

        {/* Trust Badge Row - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {[
            { icon: BadgeCheck, label: "15+ Jahre Erfahrung" },
            { icon: Shield, label: "Zertifizierte Qualität" },
            { icon: Star, label: "4.9/5 · 200+ Bewertungen" },
          ].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-2.5 sm:px-3 py-1 rounded-full text-[7px] sm:text-[9px] md:text-[10px] font-medium text-white/90 drop-shadow-lg"
            >
              <item.icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-cta-orange" />
              {item.label}
            </span>
          ))}
        </motion.div>

        {/* Scroll Indicator - Smaller */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToServices}
        >
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[6px] sm:text-[8px] uppercase tracking-widest text-white/40">
              Scroll
            </span>
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
