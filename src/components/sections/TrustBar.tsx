import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, Star, ShieldCheck, ThumbsUp } from "lucide-react";

interface TrustItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const trustData: TrustItem[] = [
  {
    id: "years",
    value: 15,
    suffix: "+",
    label: "Jahre Erfahrung",
    icon: <Award className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    description: "Seit 2009 am Wiener Markt",
  },
  {
    id: "projects",
    value: 500,
    suffix: "+",
    label: "Projekte realisiert",
    icon: <Briefcase className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    description: "Von Neubau bis Renovierung",
  },
  {
    id: "rating",
    value: 4.9,
    suffix: "/5",
    label: "Bewertungen",
    icon: <Star className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    description: "200+ zufriedene Kunden",
  },
  {
    id: "certified",
    value: 100,
    suffix: "%",
    label: "Zertifiziert",
    icon: <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    description: "Höchste Qualitätsstandards",
  },
  {
    id: "response",
    value: 20,
    suffix: "min",
    label: "Reaktionszeit",
    icon: <ThumbsUp className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    description: "Schnellste Einsatzbereitschaft",
  },
];

const AnimatedCounter = ({ item }: { item: TrustItem }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = item.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
          setCount(item.value);
          clearInterval(timer);
          return;
        }
        setCount(current);
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, item.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group card p-6 sm:p-8 text-center hover:border-brand-primary/30"
    >
      <div className="inline-flex rounded-full bg-brand-primary/10 p-3 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-[0_4px_20px_rgba(11,95,165,0.25)]">
        {item.icon}
      </div>

      <div className="mt-3 flex items-baseline justify-center gap-0.5">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-heading">
          {typeof item.value === "number" && item.value % 1 === 0
            ? Math.round(count)
            : count.toFixed(1)}
        </span>
        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-primary">
          {item.suffix}
        </span>
      </div>

      <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-widest text-text-heading">
        {item.label}
      </p>

      <p className="mt-0.5 text-xs text-text-body/50">{item.description}</p>
    </motion.div>
  );
};

const TrustBar = () => {
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
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary/70">
            Vertrauen & Qualität
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-text-heading">
            Zahlen die <span className="text-brand-primary">überzeugen</span>
          </h2>
          <p className="mt-1 text-sm text-text-body/50">
            Warum über 500 Kunden auf B.O INSTALLATIONEN vertrauen
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {trustData.map((item) => (
            <AnimatedCounter key={item.id} item={item} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-border-light" />
          <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-text-body/30">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-primary/40" />
            Geprüfte Qualität
          </span>
          <span className="h-px w-10 bg-border-light" />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
