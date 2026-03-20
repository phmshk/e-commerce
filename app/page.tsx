import { ROUTES } from "@/src/shared/config/routes";
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
      <section className="col-span-full w-full">
        <HeroCarousel />
      </section>

      <SectionWrapper title="special-offers" actionHref={ROUTES.SPECIAL_OFFERS}>
        <BlockSales />
      </SectionWrapper>

      <SectionWrapper title="new-arrivals" actionHref={ROUTES.NEW_ARRIVALS}>
        <BlockNewArrivals />
      </SectionWrapper>

      <SectionWrapper
        title="blog"
        actionHref={ROUTES.BLOG}
        actionLabel="Read all stories"
      >
        <BlockLatestPosts />
      </SectionWrapper>
    </main>
  );
}
