import { cn } from "@/src/shared/lib/utils/utils";
import { Card } from "@/shared/ui/card";

export const BaseCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
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
};
