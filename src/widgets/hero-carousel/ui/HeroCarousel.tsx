"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/src/shared/lib/utils/utils";
import { Button } from "@/src/shared/ui/button";
import {
  CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/src/shared/ui/carousel";
import { HERO_SLIDES } from "../model/constants";

export const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: true }),
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full group relative" aria-roledescription="carousel">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        opts={{ loop: true }}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent>
          {HERO_SLIDES.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="relative flex h-[500px] w-full items-center overflow-hidden md:h-[600px] lg:h-[700px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  quality={90}
                  className="z-0 object-cover"
                  sizes="100vw"
                />
                <div
                  className="absolute inset-0 z-10 bg-black/20 bg-linear-to-t from-black/80 via-black/20 to-transparent"
                  aria-hidden="true"
                />

                <div className="relative z-20 mx-auto flex w-full max-w-[1440px] px-4 md:px-8">
                  <div
                    className={cn(
                      "max-w-2xl space-y-4 text-white",
                      slide.align === "center" && "mx-auto text-center",
                      slide.align === "right" && "ml-auto text-right",
                    )}
                  >
                    <h2 className="text-4xl font-bold tracking-tight drop-shadow-md md:text-5xl lg:text-6xl">
                      {slide.title}
                    </h2>
                    <p className="text-lg text-zinc-200 drop-shadow md:text-xl">
                      {slide.description}
                    </p>
                    <div className="pt-4">
                      <Button
                        asChild
                        size="lg"
                        className="rounded-full px-8 font-semibold shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      >
                        <Link href={slide.href}>{slide.cta}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Desktop navigation */}
        <div className="hidden transition-opacity duration-300 md:block md:opacity-0 md:group-hover:opacity-100">
          <CarouselPrevious className="left-4 bg-white/10 text-white hover:bg-white hover:text-black border-none" />
          <CarouselNext className="right-4 bg-white/10 text-white hover:bg-white hover:text-black border-none" />
        </div>

        {/* Dots paginaton */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                current === index
                  ? "w-8 bg-white"
                  : "bg-white/50 hover:bg-white/80",
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};
