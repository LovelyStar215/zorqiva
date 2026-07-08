import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-[var(--font-sans)]">
      <Nav />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6">
          <span className="w-8 h-px bg-accent" /> {eyebrow} <span className="w-8 h-px bg-accent" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-[color:var(--ink)]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          {lede}
        </p>
      </div>
    </section>
  );
}