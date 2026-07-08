import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { CTABanner } from "@/components/site/CTABanner";
import { PricingMatrix } from "@/components/site/IndustryExplorer";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Verdian" },
      {
        name: "description",
        content: "Simple, transparent pricing for teams from seed to enterprise.",
      },
      { property: "og:title", content: "Pricing — Verdian" },
      { property: "og:description", content: "Three plans. Transparent economics." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter",
    price: "$59",
    unit: "per seat / month",
    tag: "Teams up to 25",
    features: [
      "Revenue CRM & GL",
      "AR, AP, Billing",
      "50 workflows",
      "Standard support",
      "Community access",
      "Basic AI assistants",
    ],
    cta: "Start free trial",
    highlight: false,
    ctaVariant: "solid" as const,
  },
  {
    name: "Growth",
    price: "$149",
    unit: "per seat / month",
    tag: "Most popular",
    features: [
      "Everything in Starter",
      "Inventory & Projects",
      "Verdian AI Copilots",
      "Unlimited workflows",
      "Priority support",
      "SOC 2 pack",
    ],
    cta: "Book a demo",
    highlight: true,
    ctaVariant: "accent" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "annual commitment",
    tag: "Multi-entity & regulated",
    features: [
      "Everything in Growth",
      "Multi-entity consolidation",
      "Dedicated environment",
      "HIPAA & SOX pack",
      "Named CSM & SLAs",
      "Custom AI agents",
    ],
    cta: "Contact sales",
    highlight: false,
    ctaVariant: "outline" as const,
  },
];

const faqs: Array<[string, string]> = [
  [
    "Is Verdian AI included?",
    "Yes — Growth and Enterprise include the full AI suite. Starter includes summarization and draft assistants.",
  ],
  [
    "Can we migrate from an existing system?",
    "Yes. Our migration team handles chart-of-accounts, historical ledger, and pipeline data end-to-end.",
  ],
  [
    "Do you support multi-entity?",
    "Enterprise includes native consolidation across unlimited entities, currencies, and jurisdictions.",
  ],
  [
    "Where is our data stored?",
    "US, EU, and APAC regions with encryption at rest and in transit. SOC 2 Type II, HIPAA, and ISO 27001 certified.",
  ],
];

function PricingPage() {
  const scope = useGsapReveal();
  return (
    <Layout>
      <div ref={scope}>
        <PageHero
          eyebrow="Pricing"
          title="Simple economics. Enterprise power."
          lede="Pay for seats, not modules. Every plan includes CRM, ERP, and Verdian AI — the platform only works when it's whole."
        />

        <SectionShell className="!pt-0">
          <div className="grid md:grid-cols-3 gap-5 items-stretch" data-reveal>
            {plans.map((p) => (
              <div
                key={p.name}
                className={`h-full rounded-[1.25rem] p-8 flex flex-col ${
                  p.highlight
                    ? "pricing-card pricing-card--featured ring-1 ring-accent/25"
                    : "pricing-card"
                }`}
              >
                <div
                  className={`text-xs uppercase tracking-widest ${p.highlight ? "text-accent" : "text-muted-foreground"}`}
                >
                  {p.tag}
                </div>
                <div
                  className={`font-serif text-3xl mt-3 ${p.highlight ? "text-background" : "text-[color:var(--ink)]"}`}
                >
                  {p.name}
                </div>
                <div className="mt-6 font-serif text-5xl leading-none">{p.price}</div>
                <div
                  className={`text-sm mt-1 min-h-[1.25rem] ${p.highlight ? "text-background/60" : "text-muted-foreground"}`}
                >
                  {p.unit}
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex gap-3 text-sm leading-snug ${p.highlight ? "text-background/85" : "text-foreground/80"}`}
                    >
                      <Icon
                        icon="solar:check-circle-bold"
                        className={`shrink-0 text-lg mt-0.5 ${p.highlight ? "text-accent" : "text-primary"}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`pricing-cta mt-auto pt-10 pricing-cta--${p.ctaVariant}`}
                >
                  {p.cta}
                  <Icon icon="solar:arrow-right-linear" className="text-base" />
                </Link>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell tone="muted">
          <SectionHeader eyebrow="Compare plans" title="Full feature breakdown." align="center" />
          <div data-reveal>
            <PricingMatrix />
          </div>
        </SectionShell>

        <SectionShell>
          <SectionHeader eyebrow="FAQ" title="Common questions." />
          <div className="max-w-3xl space-y-3" data-reveal-stagger>
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className="group rounded-2xl border border-border bg-card px-6 py-5 open:shadow-[var(--shadow-soft)]"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-[color:var(--ink)] text-[15px]">
                  {q}
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className="text-muted-foreground group-open:rotate-180 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </SectionShell>

        <CTABanner
          title="Need a custom enterprise quote?"
          lede="Talk to sales about multi-entity rollouts, dedicated environments, and volume pricing."
          primaryLabel="Contact sales"
        />
      </div>
    </Layout>
  );
}
