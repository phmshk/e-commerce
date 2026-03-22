import { ROUTE_MAP } from "@/src/shared/config/routes";

export const formatSegment = (
  pathOrSegment: string,
  type: "short" | "full" = "short",
): string => {
  const key = pathOrSegment.startsWith("/")
    ? pathOrSegment
    : `/${pathOrSegment}`;

  if (key in ROUTE_MAP) {
    return ROUTE_MAP[key][type];
  }

  return pathOrSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
