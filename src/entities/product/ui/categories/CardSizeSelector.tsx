import { Button } from "@/src/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/src/shared/ui/dropdown-menu";
import { Maximize2 } from "lucide-react";
import { CategoryLayoutType } from "../../model/types";

interface CardSizeSelectorProps {
  onLayoutChange: (id: string, layout: CategoryLayoutType) => void;
  category_id: string;
}

export const CardSizeSelector = ({
  onLayoutChange,
  category_id,
}: CardSizeSelectorProps) => {
  return (
    <div
      className="absolute right-2 top-2 z-10"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="size-8 rounded-full shadow-sm"
          >
            <Maximize2 className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="sm:min-w-fit">
          <DropdownMenuItem
            onClick={() => onLayoutChange?.(category_id, "hero")}
          >
            Hero (Large)
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onLayoutChange?.(category_id, "featured")}
          >
            Featured (Medium)
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onLayoutChange?.(category_id, "standard")}
          >
            Standard (Small)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
