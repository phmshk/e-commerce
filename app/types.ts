import { StaticImageData } from "next/image";

export interface HeroSlide {
  id: string | number;
  title: string;
  description: string;
  cta: string;
  href: string;
  align: "left" | "center" | "right";
  image: StaticImageData;
}
