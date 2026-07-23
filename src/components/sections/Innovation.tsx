import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap, Microscope } from "lucide-react";

interface InnovationItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const innovationData: InnovationItem[] = [
  {
    id: "tech",
    icon: <Cpu className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    title: "Tech-Driven Diagnostics",
    description:
      "Analyse und Lösung von Problemen mit digitaler Diagnose. Wir nutzen modernste Messtechnik für präzise Fehlererkennung.",
    stat: "98%",
    statLabel: "Treffsicherheit",
  },
  {
    id: "quality",
    icon: <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    title: "Zertifizierte Qualität",
    description:
      "Meistens für Fokus auf Wiener Bauformen und höchste Sicherheitsstandards. Zertifiziert nach den strengsten Qualitätsrichtlinien.",
    stat: "ISO 9001",
    statLabel: "Zertifiziert",
  },
  {
    id: "efficiency",
    icon: <Zap className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    title: "Energieeffizienz",
    description:
      "Optimierung von Heizungs- und Sanitäranlagen für maximale Energieeffizienz und langfristige Kosteneinsparungen.",
    stat: "30%",
    statLabel: "Energieeinsparung",
  },
  {
    id: "precision",
    icon: <Microscope className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    title: "Präzisionsarbeit",
    description:
      "Millimetergenaue Installation und Montage. Wir arbeiten mit hochpräzisen Messinstrumenten für perfekte Ergebnisse.",
    stat: "0.1mm",
    statLabel: "Toleranz",
  },
];

const Innovation = () => {
  return (
    <section className="section-spacing bg-bg-secondary overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-16 text-center"
        >
          <span className="section-badge">
            <span className="h-px w-6 bg-brand-primary/30" />
            Technologie & Qualität
            <span className="h-px w-6 bg-brand-primary/30" />
          </span>
          <h2 className="section-title">
            INNOVATION & <span className="text-brand-primary">ENGINEERING</span>
          </h2>
          <p className="section-subtitle">
            B.O INSTALLATIONEN steht für die Evolution des Wiener Handwerks. Wir
            nutzen digitale Diagnose-Tools und lösungsorientierte Messtechnik,
            um Fehlerquellen zu eliminieren, bevor sie entstehen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {innovationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              className="group relative flex flex-col rounded-xl bg-white border border-border-light p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-150 hover:border-brand-primary/30 hover:shadow-[0_8px_40px_rgba(11,95,165,0.08)]"
            >
              <div className="mb-3 sm:mb-4 inline-flex w-fit rounded-full bg-brand-primary/10 p-2 sm:p-2.5 md:p-3 text-brand-primary transition-all duration-150 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-[0_4px_20px_rgba(11,95,165,0.25)]">
                {item.icon}
              </div>

              <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg md:text-xl font-semibold text-text-heading">
                {item.title}
              </h3>

              <p className="flex-1 text-xs sm:text-sm leading-relaxed text-text-body">
                {item.description}
              </p>

              <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3 rounded-lg bg-bg-primary border border-border-light px-2.5 sm:px-3 py-1.5 sm:py-2">
                <span className="text-base sm:text-lg font-bold text-brand-primary">
                  {item.stat}
                </span>
                <span className="h-3 sm:h-4 w-px bg-border-light" />
                <span className="text-[10px] sm:text-xs text-text-body/50">
                  {item.statLabel}
                </span>
              </div>

              <div className="mt-3 sm:mt-4 h-px w-8 sm:w-10 md:w-12 bg-brand-primary/30 transition-all duration-150 group-hover:w-12 sm:group-hover:w-14 md:group-hover:w-16" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 md:mt-16 flex flex-col items-center gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-text-body/40">
            <span className="h-px w-10 sm:w-12 md:w-16 bg-border-light" />
            <span>Präzision · Sicherheit · Innovation</span>
            <span className="h-px w-10 sm:w-12 md:w-16 bg-border-light" />
          </div>

          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-brand-primary/10 bg-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 shadow-sm">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary/60" />
              <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brand-primary" />
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-brand-primary/70">
              B.O INSTALLATIONEN · Seit 2009
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Innovation;
