import Link from "next/link";

const nav = [
  { href: "/#tech-stack", label: "Stack" },
  { href: "/#projects", label: "Projects" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/login", label: "Sign in" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-slate-100"
        >
          Portfolio
        </Link>
        <nav aria-label="Primary" className="flex gap-6">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-slate-400 transition-colors hover:text-slate-100"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
