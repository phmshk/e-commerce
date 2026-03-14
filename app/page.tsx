import { HeroCarousel } from "@/app/components/carousel/HeroCarousel";
import { BlockSales } from "@/app/components/main/blocks/BlockSales";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { BlockNewArrivals } from "@/app/components/main/blocks/BlockNewArrivals";
import { BlockLatestPosts } from "@/app/components/main/blocks/BlockLatestPosts";

export default function Home() {
  return (
    <main className="grid grid-cols-[minmax(1rem,1fr)_minmax(0,1440px)_minmax(1rem,1fr)]">
      <section className="col-span-full w-full bg-slate-900">
        <HeroCarousel />
      </section>

      <SectionWrapper title="Special Offers" actionHref="/category/sale">
        <BlockSales />
      </SectionWrapper>

      <SectionWrapper title="New Arrivals" actionHref="/category/new-arrivals">
        <BlockNewArrivals />
      </SectionWrapper>

      <SectionWrapper
        title="Lumia Guides & News"
        actionHref="/blog"
        actionLabel="Read all stories"
      >
        <BlockLatestPosts />
      </SectionWrapper>
    </main>
  );
}
