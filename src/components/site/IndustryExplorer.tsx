import { Icon } from "@iconify/react";
import { useState } from "react";

const industries = [
  {
    id: "health",
    label: "Healthcare",
    icon: "solar:heart-pulse-bold",
    metric: "HIPAA",
    metricLabel: "Compliance experience",
    features: [
      "Patient portals",
      "EHR integrations",
      "HIPAA-compliant cloud",
      "Telehealth platforms",
    ],
    outcome: "8-week MVP delivery",
  },
  {
    id: "fintech",
    label: "Financial Services",
    icon: "solar:banknote-2-bold",
    metric: "SOC 2",
    metricLabel: "Security standard",
    features: [
      "Secure web apps",
      "Payment integrations",
      "Audit-ready infrastructure",
      "Data encryption",
    ],
    outcome: "Zero-downtime migrations",
  },
  {
    id: "retail",
    label: "Retail & E-commerce",
    icon: "solar:cart-large-2-bold",
    metric: "2.4M",
    metricLabel: "Orders processed",
    features: [
      "Custom storefronts",
      "Inventory systems",
      "Payment gateways",
      "Analytics dashboards",
    ],
    outcome: "40% faster deployments",
  },
  {
    id: "saas",
    label: "SaaS & Startups",
    icon: "solar:cloud-bold",
    metric: "180+",
    metricLabel: "Products launched",
    features: ["MVP development", "SaaS architecture", "Auth & billing", "Growth-ready infra"],
    outcome: "Seed to Series B builds",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    icon: "solar:buildings-bold",
    metric: "Fortune 500",
    metricLabel: "Clients served",
    features: ["Legacy modernization", "Cloud migration", "Internal tools", "Dedicated squads"],
    outcome: "99.9% uptime SLAs",
  },
  {
    id: "gov",
    label: "Government & Non-profit",
    icon: "solar:shield-check-bold",
    metric: "WCAG AA",
    metricLabel: "Accessibility standard",
    features: ["Accessible web apps", "Secure hosting", "Grant-funded projects", "Citizen portals"],
    outcome: "FedRAMP-aligned practices",
  },
] as const;

export function IndustryExplorer() {
  const [active, setActive] = useState(0);
  const ind = industries[active];

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-[var(--shadow-lift)]">
      <div className="flex flex-wrap gap-2 p-4 border-b border-border bg-muted/20">
        {industries.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(i)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              active === i
                ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
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
            We&apos;ve delivered projects for {ind.label.toLowerCase()} organizations — from MVPs to
            enterprise-scale platforms with compliance and security built in.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-4 py-2 text-xs font-semibold">
            <Icon icon="solar:graph-up-bold" /> {ind.outcome}
          </div>
        </div>
        <div className="p-8 bg-background/50">
          <div className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-4">
            What we deliver
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
  { name: "Discovery & scoping", starter: true, growth: true, enterprise: true },
  { name: "UI/UX design", starter: "Basic", growth: true, enterprise: true },
  { name: "Full-stack development", starter: true, growth: true, enterprise: true },
  { name: "Cloud & DevOps setup", starter: false, growth: true, enterprise: true },
  { name: "Dedicated squad", starter: false, growth: false, enterprise: true },
  { name: "AI & data engineering", starter: false, growth: "Add-on", enterprise: true },
  { name: "Ongoing maintenance", starter: false, growth: "Optional", enterprise: true },
  { name: "SLA & priority support", starter: false, growth: false, enterprise: true },
  { name: "Technical account manager", starter: false, growth: false, enterprise: true },
] as const;

export function PricingMatrix() {
  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-[var(--shadow-soft)] overflow-x-auto">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="bg-muted/40 border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground">
            <th className="text-left px-5 py-4 font-semibold">Deliverable</th>
            <th className="px-5 py-4 font-semibold">Project</th>
            <th className="px-5 py-4 font-semibold text-primary">Retainer</th>
            <th className="px-5 py-4 font-semibold">Dedicated Squad</th>
          </tr>
        </thead>
        <tbody>
          {pricingFeatures.map((row, i) => (
            <tr
              key={row.name}
              className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
            >
              <td className="px-5 py-3.5 font-medium text-[color:var(--ink)]">{row.name}</td>
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
