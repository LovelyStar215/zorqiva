import { Icon } from "@iconify/react";
import { useState } from "react";
import { pricingFeatures, type EngagementPlan } from "@/lib/pricing-data";

const engagementPlans = [
  "project",
  "retainer",
  "squad",
] as const satisfies readonly EngagementPlan[];

const industries = [
  {
    id: "health",
    label: "Healthcare",
    icon: "solar:heart-pulse-bold",
    metric: "Sofi Health",
    metricLabel: "Wellness · connected product",
    description:
      "We built the mobile app and analytics layer for Sofi Health — Bluetooth pod pairing, usage journaling, and personalized recommendations backed by pioneer program data.",
    features: [
      "Patient & wellness portals",
      "Device-to-app integrations",
      "HIPAA-aligned cloud practices",
      "Telehealth-ready mobile apps",
    ],
    outcome: "Kickoff in under 2 weeks",
  },
  {
    id: "fintech",
    label: "Financial Services",
    icon: "solar:banknote-2-bold",
    metric: "Silo Markets",
    metricLabel: "Investing · rewards platform",
    description:
      "For Silo Markets we delivered onboarding, membership tiers, and portfolio flows with compliance-forward UX tied to IBKR custody — built for a regulated consumer fintech launch.",
    features: [
      "Secure web & mobile apps",
      "Payment & brokerage integrations",
      "Audit-ready infrastructure",
      "Compliance-first disclosures",
    ],
    outcome: "Senior squad from day one",
  },
  {
    id: "retail",
    label: "Retail & E-commerce",
    icon: "solar:cart-large-2-bold",
    metric: "Mompou Tapas",
    metricLabel: "Hospitality · creator commerce",
    description:
      "Mompou Tapas Bar — reservations, menus, and private events for Newark dining. Pitch'em — a mobile platform for creators to discover brands and send AI-generated partnership pitches.",
    features: [
      "Custom storefronts & menus",
      "Reservations & event booking",
      "Mobile commerce flows",
      "Conversion-focused UX",
    ],
    outcome: "Mobile-first by default",
  },
  {
    id: "saas",
    label: "SaaS & Startups",
    icon: "solar:cloud-bold",
    metric: "HomeDesigns AI",
    metricLabel: "AI · marketplace · travel",
    description:
      "HomeDesigns AI, Pitch'em, Boondockers Welcome, and FreshBridge — from AI-powered consumer apps to membership marketplaces, shipped since our 2025 launch.",
    features: ["MVP development", "SaaS architecture", "Auth & billing", "Scale-ready cloud infra"],
    outcome: "MVP to production",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    icon: "solar:buildings-bold",
    metric: "Narratize",
    metricLabel: "Manufacturing intelligence",
    description:
      "Narratize centralizes product knowledge and AI-assisted documentation for R&D teams — we helped architect their platform from individual hubs to portfolio management.",
    features: [
      "Knowledge & documentation systems",
      "AI-assisted workflows",
      "Cross-team collaboration tools",
      "Dedicated senior squads",
    ],
    outcome: "Architecture-led delivery",
  },
  {
    id: "gov",
    label: "Government & Non-profit",
    icon: "solar:shield-check-bold",
    metric: "WCAG AA",
    metricLabel: "Accessible by design",
    description:
      "Accessible UI patterns, semantic markup, and secure hosting on every engagement — ready for grant-funded and public-facing projects from day one.",
    features: [
      "Accessible web applications",
      "Secure cloud hosting",
      "Grant-funded project delivery",
      "Citizen & community portals",
    ],
    outcome: "Accessibility in every sprint",
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
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
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

export function PricingMatrix() {
  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-(--shadow-soft) overflow-x-auto">
      <table className="w-full min-w-160 text-sm">
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
              <td className="px-5 py-3.5 font-medium text-(--ink)">{row.name}</td>
              {engagementPlans.map((plan) => {
                const val = row[plan];
                return (
                  <td key={plan} className="px-5 py-3.5 text-center">
                    {val === true ? (
                      <Icon
                        icon="solar:check-circle-bold"
                        className="text-primary text-lg mx-auto"
                      />
                    ) : val === false ? (
                      <span className="text-muted-foreground/40">–</span>
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
