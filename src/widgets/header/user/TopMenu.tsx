import { cn } from "@/shared/lib/utils";
import { Button } from "@/src/shared/ui/button";
import { Box, Heart, Menu, ShoppingCart } from "lucide-react";

const MENU_ITEMS = [
  {
    id: "catalog",
    icon: Menu,
    label: "Catalog",
    hideOnMd: true,
  },
  {
    id: "saved",
    icon: Heart,
    label: "Saved",
  },
  {
    id: "orders",
    icon: Box,
    label: "Orders",
  },
  {
    id: "cart",
    icon: ShoppingCart,
    label: "Cart",
  },
];

export const TopMenu = () => {
  return (
    <ul className="flex flex-row gap-x-2 md:gap-x-4 items-end">
      {MENU_ITEMS.map(({ id, icon: Icon, label, hideOnMd }) => (
        <li key={id} className={cn(hideOnMd && "md:hidden")}>
          <Button variant="nav" size="header" aria-label={label}>
            <Icon className="size-5 md:size-6" />
            <span className="text-[10px] md:text-xs font-medium">{label}</span>
          </Button>
        </li>
      ))}
    </ul>
  );
};
