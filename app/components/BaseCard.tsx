import { cn } from "@/app/lib/utils";
import { Card } from "@/app/shadcn/components/ui/card";

export function BaseCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </Card>
  );
}
