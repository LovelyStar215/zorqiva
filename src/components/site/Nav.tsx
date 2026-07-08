import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const links = [
  { to: "/platform", label: "Platform" },
  { to: "/solutions", label: "Solutions" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-primary text-primary-foreground grid place-items-center shadow-[var(--shadow-soft)] group-hover:scale-105 transition">
            <Icon icon="solar:leaf-bold" className="text-xl" />
          </div>
          <span className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">Verdian</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              activeProps={{ className: "text-primary after:w-full" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition"
          >
            Sign in
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-soft)]"
          >
            Book a demo <Icon icon="solar:arrow-right-linear" />
          </Link>
        </div>
        <button
          className="md:hidden text-2xl text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <Icon icon={open ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm font-medium py-2 text-foreground/80"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium"
          >
            Book a demo
          </Link>
        </div>
      )}
    </header>
  );
}