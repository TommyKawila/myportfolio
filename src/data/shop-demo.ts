export type ShopProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  tag: string | null;
};

export const SHOP_STATS = [
  { label: "Lighthouse", value: "100", suffix: "/100" },
  { label: "Offline cart", value: "Synced", suffix: "" },
  { label: "Installable", value: "PWA", suffix: " ready" },
  { label: "Products", value: "6", suffix: " items" },
] as const;

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "lamp",
    name: "Minimal Desk Lamp",
    price: 89,
    image: "/shop/products/lamp.png",
    tag: "Bestseller",
  },
  {
    id: "earbuds",
    name: "Wireless Earbuds Pro",
    price: 149,
    image: "/shop/products/earbuds.png",
    tag: "New",
  },
  {
    id: "coffee",
    name: "Ceramic Coffee Set",
    price: 54,
    image: "/shop/products/coffee.png",
    tag: null,
  },
  {
    id: "watch-band",
    name: "Smart Watch Band",
    price: 39,
    image: "/shop/products/watch-band.png",
    tag: "Sale",
  },
  {
    id: "tote",
    name: "Linen Tote Bag",
    price: 45,
    image: "/shop/products/tote.png",
    tag: null,
  },
  {
    id: "hub",
    name: "USB-C Hub Dock",
    price: 79,
    image: "/shop/products/hub.png",
    tag: "Popular",
  },
];

export const CART_STORAGE_KEY = "nova-shop-cart";

export function formatPrice(amount: number) {
  return `$${amount.toFixed(amount % 1 === 0 ? 0 : 2)}`;
}
