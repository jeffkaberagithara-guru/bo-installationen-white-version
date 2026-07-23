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
        icon: <Layers className="h-4 w-4" />,
      },
      {
        label: "Neubau",
        value: "neubau",
        icon: <Building2 className="h-4 w-4" />,
      },
      {
        label: "Renovierung",
        value: "renovierung",
        icon: <Hammer className="h-4 w-4" />,
      },
      {
        label: "Gewerbe",
        value: "gewerbe",
        icon: <Briefcase className="h-4 w-4" />,
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
    <section id="portfolio" className="section-spacing bg-bg-primary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
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

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-200 rounded-full min-h-[44px] ${
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

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-border-light transition-all duration-200 hover:border-brand-primary/30 hover:shadow-[0_8px_40px_rgba(11,95,165,0.08)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-bg-secondary">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="300"
                  decoding="async"
                />
              </div>

              <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-text-body/70 backdrop-blur-sm border border-border-light shadow-sm">
                {categoryIcons[item.category as keyof typeof categoryIcons]}
                <span>
                  {categoryLabels[item.category as keyof typeof categoryLabels]}
                </span>
              </div>

              <div className="absolute top-3 right-3 rounded-full bg-white/90 p-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 border border-border-light shadow-sm">
                <Maximize2 className="h-4 w-4 text-text-body/60" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-end p-4 md:p-6">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-text-body/70">
                    {item.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-primary/10 px-2 py-0.5 text-xs text-brand-primary"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="rounded-full bg-border-light px-2 py-0.5 text-xs text-text-body/40">
                        +{item.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Slider - Optimized for screen fit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <div className="text-center mb-6 sm:mb-8">
            <span className="section-badge">
              <span className="h-px w-6 bg-brand-primary/30" />
              Vorher · Nachher
              <span className="h-px w-6 bg-brand-primary/30" />
            </span>
            <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-text-heading">
              Transformationen in{" "}
              <span className="text-brand-primary">Aktion</span>
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-text-body/40">
              Ziehen Sie den Schieberegler, um die Veränderung zu sehen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Slider - More compact aspect ratio */}
            <div
              className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-border-light shadow-sm select-none touch-none"
              onMouseMove={handleSliderMove}
              onMouseUp={handleSliderRelease}
              onMouseLeave={handleSliderRelease}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleSliderRelease}
            >
              {renovationItem ? (
                <>
                  {/* Before */}
                  <div className="absolute inset-0">
                    <img
                      src={renovationItem.beforeImage}
                      alt="Vorher"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* After */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%`, left: 0 }}
                  >
                    <img
                      src={renovationItem.afterImage}
                      alt="Nachher"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Slider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.4)]"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white p-2 sm:p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-200 hover:scale-110 cursor-ew-resize border border-white/30">
                      <MoveHorizontal className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-primary" />
                    </div>
                  </div>

                  {/* Percentage - Compact */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-black/70 backdrop-blur-sm px-3 py-0.5 sm:px-4 sm:py-1 text-xs sm:text-sm font-medium text-white/90 border border-white/10">
                    {Math.round(sliderPosition)}%
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs sm:text-sm text-text-body/40">
                    Keine Vorher/Nachher Bilder verfügbar
                  </p>
                </div>
              )}
            </div>

            {/* Progress Indicator - Compact */}
            <div className="mt-4 sm:mt-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-[10px] sm:text-xs font-medium text-text-body/40 whitespace-nowrap">
                  Vorher
                </span>

                <div className="flex-1 relative">
                  <div className="h-1 w-full rounded-full bg-bg-secondary border border-border-light overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                      style={{ width: `${sliderPosition}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  <motion.div
                    className="absolute -top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-brand-primary border-2 border-white shadow-md"
                    style={{ left: `calc(${sliderPosition}% - 6px)` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>

                <span className="text-[10px] sm:text-xs font-medium text-brand-primary whitespace-nowrap">
                  Nachher
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between text-[10px] sm:text-xs text-text-body/40">
                <span>0%</span>
                <span className="font-medium text-brand-primary">
                  {sliderPosition === 0 && "Vorher"}
                  {sliderPosition > 0 &&
                    sliderPosition < 100 &&
                    `${Math.round(sliderPosition)}% transformiert`}
                  {sliderPosition === 100 && "Vollständig transformiert"}
                </span>
                <span>100%</span>
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5 sm:gap-2">
                {[
                  { label: "Vorher", value: 0 },
                  { label: "25%", value: 25 },
                  { label: "50%", value: 50 },
                  { label: "75%", value: 75 },
                  { label: "Nachher", value: 100 },
                ].map((btn) => (
                  <button
                    key={btn.value}
                    onClick={() => setSliderPosition(btn.value)}
                    className={`text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full transition-all duration-200 ${
                      sliderPosition === btn.value
                        ? "bg-brand-primary text-white"
                        : "bg-border-light text-text-body/50 hover:bg-brand-primary/10 hover:text-brand-primary"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full rounded-2xl bg-white border border-border-light p-6 md:p-8 shadow-[0_8px_60px_rgba(0,0,0,0.15)] max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 rounded-full bg-bg-primary/50 p-2 text-text-body/60 hover:text-text-heading hover:bg-bg-secondary transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>

              <div
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-medium mb-4 ${
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

              <div className="aspect-video w-full rounded-xl bg-bg-secondary overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold text-text-heading">
                {selectedItem.title}
              </h3>
              <p className="mt-2 text-sm text-text-body leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs text-brand-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
