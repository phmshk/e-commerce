import { SectionWrapper } from "@/src/shared/ui/SectionWrapper";
import { HeroCarousel } from "@/src/widgets/hero-carousel";
import {
  BlockLatestPosts,
  BlockNewArrivals,
  BlockSales,
} from "@/src/widgets/main-page-blocks";

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
