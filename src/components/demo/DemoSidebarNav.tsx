import Link from "next/link";
import { DEMO_NAV_LINKS } from "@/data/demo-nav";

type DemoSidebarNavProps = {
  activeHref: string;
  ariaLabel: string;
};

export default function DemoSidebarNav({ activeHref, ariaLabel }: DemoSidebarNavProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className="flex gap-1 overflow-x-auto px-3 pb-4 lg:flex-col lg:px-3 lg:pb-6"
    >
      {DEMO_NAV_LINKS.map(({ href, label }) => {
        const active = href === activeHref;

        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`inline-flex h-10 shrink-0 items-center rounded-lg px-3 text-sm font-medium transition-colors lg:w-full ${
              active
                ? "bg-slate-800 text-slate-100"
                : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
