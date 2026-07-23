export interface PortfolioItem {
  id: string;
  title: string;
  category: "neubau" | "renovierung" | "gewerbe";
  description: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Wohnhaus Neubau · Donaustadt",
    category: "neubau",
    description:
      "Komplette Sanitärinstallation für ein modernes Mehrfamilienhaus mit 12 Wohneinheiten.",
    image: "/images/portfolio-1.jpeg",
    tags: ["Neubau", "Mehrfamilienhaus", "Sanitär"],
  },
  {
    id: "2",
    title: "Badezimmer Renovierung · 1190 Wien",
    category: "renovierung",
    description:
      "Luxuriöses Badezimmer mit begehbarer Dusche, freistehender Badewanne und smarten Armaturen.",
    image: "/images/portfolio-2.jpeg",
    beforeImage: "/images/transform-1.jpeg",
    afterImage: "/images/transform-2.jpeg",
    tags: ["Renovierung", "Badezimmer", "Luxus"],
  },
  {
    id: "3",
    title: "Bürogebäude · 1030 Wien",
    category: "gewerbe",
    description:
      "Sanitärinstallation für ein 5-stöckiges Bürogebäude mit barrierefreien WC-Anlagen.",
    image: "/images/portfolio-3.jpeg",
    tags: ["Gewerbe", "Büro", "Barrierefrei"],
  },
  {
    id: "4",
    title: "Küchenrenovierung · 1070 Wien",
    category: "renovierung",
    description:
      "Moderne Küche mit Insel, Quooker-Wasserhahn und integriertem Abfallsystem.",
    image: "/images/portfolio-4.jpeg",
    tags: ["Renovierung", "Küche", "Modern"],
  },
  {
    id: "5",
    title: "Einfamilienhaus · 1210 Wien",
    category: "neubau",
    description:
      "Komplette Haustechnik für ein Einfamilienhaus mit Fußbodenheizung und Regenwassernutzung.",
    image: "/images/portfolio-5.jpeg",
    tags: ["Neubau", "Einfamilienhaus", "Haustechnik"],
  },
  {
    id: "6",
    title: "Hotel Sanitär · 1010 Wien",
    category: "gewerbe",
    description:
      "Sanitärinstallation für ein Boutique-Hotel mit 35 Zimmern und Wellnessbereich.",
    image: "/images/portfolio-6.jpeg",
    tags: ["Gewerbe", "Hotel", "Wellness"],
  },
];
