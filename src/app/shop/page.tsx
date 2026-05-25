import type { Metadata } from "next";
import ShopContent from "@/components/shop/ShopContent";
import ShopSidebar from "@/components/shop/ShopSidebar";

export const metadata: Metadata = {
  title: "E-Commerce PWA",
  description: "Installable storefront demo with offline cart and PWA features.",
};

export default function ShopPage() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col lg:flex-row">
      <ShopSidebar />
      <div className="flex flex-1 flex-col">
        <header className="border-b border-slate-800 px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            E-Commerce PWA
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Nova Storefront
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Installable shop with offline cart sync, push notifications, and 100/100
            Lighthouse scores.
          </p>
        </header>
        <div className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <ShopContent />
        </div>
      </div>
    </div>
  );
}
