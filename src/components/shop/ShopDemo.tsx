"use client";

import Image from "next/image";
import { useCallback, useMemo, useState, useSyncExternalStore } from "react";
import {
  CART_STORAGE_KEY,
  formatPrice,
  SHOP_PRODUCTS,
  SHOP_STATS,
  type ShopProduct,
} from "@/data/shop-demo";

type CartMap = Record<string, number>;

const cartListeners = new Set<() => void>();

function readCart(): CartMap {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartMap) : {};
  } catch {
    return {};
  }
}

function saveCart(cart: CartMap) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  cartListeners.forEach((listener) => listener());
}

function subscribeCart(listener: () => void) {
  cartListeners.add(listener);
  return () => cartListeners.delete(listener);
}

function getCartSnapshot(): CartMap {
  return readCart();
}

function getServerCartSnapshot(): CartMap {
  return {};
}

export default function ShopDemo() {
  const cart = useSyncExternalStore(subscribeCart, getCartSnapshot, getServerCartSnapshot);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [checkoutMsg, setCheckoutMsg] = useState("");

  const persist = useCallback((next: CartMap) => {
    saveCart(next);
  }, []);

  const addToCart = (id: string) => {
    persist({ ...cart, [id]: (cart[id] ?? 0) + 1 });
    setCheckoutMsg("");
  };

  const removeFromCart = (id: string) => {
    const next = { ...cart };
    if (!next[id]) return;
    if (next[id] <= 1) delete next[id];
    else next[id] -= 1;
    persist(next);
  };

  const clearCart = () => {
    persist({});
    setCheckoutMsg("");
  };

  const { itemCount, total, lines } = useMemo(() => {
    let count = 0;
    let sum = 0;
    const rows: { product: ShopProduct; qty: number; subtotal: number }[] = [];

    for (const product of SHOP_PRODUCTS) {
      const qty = cart[product.id] ?? 0;
      if (qty > 0) {
        count += qty;
        sum += product.price * qty;
        rows.push({ product, qty, subtotal: product.price * qty });
      }
    }

    return { itemCount: count, total: sum, lines: rows };
  }, [cart]);

  const handleCheckout = () => {
    if (itemCount === 0) return;
    setCheckoutMsg(`Order placed · ${formatPrice(total)} · Cart synced offline`);
    persist({});
  };

  const cartSummary = mounted
    ? `${itemCount} item${itemCount === 1 ? "" : "s"} · ${formatPrice(total)}`
    : "0 items · $0";

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-violet-300">Install this storefront</p>
          <p className="mt-1 text-xs text-slate-400">
            PWA demo · cart persists in localStorage (offline-ready)
          </p>
        </div>
        <button
          type="button"
          onClick={() =>
            setCheckoutMsg("Add to Home Screen — available after PWA install in production")
          }
          className="inline-flex h-10 shrink-0 items-center rounded-lg bg-violet-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-violet-400"
        >
          Add to Home Screen
        </button>
      </div>

      {checkoutMsg && (
        <p
          role="status"
          className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
        >
          {checkoutMsg}
        </p>
      )}

      <ul className="grid list-none gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {SHOP_STATS.map(({ label, value, suffix }) => (
          <li key={label}>
            <article className="h-[6.5rem] rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-100">
                {label === "Offline cart" ? (mounted ? "Synced" : "…") : value}
                <span className="text-sm font-normal text-slate-400">{suffix}</span>
              </p>
            </article>
          </li>
        ))}
      </ul>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <section aria-labelledby="products-heading">
          <div className="flex h-10 items-center justify-between">
            <h2 id="products-heading" className="text-lg font-semibold text-slate-100">
              Featured products
            </h2>
            <p className="text-sm text-slate-400">Cart · {cartSummary}</p>
          </div>

          <ul className="mt-4 grid list-none gap-4 sm:grid-cols-2">
            {SHOP_PRODUCTS.map((product) => (
              <li key={product.id}>
                <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/30 transition-colors hover:border-slate-600">
                  <div className="relative aspect-square bg-slate-900">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-cover"
                    />
                    {product.tag && (
                      <span className="absolute left-3 top-3 rounded-full border border-slate-600 bg-slate-950/80 px-2 py-0.5 text-xs text-slate-300">
                        {product.tag}
                      </span>
                    )}
                    {(cart[product.id] ?? 0) > 0 && (
                      <span className="absolute right-3 top-3 flex h-6 min-w-6 items-center justify-center rounded-full bg-violet-500 px-1.5 text-xs font-bold text-white">
                        {cart[product.id]}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-slate-100">{product.name}</h3>
                    <div className="mt-3 flex h-10 items-center justify-between">
                      <p className="text-lg font-semibold tabular-nums text-slate-100">
                        {formatPrice(product.price)}
                      </p>
                      <button
                        type="button"
                        onClick={() => addToCart(product.id)}
                        className="inline-flex h-9 items-center rounded-lg bg-slate-100 px-3 text-xs font-semibold text-slate-950 transition-colors hover:bg-white"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <aside
          aria-labelledby="cart-heading"
          className="h-fit rounded-xl border border-slate-800 bg-slate-900/40 lg:sticky lg:top-20"
        >
          <div className="border-b border-slate-800 px-5 py-4">
            <h2 id="cart-heading" className="text-sm font-semibold text-slate-100">
              Live cart
            </h2>
            <p className="mt-1 h-4 text-xs text-slate-500">{cartSummary}</p>
          </div>

          <div className="min-h-[12rem] px-5 py-4">
            {lines.length === 0 ? (
              <p className="text-sm text-slate-500">Your cart is empty. Add a product to try the demo.</p>
            ) : (
              <ul className="space-y-3">
                {lines.map(({ product, qty, subtotal }) => (
                  <li
                    key={product.id}
                    className="flex items-center gap-3 border-b border-slate-800/80 pb-3 last:border-0"
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-slate-800">
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        unoptimized
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-200">
                        {product.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {formatPrice(product.price)} × {qty}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm font-medium tabular-nums text-slate-100">
                      {formatPrice(subtotal)}
                    </p>
                    <button
                      type="button"
                      aria-label={`Remove one ${product.name}`}
                      onClick={() => removeFromCart(product.id)}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-slate-100"
                    >
                      −
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-slate-800 px-5 py-4">
            <div className="flex h-6 items-center justify-between">
              <span className="text-sm text-slate-400">Total</span>
              <span className="text-lg font-semibold tabular-nums text-slate-100">
                {formatPrice(total)}
              </span>
            </div>
            <button
              type="button"
              disabled={itemCount === 0}
              onClick={handleCheckout}
              className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-lg bg-violet-500 text-sm font-semibold text-white transition-colors hover:bg-violet-400 disabled:opacity-40"
            >
              Checkout
            </button>
            {itemCount > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="mt-2 inline-flex h-9 w-full items-center justify-center text-xs text-slate-500 hover:text-slate-300"
              >
                Clear cart
              </button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
