import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { Layout, PageHero } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Verdian" },
      { name: "description", content: "Simple, transparent pricing for teams from seed to enterprise." },
      { property: "og:title", content: "Pricing — Verdian" },
      { property: "og:description", content: "Three plans. Transparent economics." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  { name: "Starter", price: "$59", unit: "per seat / month", tag: "For teams up to 25",
    features: ["Revenue CRM & GL", "AR, AP, Billing", "50 workflows", "Standard support", "Community access"],
    cta: "Start free trial", highlight: false },
  { name: "Growth", price: "$149", unit: "per seat / month", tag: "Most popular",
    features: ["Everything in Starter", "Inventory & Projects", "Verdian AI Copilots", "Unlimited workflows", "Priority support", "SOC 2 pack"],
    cta: "Book a demo", highlight: true },
  { name: "Enterprise", price: "Custom", unit: "annual commitment", tag: "Multi-entity & regulated",
    features: ["Everything in Growth", "Multi-entity consolidation", "Dedicated environment", "HIPAA & SOX pack", "Named CSM & SLAs", "Custom AI agents"],
    cta: "Contact sales", highlight: false },
];

const faqs: Array<[string, string]> = [
  ["Is Verdian AI included?", "Yes — Growth and Enterprise plans include the full Verdian AI suite. Starter includes summarization and draft assistants."],
  ["Can we migrate from an existing system?", "Yes. Our migration team handles chart-of-accounts, historical ledger, and pipeline data end-to-end."],
  ["Do you support multi-entity?", "Enterprise includes native consolidation across unlimited entities, currencies, and jurisdictions."],
  ["Where is our data stored?", "US, EU, and APAC regions with encryption at rest and in transit. SOC 2 Type II, HIPAA, and ISO 27001 certified."],
];

function PricingPage() {
  const scope = useGsapReveal();
  return (
    <Layout>
      <div ref={scope}>
        <PageHero eyebrow="Pricing" title="Simple economics. Enterprise power."
          lede="Pay for seats, not modules. Every plan includes CRM, ERP, and Verdian AI — because the platform only works when it's whole." />
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6" data-reveal-stagger>
            {plans.map((p) => (
              <div key={p.name}
                className={`rounded-3xl p-8 border transition ${p.highlight ? "bg-[color:var(--ink)] text-background border-transparent shadow-[var(--shadow-lift)] scale-[1.02]" : "bg-card border-border"}`}>
                <div className={`text-xs uppercase tracking-widest ${p.highlight ? "text-accent" : "text-muted-foreground"}`}>{p.tag}</div>
                <div className={`font-serif text-3xl mt-3 ${p.highlight ? "text-background" : "text-[color:var(--ink)]"}`}>{p.name}</div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className={`font-serif text-5xl ${p.highlight ? "text-background" : "text-[color:var(--ink)]"}`}>{p.price}</span>
                </div>
                <div className={`text-sm mt-1 ${p.highlight ? "text-background/60" : "text-muted-foreground"}`}>{p.unit}</div>
                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex gap-3 text-sm ${p.highlight ? "text-background/85" : "text-foreground/80"}`}>
                      <Icon icon="solar:check-circle-bold" className={p.highlight ? "text-accent text-lg" : "text-primary text-lg"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${p.highlight ? "bg-accent text-accent-foreground hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"}`}>
                  {p.cta} <Icon icon="solar:arrow-right-linear" />
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6" data-reveal>Frequently asked</div>
          <div className="space-y-4" data-reveal-stagger>
            {faqs.map(([q, a]) => (
              <details key={q} className="group bg-card border border-border rounded-2xl p-6">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-[color:var(--ink)]">
                  {q}
                  <Icon icon="solar:alt-arrow-down-linear" className="group-open:rotate-180 transition" />
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}