import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/site/Icon";
import { useEffect, useState } from "react";
import { Logo } from "@/components/site/Logo";

const links = [
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/solutions", label: "Industries" },
  { to: "/pricing", label: "Engagement" },
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
        className="fixed top-0 inset-x-0 z-60 bg-[#07131d]/90 text-[#edf5f9]/80 text-center text-xs py-2 tracking-wide"
        style={{ height: ANNOUNCEMENT_H }}
      >
        <span className="hidden sm:inline">
          <span className="text-accent font-semibold">Now hiring</span>
          <span className="mx-2 text-background/30">·</span>
          Junior CMS, engineering & support roles – join our global team.
          <Link to="/careers" className="ml-2 text-accent hover:underline font-medium">
            View roles →
          </Link>
        </span>
        <span className="sm:hidden text-accent font-semibold">Now hiring – view roles</span>
      </div>

      <header className="fixed inset-x-0 z-50" style={{ top: ANNOUNCEMENT_H }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-60 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <div className={`nav-bar ${scrolled ? "nav-bar--solid" : "nav-bar--transparent"}`}>
          <div className="nav-bar__inner">
            <Logo link />

            <nav className="hidden xl:flex items-center gap-1" aria-label="Main">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="nav-link"
                  activeProps={{ className: "nav-link" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <Link
                to="/contact"
                hash="contact-form"
                className="btn-primary py-2.5! px-5! shadow-(--shadow-soft)!"
              >
                Start a project <Icon icon="solar:arrow-right-linear" />
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
          <div className="lg:hidden border-b border-border bg-background/95 backdrop-blur-md px-6 py-4 shadow-(--shadow-lift) max-h-[70vh] overflow-y-auto">
            <div className="section-inner flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="nav-link-mobile"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                hash="contact-form"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 justify-center py-2.5!"
              >
                Start a project
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
