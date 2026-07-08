import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout, SectionShell } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import {
  AdvancedCapabilities,
  CodePreview,
  EnterpriseMatrix,
  LiveActivityFeed,
  PlatformExplorer,
} from "@/components/site/PlatformExplorer";
import { Eyebrow, PrimaryButton, SecondaryButton } from "@/components/site/primitives";
import { caseStudies, partnerBadges } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdian — Premium IT Agency" },
      {
        name: "description",
        content:
          "Verdian is a premium IT agency — custom software, cloud, design, and AI for ambitious companies.",
      },
      { property: "og:title", content: "Verdian — IT Agency" },
      { property: "og:description", content: "Build. Ship. Scale. With a partner you can trust." },
    ],
  }),
  component: Home,
});

const metrics = [
  { v: "180+", l: "Projects delivered" },
  { v: "96%", l: "Client retention" },
  { v: "12 yrs", l: "Combined experience" },
  { v: "<2 wks", l: "Avg. kickoff time" },
];

function Home() {
  const scope = useGsapReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".metric-num").forEach((el) => {
        const raw = el.dataset.value || "0";
        const numeric = parseFloat(raw.replace(/[^0-9.]/g, ""));
        if (!isFinite(numeric) || /[<>]/.test(raw)) return;
        const suffix = raw.replace(/[0-9.,]/g, "");
        const prefix = raw.match(/^\D+/)?.[0] ?? "";
        const obj = { n: 0 };
        gsap.to(obj, {
          n: numeric,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            const val = numeric >= 100 ? Math.round(obj.n).toLocaleString() : obj.n.toFixed(2);
            el.textContent = `${prefix}${val}${suffix.replace(/^[^%KMBk+<>]/, "")}`;
          },
          onComplete: () => {
            el.textContent = raw;
          },
        });
      });
    }, scope);
    return () => ctx.revert();
  }, [scope]);

  return (
    <Layout>
      <div ref={scope}>
        <section
          ref={heroRef}
          className="relative overflow-hidden page-hero page-hero--clean hero-viewport"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-0 premium-grid opacity-50" />
          <div className="absolute inset-0 grain" />
          <div className="hero-viewport__content relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/50 backdrop-blur-sm pl-1 pr-4 py-1 text-xs font-medium text-primary mb-10 shadow-[var(--shadow-soft)]">
              <span className="rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold">
                IT Agency
              </span>
              Texas · Hong Kong
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-[color:var(--ink)] max-w-4xl mx-auto">
              <span className="block">We build digital products</span>
              <span className="block">
                that <span className="text-gradient">move businesses forward.</span>
              </span>
            </h1>
            <p className="mt-7 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              Custom software, cloud infrastructure, UI/UX design, and AI — delivered by a senior
              cross-functional team that treats your project like our own.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton to="/contact">
                Start a project <Icon icon="solar:arrow-right-linear" />
              </PrimaryButton>
              <SecondaryButton to="/services">
                Our services <Icon icon="solar:layers-bold" />
              </SecondaryButton>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 max-w-3xl mx-auto">
              {partnerBadges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium"
                >
                  <Icon icon="solar:verified-check-bold" className="text-primary" /> {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        <SectionShell className="!pt-0">
          <div className="text-center mb-10" data-reveal>
            <Eyebrow className="justify-center">What we do</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-[color:var(--ink)] tracking-[-0.02em]">
              Four disciplines. One accountable team.
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
              Development, cloud, design, and AI — explore our service areas and see how we deliver.
            </p>
          </div>
          <div data-reveal>
            <PlatformExplorer />
          </div>
        </SectionShell>

        <LogoMarquee />

        <section className="relative overflow-hidden section-dark-flat section-shell">
          <div className="absolute inset-0 premium-grid opacity-[0.06] pointer-events-none" />
          <div
            className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center card-grid"
            data-reveal-stagger
          >
            {metrics.map((m) => (
              <div key={m.l} className="text-center h-full">
                <div
                  className="metric-num font-serif text-4xl lg:text-5xl text-gradient-gold tracking-tight"
                  data-value={m.v}
                >
                  {m.v}
                </div>
                <div className="text-[10px] mt-2 text-background/40 uppercase tracking-[0.2em] font-medium">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </section>

        <SectionShell>
          <SectionHeader
            eyebrow="Why Verdian"
            title="Stop stitching freelancers together."
            lede="Side-by-side comparison of in-house hiring and DIY vs. working with a dedicated agency squad."
          />
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch">
            <div data-reveal className="h-full min-h-0">
              <EnterpriseMatrix />
            </div>
            <div data-reveal className="h-full min-h-0">
              <LiveActivityFeed />
            </div>
          </div>
        </SectionShell>

        <SectionShell tone="subtle">
          <SectionHeader
            eyebrow="Our expertise"
            title="Senior talent. Production standards."
            lede="Every engagement is staffed with experienced engineers, designers, and delivery leads — not junior contractors."
          />
          <AdvancedCapabilities />
        </SectionShell>

        <SectionShell>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal>
              <Eyebrow>How we build</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-[color:var(--ink)] tracking-[-0.02em] leading-tight">
                Modern stack. Battle-tested process.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                TypeScript, React, cloud-native infrastructure, and automated CI/CD — the same
                practices we rely on for our own products, applied to every client project.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Agile sprints with weekly demos",
                  "Design-to-dev handoff in Figma",
                  "Automated testing & code review",
                  "Post-launch support retainers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <Icon icon="solar:check-circle-bold" className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Explore our services <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>
            <div data-reveal>
              <CodePreview />
            </div>
          </div>
        </SectionShell>

        <SectionShell tone="muted">
          <SectionHeader
            eyebrow="Client outcomes"
            title="Results that speak for themselves."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-5 items-stretch card-grid" data-reveal-stagger>
            {caseStudies.map((c, i) => (
              <div key={c.company} className="h-full min-h-0">
                <div
                  className={`card-premium !p-8 h-full flex flex-col ${i === 1 ? "!border-primary/25 !ring-1 !ring-primary/10" : ""}`}
                >
                <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                  {c.industry}
                </div>
                <div className="font-serif text-2xl text-[color:var(--ink)] mt-2">{c.company}</div>
                <div className="mt-5 font-serif text-4xl text-gradient tracking-tight">
                  {c.metric}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  {c.metricLabel}
                </div>
                <blockquote className="mt-5 text-sm text-muted-foreground leading-relaxed border-l-2 border-accent/40 pl-4 flex-1">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
                <div className="mt-auto pt-5 border-t border-border flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary grid place-items-center font-serif text-sm">
                    {c.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{c.author}</div>
                    <div className="text-xs text-muted-foreground">{c.role}</div>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        <CTABanner
          title="Let's build something great together."
          lede="Tell us about your project — we'll respond within one business day with a clear plan and timeline."
          primaryLabel="Start a project"
          secondaryLabel="View engagement models"
        />
      </div>
    </Layout>
  );
}
