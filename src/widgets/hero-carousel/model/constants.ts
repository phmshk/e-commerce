interface HeroSlide {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  align: "left" | "center" | "right";
  image: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "1",
    title: "Illumination for Your Mood",
    description:
      "Discover our collection of smart ambient lamps designed to sync with your lifestyle.",
    cta: "Shop Lighting",
    href: "/category/lighting",
    align: "left",
    image: "/images/carousel/light-carousel.webp",
  },
  {
    id: "2",
    title: "Minimalist Workspace, Maximum Focus",
    description:
      "Professional-grade tools and wireless solutions for a clutter-free desk.",
    cta: "Upgrade Your Desk",
    href: "/category/workspace",
    align: "left",
    image: "/images/carousel/desk-carousel.webp",
  },
  {
    id: "3",
    title: "Breathe Better, Live Smarter",
    description:
      "Intelligent air systems that maintain the perfect atmosphere in your home.",
    cta: "Explore Wellness",
    href: "/category/wellness",
    align: "left",
    image: "/images/carousel/air-carousel.webp",
  },
];
