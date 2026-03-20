export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  SPECIAL_OFFERS: "/special-offers",
  NEW_ARRIVALS: "/new-arrivals",
  BLOG: "/blog",
  CART: "/cart",
  PROFILE: "/profile",
  ABOUT: "/about",
  CONTACT: "/contact",
  CAREERS: "/careers",

  PRODUCT: (slug: string) => `/products/${slug}` as const,
  CATALOG_CATEGORY: (slug: string) => `/catalog/${slug}` as const,
} as const;

export const ROUTE_LABELS = {
  home: "Home",
  catalog: "Catalog",
  "special-offers": "Special Offers",
  "new-arrivals": "New Arrivals",
  blog: "Guides & News",
  cart: "Shopping Cart",
  profile: "My Account",
  about: "About Us",
  contact: "Contact",
  careers: "Careers",
} as const;

export type StaticRouteSegment = keyof typeof ROUTE_LABELS;
