export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-[minmax(1rem,1fr)_minmax(0,1440px)_minmax(1rem,1fr)]">
      <div className="col-start-2 py-8">{children}</div>
    </main>
  );
}
