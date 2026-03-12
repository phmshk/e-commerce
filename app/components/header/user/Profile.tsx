import { Button } from "@/app/shadcn/components/ui/button";
import { ChevronDown, CircleUser } from "lucide-react";

export const Profile = () => {
  return (
    <div className="flex items-center gap-1 ml-auto">
      <Button
        variant="nav"
        size="header"
        className="flex-row items-center gap-2"
      >
        <CircleUser className="size-8 md:size-9 text-muted-foreground" />
        <div className="hidden xl:flex items-center gap-1">
          <span className="text-sm font-medium">Username</span>
          <ChevronDown className="size-4 opacity-50" />
        </div>
      </Button>
    </div>
  );
};
