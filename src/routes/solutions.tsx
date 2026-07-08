import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { Layout, PageHero } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Verdian" },
      { name: "description", content: "Verdian solutions by industry and role — from SaaS finance to multi-entity manufacturing." },
      { property: "og:title", content: "Solutions — Verdian" },
      { property: "og:description", content: "Purpose-built configurations for every industry." },
    ],
  }),
  component: SolutionsPage,
});

const industries = [
  { i: "solar:cloud-bold", t: "SaaS & Software", d: "MRR analytics, usage billing, and revenue recognition out of the box." },
  { i: "solar:pill-bold", t: "Life Sciences", d: "HIPAA-ready CRM with clinical account tracking and study finance." },
  { i: "solar:factory-bold", t: "Manufacturing", d: "BOM, MRP, and multi-plant inventory unified with finance." },
  { i: "solar:cart-large-2-bold", t: "Commerce", d: "Omnichannel order management with unit economics per SKU." },
  { i: "solar:buildings-bold", t: "Professional Services", d: "Utilization, billing, and rev-rec for firms of every size." },
  { i: "solar:banknote-2-bold", t: "Financial Services", d: "Client CRM, portfolio ops, and SOX-ready close." },
];

const roles = [
  { t: "For Founders & CEOs", p: ["Board-ready reporting in one click", "Real-time cash and pipeline in the same view", "Scale from 10 to 10,000 without a re-platform"] },
  { t: "For CFOs", p: ["Continuous close — no more month-end sprints", "Multi-entity consolidations native", "Audit-grade trail on every transaction"] },
  { t: "For Revenue Leaders", p: ["Pipeline that reconciles to bookings", "AI forecasting with signal-based accuracy", "Territory and comp fully automated"] },
  { t: "For Ops Leaders", p: ["Inventory, procurement, and fulfillment in sync", "Workflow Studio for any process", "One place for every operational metric"] },
];

function SolutionsPage() {
  const scope = useGsapReveal();
  return (
    <Layout>
      <div ref={scope}>
        <PageHero
          eyebrow="Solutions"
          title="Configured for how your industry actually runs."
          lede="Verdian ships with industry blueprints and role-based templates that get you live in weeks, not quarters."
        />
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6" data-reveal>By industry</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-reveal-stagger>
            {industries.map((m) => (
              <div key={m.t} className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:-translate-y-1 transition">
                <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent grid place-items-center mb-4">
                  <Icon icon={m.i} className="text-2xl" />
                </div>
                <div className="font-serif text-xl text-[color:var(--ink)]">{m.t}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-card/60 border-y border-border/60 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6" data-reveal>By role</div>
            <div className="grid md:grid-cols-2 gap-6" data-reveal-stagger>
              {roles.map((r) => (
                <div key={r.t} className="bg-background border border-border rounded-2xl p-8">
                  <div className="font-serif text-2xl text-[color:var(--ink)] mb-4">{r.t}</div>
                  <ul className="space-y-3">
                    {r.p.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-foreground/80">
                        <Icon icon="solar:check-circle-bold" className="text-primary text-lg shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-6 py-24 text-center" data-reveal>
          <h2 className="font-serif text-4xl text-[color:var(--ink)]">Not sure which fits?</h2>
          <p className="mt-4 text-muted-foreground">Our field team will map Verdian to your business in a 30-minute working session.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold">
            Start with a demo <Icon icon="solar:arrow-right-linear" />
          </Link>
        </section>
      </div>
    </Layout>
  );
}