import fs from "fs";

// --- Types & Interfaces ---

/** Основные категории товаров Lumia */
type BaseCategory =
  | "lighting"
  | "workspace"
  | "wellness"
  | "electronics"
  | "security"
  | "audio";

/** Все возможные теги категорий, включая технические */
type ProductTag = BaseCategory | "discounted";

interface CategoryMetadata {
  readonly images: readonly number[];
  readonly priceRange: readonly [number, number];
  readonly subcategories: readonly string[];
  readonly titles: readonly string[];
}

interface Product {
  id: string;
  img: string;
  title: string;
  description: string;
  basePrice: number;
  discountPercent: number;
  rating: number;
  categories: ProductTag[];
  manualBadges: string[];
}

// --- Configuration ---

/** * Строгая конфигурация категорий.
 * Record<BaseCategory, CategoryMetadata> гарантирует отсутствие 'any'
 * и полноту данных для каждой категории.
 */
const CATEGORIES_MAP: Record<BaseCategory, CategoryMetadata> = {
  lighting: {
    images: [1, 4, 7, 10, 13, 14, 17],
    priceRange: [49, 349],
    subcategories: ["Ambient", "Smart", "Desk", "Floor", "Accent"],
    titles: ["Glow", "Beam", "Ray", "Halo", "Opal", "Eclipse", "Lumen"],
  },
  workspace: {
    images: [3, 6, 8, 12, 14, 18],
    priceRange: [29, 599],
    subcategories: ["Ergo", "Input", "Organization", "Tools"],
    titles: ["Apex", "Flow", "Grid", "Axis", "Core", "Link", "Shift"],
  },
  wellness: {
    images: [2, 5, 9, 13, 19],
    priceRange: [79, 799],
    subcategories: ["Air", "Sleep", "Climate", "Balance"],
    titles: ["Breath", "Pure", "Oasis", "Zen", "Cloud", "Vital", "Sense"],
  },
  electronics: {
    images: [8, 9, 11, 12, 15, 16],
    priceRange: [19, 449],
    subcategories: ["Power", "Hubs", "Connectivity", "Sensors"],
    titles: ["Connect", "Volt", "Node", "Link", "Bridge", "Pulse", "Spark"],
  },
  security: {
    images: [9, 11, 15, 20],
    priceRange: [59, 499],
    subcategories: ["Monitoring", "Access", "Sensors"],
    titles: ["Guard", "Watch", "Shield", "Sight", "Lock", "Secure"],
  },
  audio: {
    images: [8, 13, 16],
    priceRange: [89, 899],
    subcategories: ["Hi-Fi", "Portable", "Smart Audio"],
    titles: ["Sonic", "Vibe", "Echo", "Wave", "Beat", "Tonic"],
  },
};

const BRAND_NAME = "Lumia";
const SUFFIXES: readonly string[] = [
  "Pro",
  "Max",
  "Ultra",
  "Gen 2",
  "Elite",
  "S",
  "Compact",
  "Prime",
];
const DISCOUNT_CHANCE = 0.2; // 20% товаров со скидкой
const NEW_BADGE_CHANCE = 0.1; // 10% новинок
const DISCOUNTS: readonly number[] = [10, 15, 20, 25, 30];

// --- Helper Functions ---

const getRandomItem = <T>(array: readonly T[]): T =>
  array[Math.floor(Math.random() * array.length)];

const getRandomPrice = (range: readonly [number, number]): number => {
  return Math.floor(Math.random() * (range[1] - range[0] + 1) + range[0]);
};

// --- Core Logic ---

const generateProducts = (count: number): Product[] => {
  const products: Product[] = [];
  const categoryKeys = Object.keys(CATEGORIES_MAP) as BaseCategory[];

  for (let i = 1; i <= count; i++) {
    const categoryKey = getRandomItem(categoryKeys);
    const config = CATEGORIES_MAP[categoryKey];

    // Сборка названия
    const prefix = getRandomItem(config.titles);
    const sub = getRandomItem(config.subcategories);
    const suffix = Math.random() > 0.5 ? getRandomItem(SUFFIXES) : "";
    const title = `${BRAND_NAME} ${prefix} ${sub} ${suffix}`.trim();

    // Скидки и цены
    const hasDiscount = Math.random() < DISCOUNT_CHANCE;
    const discountPercent = hasDiscount ? getRandomItem(DISCOUNTS) : 0;
    const basePrice = getRandomPrice(config.priceRange);

    // Категории
    const productTags: ProductTag[] = [categoryKey];
    if (hasDiscount) productTags.push("discounted");

    products.push({
      id: `p-gen-${i}`,
      img: `/images/products/${getRandomItem(config.images)}.webp`,
      title,
      description: `Premium ${sub.toLowerCase()} solution from ${BRAND_NAME}. Engineered for minimalist homes and high performance.`,
      basePrice,
      discountPercent,
      rating: Number((Math.random() * (5.0 - 4.2) + 4.2).toFixed(1)),
      categories: productTags,
      manualBadges: Math.random() < NEW_BADGE_CHANCE ? ["new"] : [],
    });
  }

  return products;
};

// --- Execution ---

const main = (): void => {
  try {
    const mockData = { products: generateProducts(100) };
    fs.writeFileSync("products_mock.json", JSON.stringify(mockData, null, 2));
    console.log("✅ Success: products_mock.json generated with 100 products.");
  } catch (error) {
    console.error(
      "❌ Error writing mock data:",
      error instanceof Error ? error.message : error,
    );
    process.exit(1);
  }
};

main();
