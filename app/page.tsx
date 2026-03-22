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

      <SectionWrapper
        title={ROUTES.SHOP.SPECIAL_OFFERS.labels.full}
        actionHref={ROUTES.SHOP.SPECIAL_OFFERS.path}
      >
        <BlockSales />
      </SectionWrapper>

      <SectionWrapper
        title={ROUTES.SHOP.NEW_ARRIVALS.labels.full}
        actionHref={ROUTES.SHOP.NEW_ARRIVALS.path}
      >
        <BlockNewArrivals />
      </SectionWrapper>

      <SectionWrapper
        title={ROUTES.CONTENT.BLOG.labels.full}
        actionHref={ROUTES.CONTENT.BLOG.path}
        actionLabel="Read all stories"
      >
        <BlockLatestPosts />
      </SectionWrapper>
    </main>
  );
}
