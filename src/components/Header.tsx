import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/menu", label: "Menu" },
  { to: "/reservations", label: "Reservations" },
  { to: "/about", label: "Our Story" },
  { to: "/menu", label: "Order Online", hash: "order" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-stark-black">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-gutter max-w-[1440px] mx-auto h-20">
        <Link
          to="/"
          className="text-headline-sm font-headline tracking-tighter text-stark-black uppercase"
        >
          Lillie's - The Boho Cafe
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {links.slice(0, 3).map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.label}
                to={l.to}
                className={
                  active
                    ? "text-label-caps font-mono uppercase text-vibrant-magenta border-b-2 border-vibrant-magenta pb-1"
                    : "text-label-caps font-mono uppercase text-stark-black hover:text-vibrant-magenta transition-colors"
                }
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/menu"
            className="text-label-caps font-mono uppercase text-stark-black hover:text-vibrant-magenta transition-colors"
          >
            Order Online
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="hidden md:block text-label-caps font-mono uppercase text-stark-black hover:opacity-80 transition-opacity"
          >
            Login
          </a>
          <button className="relative group" aria-label="Cart">
            <span className="material-symbols-outlined text-stark-black group-hover:text-vibrant-magenta transition-colors">
              shopping_bag
            </span>
            <span className="absolute -top-1 -right-1 bg-vibrant-magenta text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
          <button className="lg:hidden" aria-label="Menu">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
