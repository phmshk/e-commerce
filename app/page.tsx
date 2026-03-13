import { HeroCarousel } from "./components/carousel/HeroCarousel";

export default function Home() {
  return (
    <main className="grid grid-cols-[minmax(1rem,1fr)_minmax(0,1440px)_minmax(1rem,1fr)] ">
      <section className="col-span-full w-full bg-slate-900">
        <HeroCarousel />
      </section>

      <section className="col-start-2 w-full">
        <p>next section</p>
      </section>
    </main>
  );
}
