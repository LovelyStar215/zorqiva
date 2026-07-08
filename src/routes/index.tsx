import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import heroAbstract from "@/assets/hero-abstract.jpg";
import dashboardMock from "@/assets/dashboard-mock.jpg";
import teamAustin from "@/assets/team-austin.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdian — The Native CRM & ERP Platform" },
      { name: "description", content: "One workspace for revenue, finance, and operations. Verdian is the native CRM & ERP platform built in Austin, Texas." },
      { property: "og:title", content: "Verdian — Native CRM & ERP" },
      { property: "og:description", content: "One workspace. Every operation." },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: "solar:users-group-two-rounded-bold", title: "Revenue CRM", desc: "Pipeline, forecasting, and account intelligence with real-time buyer signals." },
  { icon: "solar:chart-square-bold", title: "Finance & ERP", desc: "General ledger, AP/AR, and multi-entity consolidation on one ledger." },
  { icon: "solar:box-bold", title: "Inventory & Ops", desc: "Real-time stock, procurement, and warehouse orchestration across sites." },
  { icon: "solar:wallet-money-bold", title: "Billing & Payments", desc: "Subscriptions, invoicing, and reconciliation with 40+ payment rails." },
  { icon: "solar:brain-bold", title: "Verdian AI", desc: "Native copilots that draft, forecast, and take action across every module." },
  { icon: "solar:shield-check-bold", title: "Governance", desc: "SOC 2, HIPAA, and GDPR ready with granular audit and role controls." },
  { icon: "solar:layers-bold", title: "Workflow Studio", desc: "Compose no-code workflows across CRM, finance, and back-office." },
  { icon: "solar:global-bold", title: "Open Platform", desc: "GraphQL, webhooks, and 300+ pre-built connectors — extend anything." },
];

const metrics = [
  { v: "3,200+", l: "Teams on Verdian" },
  { v: "$4.8B", l: "Revenue managed" },
  { v: "99.99%", l: "Platform uptime" },
  { v: "38%", l: "Avg. cycle reduction" },
];

const workflow = [
  { n: "01", t: "Model your business", d: "Import accounts, entities, and chart of accounts in under an hour." },
  { n: "02", t: "Connect the stack", d: "Native syncs with HubSpot, NetSuite, Stripe, Snowflake, and more." },
  { n: "03", t: "Compose workflows", d: "Automate quote-to-cash, procure-to-pay, and hire-to-retire visually." },
  { n: "04", t: "Scale with confidence", d: "Multi-entity, multi-currency, multi-region — from Series A to IPO." },
];

