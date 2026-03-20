import {
  type StaticRouteSegment,
  ROUTE_LABELS,
} from "@/src/shared/config/routes";

const isStaticSegment = (segment: string): segment is StaticRouteSegment => {
  return segment in ROUTE_LABELS;
};

export const formatSegment = (segment: string): string => {
  if (isStaticSegment(segment)) {
    return ROUTE_LABELS[segment];
  }

  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
