import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <p className="text-xs text-slate-500">© {year} Portfolio</p>
        <Link
          href="/login"
          className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-100"
        >
          Get started →
        </Link>
      </div>
    </footer>
  );
}