function Home() {
  const scope = useGsapReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-eyebrow", { opacity: 0, y: 20, duration: 0.6 })
        .from(".hero-line", { opacity: 0, y: 60, duration: 1, stagger: 0.08 }, "-=0.3")
        .from(".hero-lede", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
        .from(".hero-cta > *", { opacity: 0, y: 20, duration: 0.6, stagger: 0.08 }, "-=0.5")
        .from(".hero-visual", { opacity: 0, scale: 0.95, duration: 1.2 }, "-=0.9")
        .from(".hero-badge", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, "-=0.6");

      gsap.to(".hero-shape-1", {
        y: -80,
        rotate: 8,
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(".hero-shape-2", {
        y: 60,
        rotate: -6,
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });

      // metric count-up
      gsap.utils.toArray<HTMLElement>(".metric-num").forEach((el) => {
        const raw = el.dataset.value || "0";
        const numeric = parseFloat(raw.replace(/[^0-9.]/g, ""));
        if (!isFinite(numeric)) return;
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
            el.textContent = `${prefix}${val}${suffix.replace(/^[^%KMBk+]/, "")}`;
          },
          onComplete: () => { el.textContent = raw; },
        });
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  useEffect(() => () => ScrollTrigger.getAll().forEach((s) => s.kill()), []);

  return (
    <Layout>
      <div ref={scope}>
        {/* HERO */}
        <section
          ref={heroRef}
          className="relative overflow-hidden pt-16 pb-32"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="hero-shape-1 absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl"
               style={{ background: "radial-gradient(circle, oklch(0.72 0.14 60 / 0.6), transparent 70%)" }} />
          <div className="hero-shape-2 absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
               style={{ background: "radial-gradient(circle, oklch(0.55 0.10 155 / 0.5), transparent 70%)" }} />
          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
            <div>
              <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 pl-1 pr-4 py-1 text-xs font-medium text-primary mb-8">
                <span className="rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-[10px] uppercase tracking-wider">New</span>
                Verdian 4.0 — the AI-native ERP is here
              </div>
              <h1 className="font-serif text-5xl md:text-7xl xl:text-[5.5rem] leading-[0.98] tracking-tight text-[color:var(--ink)]">
                <span className="hero-line block">One workspace.</span>
                <span className="hero-line block">
                  Every <em className="text-primary not-italic italic-serif">operation.</em>
                </span>
                <span className="hero-line block text-accent italic font-light">Perfectly in sync.</span>
              </h1>
              <p className="hero-lede mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
                Verdian unifies CRM, finance, inventory, and back-office on a single intelligent ledger — so revenue, ops, and strategy finally speak the same language.
              </p>
              <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold shadow-[var(--shadow-lift)] hover:opacity-90 transition"
                >
                  Book a strategy call <Icon icon="solar:arrow-right-linear" />
                </Link>
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-7 py-4 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition"
                >
                  <Icon icon="solar:play-circle-bold" className="text-lg" /> Watch platform tour
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-6 flex-wrap">
                {["SOC 2 Type II", "HIPAA", "GDPR", "ISO 27001"].map((b) => (
                  <div key={b} className="hero-badge flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon icon="solar:verified-check-bold" className="text-primary text-base" /> {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual relative">
              <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-lift)] border border-border">
                <img src={heroAbstract} alt="Verdian abstract" className="w-full h-auto" width={1600} height={1200} />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-2xl p-5 shadow-[var(--shadow-soft)] w-64">
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Q3 Revenue</div>
                <div className="font-serif text-3xl mt-2 text-[color:var(--ink)]">$18.4M</div>
                <div className="mt-2 flex items-center gap-2 text-xs text-primary">
                  <Icon icon="solar:arrow-up-bold" /> +24.8% vs plan
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-[color:var(--ink)] text-background rounded-2xl p-5 shadow-[var(--shadow-lift)]">
                <div className="flex items-center gap-2 text-xs text-accent">
                  <Icon icon="solar:brain-bold" /> Verdian AI
                </div>
                <div className="text-sm mt-2 leading-snug">3 accounts flagged for renewal — draft outreach ready.</div>
              </div>
            </div>
          </div>
        </section>

        {/* LOGO STRIP */}
        <section className="border-y border-border/60 bg-card/40">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground" data-reveal>
              Trusted by operators at
            </div>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4 font-serif text-xl text-foreground/60" data-reveal-stagger>
              {["Halcyon", "Northstar", "Cascade", "Meridian", "Atlas Rowe", "Kestrel"].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
            <div data-reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">
                — The Verdian thesis
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[color:var(--ink)]">
                Modern companies deserve a modern operating system.
              </h2>
            </div>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed" data-reveal>
              <p>
                Most teams still stitch together twelve disconnected tools — a CRM here, an ERP there, a billing engine, a data warehouse, a workflow builder. The result is drift: numbers that don't match, decisions made on stale data, and quarterly heroics to close the books.
              </p>
              <p>
                Verdian was built to end that. One graph. One ledger. One workspace where every team — from AE to CFO — operates on the same source of truth in real time.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Read our story <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section id="platform" className="bg-card/50 py-32 border-y border-border/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16" data-reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">
                — One platform
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[color:var(--ink)]">
                Eight disciplines. Zero seams.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Every module shares the same data model, permissions, and workflow engine — so a change in sales instantly updates finance, ops, and forecasting.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-reveal-stagger>
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="group relative bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <Icon icon={p.icon} className="text-2xl" />
                  </div>
                  <div className="font-serif text-xl text-[color:var(--ink)] mb-2">{p.title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DASHBOARD SHOWCASE */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                <img src={dashboardMock} alt="Verdian dashboard" className="w-full" width={1600} height={1100} loading="lazy" />
              </div>
            </div>
            <div data-reveal className="order-1 lg:order-2">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">
                — Verdian AI
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[color:var(--ink)]">
                An intelligence layer that actually understands your business.
              </h2>
              <div className="mt-8 space-y-5">
                {[
                  { i: "solar:magic-stick-3-bold", t: "Composable copilots", d: "Purpose-built agents for renewals, collections, and forecasting." },
                  { i: "solar:graph-new-up-bold", t: "Predictive planning", d: "Roll-forward budgets and pipeline predictions accurate to the week." },
                  { i: "solar:document-text-bold", t: "Auto-narratives", d: "Board decks, MRR reports, and variance analysis drafted for you." },
                ].map((f) => (
                  <div key={f.t} className="flex gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/15 text-accent grid place-items-center">
                      <Icon icon={f.i} className="text-xl" />
                    </div>
                    <div>
                      <div className="font-semibold text-[color:var(--ink)]">{f.t}</div>
                      <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="bg-[color:var(--ink)] text-background py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10" data-reveal-stagger>
            {metrics.map((m) => (
              <div key={m.l} className="text-center md:text-left">
                <div className="metric-num font-serif text-5xl md:text-6xl text-accent" data-value={m.v}>{m.v}</div>
                <div className="text-sm mt-3 text-background/60 uppercase tracking-widest">{m.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl mb-16" data-reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">— How it works</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[color:var(--ink)]">From onboarding to IPO in one continuous flow.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6" data-reveal-stagger>
            {workflow.map((s) => (
              <div key={s.n} className="border-t-2 border-primary/30 pt-6">
                <div className="font-serif text-accent text-2xl">{s.n}</div>
                <div className="font-serif text-2xl text-[color:var(--ink)] mt-3">{s.t}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="bg-card/60 border-y border-border/60 py-32">
          <div className="max-w-4xl mx-auto px-6 text-center" data-reveal>
            <Icon icon="solar:quote-up-square-bold" className="text-6xl text-accent mx-auto" />
            <blockquote className="font-serif text-3xl md:text-4xl leading-snug mt-8 text-[color:var(--ink)]">
              "We collapsed nine tools into Verdian and closed our first month in four days instead of nineteen. It changed what our finance team could focus on."
            </blockquote>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 grid place-items-center text-primary font-serif text-lg">MK</div>
              <div className="text-left">
                <div className="font-semibold text-[color:var(--ink)]">Maren Klaassen</div>
                <div className="text-sm text-muted-foreground">CFO, Halcyon Bio</div>
              </div>
            </div>
          </div>
        </section>

        {/* AUSTIN / CTA */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">— Built in Austin, Texas</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[color:var(--ink)]">A team of operators, engineers, and craftsmen.</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We're a distributed team headquartered on West 2nd Street, five blocks from the Colorado River. Our engineers ship, our designers care, and our customers ship faster because of it.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Meet the team <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>
            <div data-reveal className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)]">
              <img src={teamAustin} alt="Verdian team in Austin" className="w-full" width={1600} height={1100} loading="lazy" />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="relative rounded-[2rem] overflow-hidden p-14 md:p-20"
               style={{ background: "var(--gradient-primary)" }}>
            <div className="relative z-10 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div data-reveal>
                <h3 className="font-serif text-4xl md:text-5xl leading-tight text-primary-foreground">
                  Ready to run your entire company from one place?
                </h3>
                <p className="mt-4 text-primary-foreground/70 text-lg max-w-lg">
                  See a live Verdian environment mapped to your business in a 30-minute session with our field engineers.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end" data-reveal>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-semibold hover:opacity-90 transition">
                  Book a demo <Icon icon="solar:arrow-right-linear" />
                </Link>
                <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 text-primary-foreground px-7 py-4 text-sm font-semibold hover:bg-primary-foreground/10 transition">
                  See pricing
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
          </div>
        </section>
      </div>
    </Layout>
  );
}