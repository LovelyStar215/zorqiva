import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";

export function CTABanner({
  title,
  lede,
  primaryLabel = "Book a demo",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo = "/pricing",
}: {
  title: string;
  lede: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-32">
      <div
        className="relative rounded-[2rem] overflow-hidden p-12 md:p-16 lg:p-20"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="absolute inset-0 premium-grid opacity-10" />
        <div className="absolute inset-0 grain" />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="relative z-10 grid md:grid-cols-[1.35fr_1fr] gap-10 items-center">
          <div data-reveal>
            <h3 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-primary-foreground">
              {title}
            </h3>
            <p className="mt-5 text-primary-foreground/65 text-lg max-w-lg leading-relaxed">
              {lede}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end" data-reveal>
            <Link
              to={primaryTo}
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-semibold hover:opacity-90 transition shadow-[0_8px_32px_-8px_oklch(0.70_0.145_52/0.5)]"
            >
              {primaryLabel} <Icon icon="solar:arrow-right-linear" />
            </Link>
            {secondaryLabel && (
              <Link
                to={secondaryTo}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 text-primary-foreground px-7 py-4 text-sm font-semibold hover:bg-primary-foreground/8 transition backdrop-blur-sm"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
