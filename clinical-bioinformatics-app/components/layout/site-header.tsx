import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/cases", label: "Cases" },
  { href: "/explore", label: "Explore" },
  { href: "/visualise", label: "Visualise" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="block">
          <div className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Clinical Bioinformatics Training
          </div>
        </Link>

        <nav className="flex flex-wrap gap-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}