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
import { caseStudies, complianceBadges } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdian — The Native CRM & ERP Platform" },
      {
        name: "description",
        content:
          "One workspace for revenue, finance, and operations. Verdian is the native CRM & ERP platform built in Austin, Texas.",
      },
      { property: "og:title", content: "Verdian — Native CRM & ERP" },
      { property: "og:description", content: "One workspace. Every operation." },
    ],
  }),
  component: Home,
});

const metrics = [
  { v: "3,200+", l: "Enterprise teams" },
  { v: "$4.8B", l: "Revenue on-platform" },
  { v: "99.99%", l: "Uptime SLA" },
  { v: "<50ms", l: "Graph query latency" },
];

function Home() {
  const scope = useGsapReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(".hero-eyebrow", { opacity: 0, y: 20, duration: 0.6 })
        .from(".hero-line", { opacity: 0, y: 50, duration: 0.9, stagger: 0.07 }, "-=0.2")
        .from(".hero-lede", { opacity: 0, y: 20, duration: 0.7 }, "-=0.4")
        .from(".hero-cta > *", { opacity: 0, y: 16, duration: 0.5, stagger: 0.06 }, "-=0.4");

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
        {/* HERO */}
        <section
          ref={heroRef}
          className="relative overflow-hidden pb-12 md:pb-16 page-hero nav-offset"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-0 premium-grid opacity-50" />
          <div className="absolute inset-0 grain" />
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/50 backdrop-blur-sm pl-1 pr-4 py-1 text-xs font-medium text-primary mb-8 shadow-[var(--shadow-soft)]">
              <span className="rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold">
                Platform 4.0
              </span>
              AI-native CRM & ERP
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-[color:var(--ink)] max-w-4xl mx-auto">
              <span className="hero-line block">The operating system</span>
              <span className="hero-line block">
                for <span className="text-gradient">modern enterprises.</span>
              </span>
            </h1>
            <p className="hero-lede mt-7 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              One unified graph for revenue, finance, inventory, and AI — real-time sync, continuous
              close, and enterprise governance built in.
            </p>
            <div className="hero-cta mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton to="/contact">
                Request enterprise demo <Icon icon="solar:arrow-right-linear" />
              </PrimaryButton>
              <SecondaryButton to="/platform">
                Explore platform <Icon icon="solar:layers-bold" />
              </SecondaryButton>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {complianceBadges.map((b) => (
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

        {/* INTERACTIVE PLATFORM — flagship */}
        <SectionShell className="!pt-4 !pb-16">
          <div className="text-center mb-10" data-reveal>
            <Eyebrow>Live platform preview</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-[color:var(--ink)] tracking-[-0.02em] mt-2">
              Click a module. See the unified graph in action.
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
              CRM, finance, AI, and ops — one data model, one permission layer, zero sync jobs.
            </p>
          </div>
          <div data-reveal>
            <PlatformExplorer />
          </div>
        </SectionShell>

        <LogoMarquee />

        {/* METRICS */}
        <section className="relative overflow-hidden section-band-dark-flat py-16">
          <div className="absolute inset-0 premium-grid opacity-[0.06]" />
          <div
            className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 relative"
            data-reveal-stagger
          >
            {metrics.map((m) => (
              <div key={m.l} className="text-center">
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

        {/* ENTERPRISE MATRIX + LIVE FEED */}
        <SectionShell>
          <SectionHeader
            eyebrow="Why Verdian"
            title="Legacy stacks weren't built for this."
            lede="Side-by-side comparison of patchwork tools vs. a native unified platform."
          />
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
            <div data-reveal>
              <EnterpriseMatrix />
            </div>
            <div data-reveal>
              <LiveActivityFeed />
            </div>
          </div>
        </SectionShell>

        {/* ADVANCED CAPABILITIES */}
        <SectionShell tone="subtle">
          <SectionHeader
            eyebrow="Platform architecture"
            title="Enterprise-grade by design."
            lede="Built for operators who need speed, scale, and audit-grade controls — not another point solution."
          />
          <div data-reveal-stagger>
            <AdvancedCapabilities />
          </div>
        </SectionShell>

        {/* DEVELOPER / API */}
        <SectionShell>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal>
              <Eyebrow>Developer platform</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-[color:var(--ink)] tracking-[-0.02em] leading-tight">
                One API for your entire operation.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                GraphQL, REST, webhooks, and typed SDKs. Query accounts, invoices, and inventory in
                a single request — then let AI agents execute workflows with human approval.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "GraphQL unified schema",
                  "300+ native connectors",
                  "Webhook event stream",
                  "TypeScript & Python SDKs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <Icon icon="solar:check-circle-bold" className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/platform"
                className="mt-8 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                View platform docs <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>
            <div data-reveal>
              <CodePreview />
            </div>
          </div>
        </SectionShell>

        {/* CASE STUDIES */}
        <SectionShell tone="muted">
          <SectionHeader
            eyebrow="Customer outcomes"
            title="Measured results at scale."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-5" data-reveal-stagger>
            {caseStudies.map((c, i) => (
              <div
                key={c.company}
                className={`card-premium !p-8 ${i === 1 ? "!border-primary/25 !ring-1 !ring-primary/10" : ""}`}
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
                <blockquote className="mt-5 text-sm text-muted-foreground leading-relaxed border-l-2 border-accent/40 pl-4">
                  "{c.quote}"
                </blockquote>
                <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
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
            ))}
          </div>
        </SectionShell>

        <CTABanner
          title="Deploy the platform your operators deserve."
          lede="30-minute session with a field engineer — live environment mapped to your stack, entities, and workflows."
          primaryLabel="Book enterprise demo"
          secondaryLabel="View pricing"
        />
      </div>
    </Layout>
  );
}
