import Link from "next/link";
import DemoSidebarNav from "@/components/demo/DemoSidebarNav";

export default function ShopSidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-slate-800 bg-slate-950 lg:w-56 lg:border-b-0 lg:border-r">
      <div className="flex h-14 items-center px-4 lg:h-16 lg:px-5">
        <Link href="/" className="text-sm font-semibold tracking-tight text-slate-100">
          ← Home
        </Link>
      </div>
      <DemoSidebarNav activeHref="/shop" ariaLabel="Shop demo" />
      <div className="mt-auto hidden border-t border-slate-800 p-4 lg:block">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          PWA status
        </p>
        <p className="mt-2 text-sm text-slate-300">Offline-ready</p>
        <p className="mt-1 h-4 text-xs text-violet-400">● Installable app</p>
      </div>
    </aside>
  );
}
