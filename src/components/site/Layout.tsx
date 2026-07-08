import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";

/** Fixed announcement + nav height */
export const HEADER_STACK = "5.75rem";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="relative overflow-hidden section-shell page-hero nav-offset"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 premium-grid opacity-60" />
      <div className="absolute inset-0 grain" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="eyebrow justify-center mb-10">{eyebrow}</div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.02em] text-[color:var(--ink)]">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
          {lede}
        </p>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function SectionShell({
  children,
  className = "",
  dark = false,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  tone?: "default" | "subtle" | "muted" | "warm";
  id?: string;
}) {
  const toneClass = {
    default: "",
    subtle: "section-tone-subtle",
    muted: "section-tone-muted",
    warm: "section-tone-warm",
  }[tone];

  return (
    <section
      id={id}
      className={`section-shell ${dark ? "bg-[color:var(--ink)] text-background" : ""} ${toneClass} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
