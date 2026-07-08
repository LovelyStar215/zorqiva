import { Icon } from "@iconify/react";
import { useState } from "react";

const industries = [
  {
    id: "saas",
    label: "SaaS & Software",
    icon: "solar:cloud-bold",
    metric: "$12M ARR",
    metricLabel: "Avg. customer scale",
    features: [
      "Usage & subscription billing",
      "MRR / ARR analytics",
      "Rev-rec automation",
      "PLG + enterprise CRM",
    ],
    outcome: "38% faster month-end close",
  },
  {
    id: "life",
    label: "Life Sciences",
    icon: "solar:pill-bold",
    metric: "HIPAA",
    metricLabel: "Compliance ready",
    features: [
      "Clinical account tracking",
      "Study finance",
      "HIPAA audit trails",
      "Sample & trial logistics",
    ],
    outcome: "SOX-ready from day one",
  },
  {
    id: "mfg",
    label: "Manufacturing",
    icon: "solar:factory-bold",
    metric: "14 plants",
    metricLabel: "Avg. sites managed",
    features: ["BOM & MRP", "Multi-plant inventory", "Procure-to-pay", "Unit economics per SKU"],
    outcome: "99.7% inventory accuracy",
  },
  {
    id: "commerce",
    label: "Commerce",
    icon: "solar:cart-large-2-bold",
    metric: "2.4M SKUs",
    metricLabel: "Catalog scale",
    features: ["Omnichannel orders", "Returns & refunds", "Per-SKU margin", "3PL integrations"],
    outcome: "Real-time margin visibility",
  },
  {
    id: "services",
    label: "Professional Services",
    icon: "solar:buildings-bold",
    metric: "94%",
    metricLabel: "Utilization tracking",
    features: [
      "Time & materials billing",
      "Project profitability",
      "Resource planning",
      "Milestone rev-rec",
    ],
    outcome: "Automated invoicing",
  },
  {
    id: "finserv",
    label: "Financial Services",
    icon: "solar:banknote-2-bold",
    metric: "SOX",
    metricLabel: "Audit grade",
    features: ["Client CRM", "Portfolio ops", "Regulatory reporting", "Immutable audit trail"],
    outcome: "Continuous compliance",
  },
] as const;

export function IndustryExplorer() {
  const [active, setActive] = useState(0);
  const ind = industries[active];

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-(--shadow-lift)">
      <div className="flex flex-wrap gap-2 p-4 border-b border-border bg-muted/20">
        {industries.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(i)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              active === i
                ? "bg-primary text-primary-foreground shadow-(--shadow-soft)"
                : "border border-border bg-background text-foreground/65 hover:border-primary/30"
            }`}
          >
            <Icon icon={item.icon} className="text-sm" />
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0">
        <div className="p-8 lg:border-r border-border">
          <div className="font-serif text-3xl text-gradient tracking-tight">{ind.metric}</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
            {ind.metricLabel}
          </div>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Pre-configured blueprints for {ind.label.toLowerCase()} — go live in weeks with
            industry-specific workflows, reports, and compliance packs.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-4 py-2 text-xs font-semibold">
            <Icon icon="solar:graph-up-bold" /> {ind.outcome}
          </div>
        </div>
        <div className="p-8 bg-background/50">
          <div className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-4">
            Included capabilities
          </div>
          <ul className="space-y-3">
            {ind.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-foreground/85">
                <Icon icon="solar:check-circle-bold" className="text-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const pricingFeatures = [
  { name: "Revenue CRM & GL", starter: true, growth: true, enterprise: true },
  { name: "AR, AP & Billing", starter: true, growth: true, enterprise: true },
  { name: "Verdian AI Copilots", starter: "Basic", growth: true, enterprise: true },
  { name: "Inventory & Projects", starter: false, growth: true, enterprise: true },
  { name: "Multi-entity consolidation", starter: false, growth: false, enterprise: true },
  { name: "Dedicated environment", starter: false, growth: false, enterprise: true },
  { name: "HIPAA & SOX pack", starter: false, growth: "SOC 2", enterprise: true },
  { name: "Named CSM & SLAs", starter: false, growth: false, enterprise: true },
  { name: "Custom AI agents", starter: false, growth: false, enterprise: true },
] as const;

export function PricingMatrix() {
  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-(--shadow-soft) overflow-x-auto">
      <table className="w-full min-w-160 text-sm">
        <thead>
          <tr className="bg-muted/40 border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground">
            <th className="text-left px-5 py-4 font-semibold">Feature</th>
            <th className="px-5 py-4 font-semibold">Starter</th>
            <th className="px-5 py-4 font-semibold text-primary">Growth</th>
            <th className="px-5 py-4 font-semibold">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {pricingFeatures.map((row, i) => (
            <tr
              key={row.name}
              className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
            >
              <td className="px-5 py-3.5 font-medium text-(--ink)">{row.name}</td>
              {(["starter", "growth", "enterprise"] as const).map((plan) => {
                const val = row[plan];
                return (
                  <td key={plan} className="px-5 py-3.5 text-center">
                    {val === true ? (
                      <Icon
                        icon="solar:check-circle-bold"
                        className="text-primary text-lg mx-auto"
                      />
                    ) : val === false ? (
                      <span className="text-muted-foreground/40">—</span>
                    ) : (
                      <span className="text-xs font-semibold text-accent">{val}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
