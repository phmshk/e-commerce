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
    <ul className="flex flex-row gap-x-6 items-end">
      {MENU_ITEMS.map(({ id, icon: Icon, label, hideOnMd }) => (
        <li key={id} className={hideOnMd ? "md:hidden" : ""}>
          <div
            className="flex flex-col items-center gap-2.5 w-10 cursor-pointer"
            aria-label={label}
          >
            <Icon className="size-6" aria-hidden="true" />
            <span className="text-xs">{label}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
