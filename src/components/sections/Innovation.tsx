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
    <section className="section-spacing bg-bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {innovationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group card p-6 hover:border-brand-primary/30"
            >
              <div className="inline-flex rounded-full bg-brand-primary/10 p-3 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-[0_4px_20px_rgba(11,95,165,0.25)]">
                {item.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-text-heading">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-text-body">
                {item.description}
              </p>

              <div className="mt-4 flex items-center gap-3 rounded-xl bg-bg-primary/50 border border-border-light px-3 py-2">
                <span className="text-base font-bold text-brand-primary">
                  {item.stat}
                </span>
                <span className="h-4 w-px bg-border-light" />
                <span className="text-xs text-text-body/50">
                  {item.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-text-body/40">
            <span className="h-px w-10 bg-border-light" />
            <span>Präzision · Sicherheit · Innovation</span>
            <span className="h-px w-10 bg-border-light" />
          </div>

          <div className="inline-flex items-center gap-3 rounded-full border border-brand-primary/10 bg-white px-5 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
            </span>
            <span className="text-xs font-semibold text-brand-primary/70">
              B.O INSTALLATIONEN · Seit 2009
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Innovation;
