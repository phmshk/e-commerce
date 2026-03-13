import { HeroSlide } from "./types";
import slide1 from "@/public/images/carousel/light-carousel.avif";
import slide2 from "@/public/images/carousel/desk-carousel.avif";
import slide3 from "@/public/images/carousel/air-carousel.avif";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "Illumination for Your Mood",
    description:
      "Discover our collection of smart ambient lamps designed to sync with your lifestyle.",
    cta: "Shop Lighting",
    href: "/category/lighting",
    align: "left",
    image: slide1,
  },
  {
    id: 2,
    title: "Minimalist Workspace, Maximum Focus",
    description:
      "Professional-grade tools and wireless solutions for a clutter-free desk.",
    cta: "Upgrade Your Desk",
    href: "/category/workspace",
    align: "left",
    image: slide2,
  },
  {
    id: 3,
    title: "Breathe Better, Live Smarter",
    description:
      "Intelligent air systems that maintain the perfect atmosphere in your home.",
    cta: "Explore Wellness",
    href: "/category/wellness",
    align: "left",
    image: slide3,
  },
];
