import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const links = [
  { to: "/platform", label: "Platform" },
  { to: "/solutions", label: "Solutions" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

const ANNOUNCEMENT_H = "2rem";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-[60] bg-[color:var(--ink)] text-background/80 text-center text-[11px] py-2 tracking-wide"
        style={{ height: ANNOUNCEMENT_H }}
      >
        <span className="hidden sm:inline">
          <span className="text-accent font-semibold">Verdian 4.0</span>
          <span className="mx-2 text-background/30">·</span>
          The AI-native operating system for modern companies.
          <Link to="/platform" className="ml-2 text-accent hover:underline font-medium">
            Explore →
          </Link>
        </span>
        <span className="sm:hidden text-accent font-semibold">Verdian 4.0 — AI-native ERP</span>
      </div>

      <header className="fixed left-0 right-0 z-50 px-4 sm:px-6" style={{ top: ANNOUNCEMENT_H }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <div className="max-w-7xl mx-auto">
          <div className={`nav-bar ${scrolled ? "nav-bar--solid" : "nav-bar--transparent"}`}>
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground grid place-items-center shadow-[var(--shadow-soft)] group-hover:scale-105 transition-transform">
                <Icon icon="solar:leaf-bold" className="text-lg" />
              </div>
              <span className="font-serif text-xl tracking-tight text-[color:var(--ink)]">
                Verdian
              </span>
            </Link>

            <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-3 py-2 text-[13px] font-medium text-foreground/70 hover:text-primary rounded-lg hover:bg-primary/5 transition-all"
                  activeProps={{ className: "text-primary bg-primary/8 font-semibold" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <a
                href="https://app.verdian.io"
                className="px-3 py-2 text-[13px] font-medium text-foreground/70 hover:text-primary transition"
              >
                Sign in
              </a>
              <Link
                to="/contact"
                className="btn-primary !py-2.5 !px-5 !text-[13px] !shadow-[var(--shadow-soft)]"
              >
                Book a demo <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden text-2xl text-foreground p-1"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
            >
              <Icon icon={open ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} />
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl px-5 py-4 flex flex-col gap-1 shadow-[var(--shadow-lift)] max-h-[70vh] overflow-y-auto">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2.5 text-foreground/80 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center !text-sm"
            >
              Book a demo
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
