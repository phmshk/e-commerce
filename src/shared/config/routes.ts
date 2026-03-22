interface RouteLabels {
  short: string;
  full: string;
}

interface RouteConfig {
  path: string;
  labels: RouteLabels;
}

export const ROUTES = {
  MAIN: {
    HOME: {
      path: "/",
      labels: { short: "Home", full: "Home Page" },
    } satisfies RouteConfig,
    ABOUT: {
      path: "/about",
      labels: { short: "About", full: "About Us" },
    } satisfies RouteConfig,
    CONTACT: {
      path: "/contact",
      labels: { short: "Contact", full: "Contact Us" },
    } satisfies RouteConfig,
    CAREERS: {
      path: "/careers",
      labels: { short: "Careers", full: "Work with Us" },
    } satisfies RouteConfig,
  },

  SHOP: {
    CATALOG: {
      path: "/catalog",
      labels: { short: "Catalog", full: "Product Catalog" },
    } satisfies RouteConfig,
    NEW_ARRIVALS: {
      path: "/new-arrivals",
      labels: { short: "New", full: "New Arrivals" },
    } satisfies RouteConfig,
    SPECIAL_OFFERS: {
      path: "/special-offers",
      labels: { short: "Offers", full: "Special Offers" },
    } satisfies RouteConfig,
    PRODUCT: (slug: string) => `/products/${slug}` as const,
    CATEGORY: (slug: string) => `/catalog/${slug}` as const,
  },

  USER: {
    PROFILE: {
      path: "/profile",
      labels: { short: "Account", full: "My Account" },
    } satisfies RouteConfig,
    CART: {
      path: "/cart",
      labels: { short: "Cart", full: "Shopping Cart" },
    } satisfies RouteConfig,
    ORDERS: {
      path: "/orders",
      labels: { short: "Orders", full: "Order History" },
    } satisfies RouteConfig,
    SAVED: {
      path: "/saved",
      labels: { short: "Saved", full: "Wishlist" },
    } satisfies RouteConfig,
  },

  CONTENT: {
    BLOG: {
      path: "/blog",
      labels: { short: "Blog", full: "Guides & News" },
    } satisfies RouteConfig,
  },
} as const;

const allRouteConfigs = [
  ...Object.values(ROUTES.MAIN),
  ...Object.values(ROUTES.SHOP).filter((item) => typeof item !== "function"),
  ...Object.values(ROUTES.USER),
  ...Object.values(ROUTES.CONTENT),
] as RouteConfig[];

export const ROUTE_MAP = allRouteConfigs.reduce(
  (acc, route) => {
    acc[route.path] = route.labels;
    return acc;
  },
  {} as Record<string, RouteLabels>,
);
