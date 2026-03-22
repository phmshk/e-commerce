import { ROUTES } from "@/src/shared/config/routes";
import { cn } from "@/src/shared/lib/utils/utils";
import { Button } from "@/src/shared/ui/button";
import { Box, Heart, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";

const MENU_ITEMS = [
  {
    id: "catalog",
    icon: Menu,
    label: ROUTES.SHOP.CATALOG.labels.short,
    href: ROUTES.SHOP.CATALOG.path,
    hideOnMd: true,
  },
  {
    id: "saved",
    icon: Heart,
    label: ROUTES.USER.SAVED.labels.short,
    href: ROUTES.USER.SAVED.path,
  },
  {
    id: "orders",
    icon: Box,
    label: ROUTES.USER.ORDERS.labels.short,
    href: ROUTES.USER.ORDERS.path,
  },
  {
    id: "cart",
    icon: ShoppingCart,
    label: ROUTES.USER.CART.labels.short,
    href: ROUTES.USER.CART.path,
  },
];

export const TopMenu = () => {
  return (
    <ul className="flex gap-x-2 md:gap-x-4 items-end">
      {MENU_ITEMS.map(({ id, icon: Icon, label, hideOnMd, href }) => (
        <li key={id} className={cn(hideOnMd && "md:hidden")}>
          <Link href={href}>
            <Button variant="nav" size="header" aria-label={label}>
              <Icon className="size-5 md:size-6" />
              <span className="text-[10px] md:text-xs font-medium max-w-14 line-clamp-1 leading-tight block ">
                {label}
              </span>
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
