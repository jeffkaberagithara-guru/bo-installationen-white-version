import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MoveHorizontal,
  Maximize2,
  Building2,
  Hammer,
  Briefcase,
  Layers,
  Sparkles,
  Wrench,
  ArrowLeft,
  ArrowRight,
  MousePointer,
} from "lucide-react";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";

type FilterType = "all" | "neubau" | "renovierung" | "gewerbe";

const Portfolio = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const filters: { label: string; value: FilterType; icon: React.ReactNode }[] =
    [
      {
        label: "Alle Projekte",
        value: "all",
        icon: <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
      },
      {
        label: "Neubau",
        value: "neubau",
        icon: <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
      },
      {
        label: "Renovierung",
        value: "renovierung",
        icon: <Hammer className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
      },
      {
        label: "Gewerbe",
        value: "gewerbe",
        icon: <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
      },
    ];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleSliderRelease = () => {
    setIsDragging(false);
  };

  const categoryLabels = {
    neubau: "Neubau",
    renovierung: "Renovierung",
    gewerbe: "Gewerbe",
  };

  const categoryIcons = {
    neubau: <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />,
    renovierung: <Hammer className="h-4 w-4 sm:h-5 sm:w-5" />,
    gewerbe: <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />,
  };

  const renovationItem = portfolioItems.find(
    (item) =>
      item.category === "renovierung" && item.beforeImage && item.afterImage,
  );

  return (
    <section
      id="portfolio"
      className="section-spacing bg-bg-primary relative overflow-hidden"
    >
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
            Unsere Arbeiten
            <span className="h-px w-6 bg-brand-primary/30" />
          </span>
          <h2 className="section-title">REFERENZEN</h2>
          <p className="section-subtitle">
            Qualität, die man sieht. Entdecken Sie unsere abgeschlossenen
            Projekte in Wien und Umgebung.
          </p>
        </motion.div>

        <div className="mb-8 sm:mb-10 md:mb-12 flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider transition-all duration-150 rounded-full ${
                filter === f.value
                  ? "bg-brand-primary text-white shadow-[0_4px_16px_rgba(11,95,165,0.25)]"
                  : "bg-white border border-border-light text-text-body/60 hover:border-brand-primary/30 hover:text-brand-primary hover:bg-brand-primary/5"
              }`}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-white border border-border-light transition-all duration-150 hover:border-brand-primary/30 hover:shadow-[0_8px_40px_rgba(11,95,165,0.08)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-bg-secondary">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex items-center gap-1 sm:gap-1.5 rounded-full bg-white/90 px-2 sm:px-3 py-1 text-[8px] sm:text-xs font-medium text-text-body/70 backdrop-blur-sm border border-border-light shadow-sm">
                {categoryIcons[item.category as keyof typeof categoryIcons]}
                <span>
                  {categoryLabels[item.category as keyof typeof categoryLabels]}
                </span>
              </div>

              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 rounded-full bg-white/90 p-1.5 sm:p-2 opacity-0 transition-opacity duration-150 group-hover:opacity-100 border border-border-light shadow-sm">
                <Maximize2 className="h-3 w-3 sm:h-4 sm:w-4 text-text-body/60" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent opacity-0 transition-opacity duration-150 group-hover:opacity-100 flex items-end p-3 sm:p-4 md:p-6">
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-heading">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-text-body/70">
                    {item.description}
                  </p>
                  <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-primary/10 px-1.5 sm:px-2.5 py-0.5 text-[8px] sm:text-xs text-brand-primary"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="rounded-full bg-border-light px-1.5 sm:px-2.5 py-0.5 text-[8px] sm:text-xs text-text-body/40">
                        +{item.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-24"
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="section-badge">
              <span className="h-px w-6 bg-brand-primary/30" />
              Vorher · Nachher
              <span className="h-px w-6 bg-brand-primary/30" />
            </span>
            <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-text-heading">
              Transformationen in{" "}
              <span className="text-brand-primary">Aktion</span>
            </h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-text-body/40">
              Ziehen Sie den Schieberegler, um die Veränderung zu sehen
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white border border-border-light shadow-sm"
              onMouseMove={handleSliderMove}
              onMouseUp={handleSliderRelease}
              onMouseLeave={handleSliderRelease}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleSliderRelease}
            >
              {renovationItem ? (
                <>
                  <div className="absolute inset-0">
                    <img
                      src={renovationItem.afterImage}
                      alt="Nachher"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 flex items-center gap-1 sm:gap-1.5 rounded-full bg-white/90 px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-xs text-text-body/60 backdrop-blur-sm border border-border-light shadow-sm">
                      <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brand-primary" />
                      <span>Nachher</span>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={renovationItem.beforeImage}
                      alt="Vorher"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 flex items-center gap-1 sm:gap-1.5 rounded-full bg-white/90 px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-xs text-text-body/60 backdrop-blur-sm border border-border-light shadow-sm">
                      <Wrench className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      <span>Vorher</span>
                    </div>
                  </div>

                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-brand-primary shadow-[0_0_30px_rgba(11,95,165,0.3)]"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-brand-primary p-2 sm:p-2.5 shadow-[0_4px_20px_rgba(11,95,165,0.3)] transition-all duration-150 hover:scale-110 cursor-ew-resize">
                      <div className="flex items-center gap-0.5">
                        <ArrowLeft className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-white" />
                        <MoveHorizontal className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                        <ArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-brand-primary/20 blur-xl" />
                  </div>

                  <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-xs text-text-body/60 backdrop-blur-sm border border-border-light shadow-sm">
                    <span className="font-mono">
                      {Math.round(sliderPosition)}%
                    </span>
                    <span className="ml-1 text-text-body/40">transformed</span>
                  </div>

                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 rounded-full bg-white/90 px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-xs text-text-body/60 backdrop-blur-sm border border-border-light shadow-sm">
                    {renovationItem.title}
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="h-12 w-12 sm:h-16 sm:w-16 text-brand-primary/30 mx-auto mb-3 sm:mb-4" />
                    <p className="text-xs sm:text-sm text-text-body/40">
                      Keine Vorher/Nachher Bilder verfügbar
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs text-text-body/30">
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Wrench className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                Vorher
              </span>
              <span className="h-3 w-px bg-border-light" />
              <span className="flex items-center gap-1 sm:gap-1.5">
                <MousePointer className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                Ziehen Sie den Schieberegler
              </span>
              <span className="h-3 w-px bg-border-light" />
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brand-primary/60" />
                Nachher
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-2xl w-full rounded-2xl bg-white border border-border-light p-4 sm:p-6 md:p-8 shadow-[0_8px_60px_rgba(0,0,0,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-3 sm:right-4 top-3 sm:top-4 rounded-full bg-bg-primary/50 p-2 sm:p-2.5 text-text-body/60 hover:text-text-heading hover:bg-bg-secondary transition-all duration-150"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <div
                className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-xs font-medium mb-3 sm:mb-4 ${
                  selectedItem.category === "neubau"
                    ? "bg-brand-primary/10 text-brand-primary"
                    : selectedItem.category === "renovierung"
                      ? "bg-brand-secondary/10 text-brand-secondary"
                      : "bg-cta-orange/10 text-cta-orange"
                }`}
              >
                {
                  categoryIcons[
                    selectedItem.category as keyof typeof categoryIcons
                  ]
                }
                <span>
                  {
                    categoryLabels[
                      selectedItem.category as keyof typeof categoryLabels
                    ]
                  }
                </span>
              </div>

              <div className="aspect-video w-full rounded-xl bg-bg-secondary overflow-hidden mb-4 sm:mb-6">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-heading">
                {selectedItem.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-text-body leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-primary/10 px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-brand-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 h-px w-full bg-gradient-to-r from-brand-primary/20 via-brand-primary/5 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
