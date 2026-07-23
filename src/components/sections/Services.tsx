import { motion } from "framer-motion";
import {
  Building2,
  PenTool,
  PencilRuler,
  Wrench,
  Package,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  features: string[];
  badge?: string;
}

const services: Service[] = [
  {
    id: "planung",
    title: "Planung & Beratung",
    description:
      "Von der ersten Skizze bis zur detaillierten Ausführungsplanung — wir begleiten Sie mit Fachkompetenz und Präzision.",
    icon: "PenTool",
    href: "#quote",
    features: ["3D-Visualisierung", "Materialberatung", "Kostenoptimierung"],
    badge: "Kostenlos",
  },
  {
    id: "design",
    title: "Design & Konzept",
    description:
      "Ästhetik trifft Funktion. Wir entwickeln maßgeschneiderte Lösungen, die Ihren Raum perfekt in Szene setzen.",
    icon: "PencilRuler",
    href: "#quote",
    features: ["Individuelle Gestaltung", "Farbkonzepte", "Lichtplanung"],
    badge: "Maßgeschneidert",
  },
  {
    id: "installation",
    title: "Installation & Montage",
    description:
      "Präzise Ausführung mit höchster Sorgfalt. Unsere Monteure arbeiten nach den strengsten Qualitätsstandards.",
    icon: "Wrench",
    href: "#quote",
    features: ["Sanitärinstallation", "Heizungsmontage", "Wartungsverträge"],
    badge: "Zertifiziert",
  },
  {
    id: "sanierung",
    title: "Sanierung & Renovierung",
    description:
      "Moderne Technik trifft auf bestehende Bausubstanz. Wir sanieren effizient und nachhaltig.",
    icon: "Building2",
    href: "#quote",
    features: ["Badrenovierung", "Leitungsersatz", "Energieeffizienz"],
    badge: "Nachhaltig",
  },
  {
    id: "notdienst",
    title: "24/7 Notdienst",
    description:
      "Rund um die Uhr für Sie da. Bei Wasserschaden oder Heizungsausfall — wir sind innerhalb von 20 Minuten vor Ort.",
    icon: "Package",
    href: "#emergency",
    features: ["Schnelle Reaktion", "20-min Garantie", "Festpreis"],
    badge: "24/7",
  },
];

const iconMap = {
  PenTool: PenTool,
  PencilRuler: PencilRuler,
  Wrench: Wrench,
  Building2: Building2,
  Package: Package,
};

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      className="group card p-6 sm:p-8 hover:border-brand-primary/30"
    >
      {service.badge && (
        <span className="absolute -top-2 -right-2 rounded-full bg-brand-primary px-2.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_4px_12px_rgba(11,95,165,0.3)]">
          {service.badge}
        </span>
      )}

      <div className="relative inline-flex rounded-full bg-brand-primary/10 p-3 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-[0_4px_20px_rgba(11,95,165,0.25)]">
        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
      </div>

      <h3 className="mt-4 text-lg sm:text-xl font-semibold text-text-heading">
        {service.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-text-body">
        {service.description}
      </p>

      <ul className="mt-4 space-y-1.5">
        {service.features.map((feature, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-sm text-text-body/60"
          >
            <Sparkles className="h-3 w-3 text-brand-primary/60 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={service.href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition-all duration-200 group-hover:gap-2.5 group-hover:text-brand-secondary"
      >
        Angebot anfragen
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-bg-primary">
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
            Unsere Leistungen
            <span className="h-px w-6 bg-brand-primary/30" />
          </span>
          <h2 className="section-title">
            Präzision in <span className="text-brand-primary">jeder Phase</span>
          </h2>
          <p className="section-subtitle">
            Von der ersten Skizze bis zum Notdienst — wir begleiten Ihr Projekt
            mit höchster Qualität und über 15 Jahren Erfahrung.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-2xl bg-white border border-border-light px-5 sm:px-6 py-3 shadow-sm">
            <span className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text-body/60">
              <Building2 className="h-4 w-4 text-brand-primary/60" />
              Über 500 realisierte Projekte
            </span>
            <span className="h-4 w-px bg-border-light" />
            <span className="flex items-center gap-2 text-xs sm:text-sm font-medium text-text-body/60">
              <Star className="h-4 w-4 text-brand-primary/60" />
              4.9/5 · 200+ Bewertungen
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
