import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Clock,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Leistungen", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Angebot anfragen", href: "#quote" },
    { label: "Notdienst", href: "#emergency" },
  ];

  const legalLinks = [
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" },
    { label: "AGB", href: "#" },
    { label: "Zertifizierungen", href: "#" },
  ];

  return (
    <footer className="relative bg-footer-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-brand-secondary/10 blur-3xl" />
      </div>

      <div className="container-custom py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="B.O INSTALLATIONEN"
                className="h-12 w-auto object-contain"
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  B.O{" "}
                  <span className="text-brand-secondary">INSTALLATIONEN</span>
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-white/40">
                  Sanitär & Heizung · Wien
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/50">
              Wien · Präzision in jedem Detail
            </p>

            <div className="mt-4 flex gap-2">
              {[
                { icon: <FaFacebook className="h-4 w-4" />, label: "Facebook" },
                {
                  icon: <FaInstagram className="h-4 w-4" />,
                  label: "Instagram",
                },
                { icon: <FaLinkedin className="h-4 w-4" />, label: "LinkedIn" },
                { icon: <FaYoutube className="h-4 w-4" />, label: "YouTube" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-xl bg-white/10 p-2.5 text-white/50 transition-all duration-200 hover:bg-brand-secondary/20 hover:text-brand-secondary hover:shadow-[0_4px_20px_rgba(59,154,225,0.15)] min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-brand-secondary" />
              <span className="text-xs text-white/50">
                Zertifiziert · Versichert
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="h-px w-4 bg-brand-secondary/30" />
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/50 transition-all duration-200 hover:text-brand-secondary"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/30 transition-all duration-200 group-hover:bg-brand-secondary group-hover:scale-125" />
                    {link.label}
                    <ChevronRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="h-px w-4 bg-brand-secondary/30" />
              Rechtliches
            </h4>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/50 transition-all duration-200 hover:text-brand-secondary"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/30 transition-all duration-200 group-hover:bg-brand-secondary group-hover:scale-125" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["ISO 9001", "ÖNORM", "Zertifiziert"].map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/40"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="h-px w-4 bg-brand-secondary/30" />
              Kontakt
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-brand-secondary/15 p-1.5 text-brand-secondary">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs text-white/40">Adresse</span>
                  <p className="text-sm text-white/70">
                    Treustraße 5/2, 1200 Wien
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-brand-secondary/15 p-1.5 text-brand-secondary">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs text-white/40">Telefon</span>
                  <a
                    href="tel:+436602626722"
                    className="text-sm text-white/70 transition-all duration-200 hover:text-brand-secondary"
                  >
                    0660 26 26 722
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-brand-secondary/15 p-1.5 text-brand-secondary">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs text-white/40">E-Mail</span>
                  <a
                    href="mailto:boinstallateur@gmail.com"
                    className="text-sm text-white/70 transition-all duration-200 hover:text-brand-secondary"
                  >
                    boinstallateur@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-2 rounded-xl bg-cta-orange/15 border border-cta-orange/20 px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta-orange/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cta-orange" />
              </span>
              <PhoneCall className="h-3 w-3 text-cta-orange" />
              <span className="text-xs font-bold text-cta-orange">
                24/7 Notdienst
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-white/40">
              © {currentYear} B.O Installateur e.U. — Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3 text-brand-secondary/50" />
                Geprüfte Qualität
              </span>
              <span className="h-3 w-px bg-white/10" />
              <span className="flex items-center gap-1.5">
                <Clock className="h-3 w-3 text-brand-secondary/50" />
                Seit 2009
              </span>
            </div>
          </div>
          <p className="mt-2 text-center text-[10px] text-white/20 sm:text-right">
            B.O INSTALLATIONEN · Treustraße 5/2 · 1200 Wien · Österreich
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
