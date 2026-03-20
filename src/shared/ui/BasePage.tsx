interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function BasePageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h1>
      {children}
    </div>
  );
}
