import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  CheckCircle,
  AlertTriangle,
  Gauge,
  Award,
  Zap,
  Home,
  Droplets,
  Thermometer,
  Wrench,
} from "lucide-react";

const EmergencySection = () => {
  return (
    <section
      id="emergency"
      className="section-spacing bg-bg-primary overflow-hidden"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-cta-orange/10 px-3 sm:px-4 py-1 sm:py-1.5 md:py-2 border border-cta-orange/20"
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta-orange/60" />
              <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-cta-orange" />
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-cta-orange">
              TECHNISCHER NOTDIENST 24/7
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-lg"
          >
            Wasserschaden oder <br />
            <span className="text-cta-orange">Heizungsausfall?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="body-text mt-2 sm:mt-3 md:mt-4 max-w-2xl"
          >
            Unser Einsatzteam ist in Wien und Umgebung rund um die Uhr in
            höchster Bereitschaft. Wir sind innerhalb von 20 Minuten bei Ihnen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-7 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            <div className="flex items-center gap-2 sm:gap-3 rounded-xl bg-white border border-border-light px-3 sm:px-4 py-2 sm:py-3 shadow-sm transition-all duration-150 hover:border-cta-orange/30 hover:shadow-[0_4px_16px_rgba(242,153,74,0.08)]">
              <div className="rounded-full bg-cta-orange/10 p-1.5 sm:p-2 text-cta-orange">
                <Gauge className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-text-heading">
                  Reaktionszeit
                </div>
                <div className="text-[10px] sm:text-xs text-text-body/50">
                  &lt; 20 Minuten
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 rounded-xl bg-white border border-border-light px-3 sm:px-4 py-2 sm:py-3 shadow-sm transition-all duration-150 hover:border-brand-primary/30 hover:shadow-[0_4px_16px_rgba(11,95,165,0.06)]">
              <div className="rounded-full bg-brand-primary/10 p-1.5 sm:p-2 text-brand-primary">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-text-heading">
                  Servicegebiet
                </div>
                <div className="text-[10px] sm:text-xs text-text-body/50">
                  Wien & Umgebung
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 rounded-xl bg-white border border-border-light px-3 sm:px-4 py-2 sm:py-3 shadow-sm transition-all duration-150 hover:border-brand-primary/30 hover:shadow-[0_4px_16px_rgba(11,95,165,0.06)]">
              <div className="rounded-full bg-brand-primary/10 p-1.5 sm:p-2 text-brand-primary">
                <Award className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-text-heading">
                  Zertifiziert
                </div>
                <div className="text-[10px] sm:text-xs text-text-body/50">
                  Höchste Qualitätsstandards
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-7 md:mt-8 rounded-xl bg-white border border-border-light p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-150 hover:border-cta-orange/20"
          >
            <h4 className="mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-text-heading">
              <AlertTriangle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cta-orange" />
              Was tun bei einem Notfall?
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-text-body/60">
              <li className="flex items-start gap-1.5 sm:gap-2">
                <CheckCircle className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-brand-primary" />
                <span>Hauptwasserhahn sofort schließen</span>
              </li>
              <li className="flex items-start gap-1.5 sm:gap-2">
                <CheckCircle className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-brand-primary" />
                <span>Schaden mit Fotos dokumentieren</span>
              </li>
              <li className="flex items-start gap-1.5 sm:gap-2">
                <CheckCircle className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-brand-primary" />
                <span>Uns sofort unter 0660 26 26 722 anrufen</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3"
          >
            {[
              {
                icon: <Droplets className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
                label: "Wasserschaden",
              },
              {
                icon: <Thermometer className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
                label: "Heizungsausfall",
              },
              {
                icon: <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
                label: "Rohrbruch",
              },
              {
                icon: <Wrench className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
                label: "24/7 Service",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-white border border-border-light px-2 sm:px-3 py-1.5 sm:py-2 shadow-sm"
              >
                <span className="text-cta-orange">{item.icon}</span>
                <span className="text-[10px] sm:text-xs font-medium text-text-body/50">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="tel:+436602626722"
              className="btn-primary text-base px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              Jetzt anrufen: 0660 26 26 722
            </a>
            <a
              href="#quote"
              className="btn-secondary text-base px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4"
            >
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
              Angebot anfragen
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-7 md:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-medium text-text-body/40"
          >
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-primary" />
              Zertifiziert
            </span>
            <span className="h-3 w-px bg-border-light" />
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-primary" />
              24/7 Erreichbar
            </span>
            <span className="h-3 w-px bg-border-light" />
            <span className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-primary" />
              Festpreisgarantie
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
