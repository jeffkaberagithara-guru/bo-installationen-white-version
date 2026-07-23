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
    <section id="emergency" className="section-spacing bg-bg-primary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-cta-orange/10 px-4 py-2 border border-cta-orange/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta-orange/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cta-orange" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-cta-orange">
              TECHNISCHER NOTDIENST 24/7
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-lg"
          >
            Wasserschaden oder <br />
            <span className="text-cta-orange">Heizungsausfall?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="body-text mt-3 max-w-2xl"
          >
            Unser Einsatzteam ist in Wien und Umgebung rund um die Uhr in
            höchster Bereitschaft. Wir sind innerhalb von 20 Minuten bei Ihnen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="flex items-center gap-3 rounded-2xl bg-white border border-border-light px-4 py-3 shadow-sm transition-all duration-200 hover:border-cta-orange/30 hover:shadow-[0_4px_16px_rgba(242,153,74,0.08)]">
              <div className="rounded-full bg-cta-orange/10 p-2 text-cta-orange">
                <Gauge className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-bold text-text-heading">
                  Reaktionszeit
                </div>
                <div className="text-xs text-text-body/50">&lt; 20 Minuten</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white border border-border-light px-4 py-3 shadow-sm transition-all duration-200 hover:border-brand-primary/30 hover:shadow-[0_4px_16px_rgba(11,95,165,0.06)]">
              <div className="rounded-full bg-brand-primary/10 p-2 text-brand-primary">
                <MapPin className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-bold text-text-heading">
                  Servicegebiet
                </div>
                <div className="text-xs text-text-body/50">Wien & Umgebung</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white border border-border-light px-4 py-3 shadow-sm transition-all duration-200 hover:border-brand-primary/30 hover:shadow-[0_4px_16px_rgba(11,95,165,0.06)]">
              <div className="rounded-full bg-brand-primary/10 p-2 text-brand-primary">
                <Award className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-bold text-text-heading">
                  Zertifiziert
                </div>
                <div className="text-xs text-text-body/50">
                  Höchste Qualitätsstandards
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 rounded-2xl bg-white border border-border-light p-6 shadow-sm transition-all duration-200 hover:border-cta-orange/20"
          >
            <h4 className="flex items-center gap-2 text-sm font-bold text-text-heading">
              <AlertTriangle className="h-4 w-4 text-cta-orange" />
              Was tun bei einem Notfall?
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-text-body/60">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-primary" />
                <span>Hauptwasserhahn sofort schließen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-primary" />
                <span>Schaden mit Fotos dokumentieren</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-primary" />
                <span>Uns sofort unter 0660 26 26 722 anrufen</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            viewport={{ once: true }}
            className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              {
                icon: <Droplets className="h-4 w-4" />,
                label: "Wasserschaden",
              },
              {
                icon: <Thermometer className="h-4 w-4" />,
                label: "Heizungsausfall",
              },
              { icon: <Home className="h-4 w-4" />, label: "Rohrbruch" },
              { icon: <Wrench className="h-4 w-4" />, label: "24/7 Service" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl bg-white border border-border-light px-3 py-2 shadow-sm"
              >
                <span className="text-cta-orange">{item.icon}</span>
                <span className="text-xs font-medium text-text-body/50">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+436602626722"
              className="btn-primary text-base px-8 py-4 min-h-[52px] shadow-[0_8px_30px_rgba(242,153,74,0.3)]"
            >
              <Phone className="h-5 w-5" />
              Jetzt anrufen: 0660 26 26 722
            </a>
            <a
              href="#quote"
              className="btn-secondary text-base px-8 py-4 min-h-[52px]"
            >
              <Zap className="h-5 w-5" />
              Angebot anfragen
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-text-body/40"
          >
            <span className="flex items-center gap-2">
              <Shield className="h-3.5 w-3.5 text-brand-primary" />
              Zertifiziert
            </span>
            <span className="h-3 w-px bg-border-light" />
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-brand-primary" />
              24/7 Erreichbar
            </span>
            <span className="h-3 w-px bg-border-light" />
            <span className="flex items-center gap-2">
              <CheckCircle className="h-3.5 w-3.5 text-brand-primary" />
              Festpreisgarantie
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
