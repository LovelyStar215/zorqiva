import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import { IndustryExplorer } from "@/components/site/IndustryExplorer";
import { IconBadge, PremiumCard } from "@/components/site/primitives";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Verdian" },
      {
        name: "description",
        content:
          "Verdian solutions by industry and role — from SaaS finance to multi-entity manufacturing.",
      },
      { property: "og:title", content: "Solutions — Verdian" },
      { property: "og:description", content: "Purpose-built configurations for every industry." },
    ],
  }),
  component: SolutionsPage,
});

const roles = [
  {
    t: "Founders & CEOs",
    i: "solar:crown-bold",
    p: [
      "Board-ready reporting in one click",
      "Real-time cash and pipeline in the same view",
      "Scale from 10 to 10,000 without a re-platform",
    ],
  },
  {
    t: "CFOs",
    i: "solar:chart-square-bold",
    p: [
      "Continuous close — no more month-end sprints",
      "Multi-entity consolidations native",
      "Audit-grade trail on every transaction",
    ],
  },
  {
    t: "Revenue Leaders",
    i: "solar:graph-new-up-bold",
    p: [
      "Pipeline that reconciles to bookings",
      "AI forecasting with signal-based accuracy",
      "Territory and comp fully automated",
    ],
  },
  {
    t: "Ops Leaders",
    i: "solar:box-bold",
    p: [
      "Inventory, procurement, and fulfillment in sync",
      "Workflow Studio for any process",
      "One place for every operational metric",
    ],
  },
];

function SolutionsPage() {
  const scope = useGsapReveal();
  return (
    <Layout>
      <div ref={scope}>
        <PageHero
          eyebrow="Solutions"
          title="Configured for how your industry actually runs."
          lede="Industry blueprints and role-based workspaces that get you live in weeks — not quarters."
        />

        <SectionShell className="!pt-0">
          <SectionHeader
            eyebrow="By industry"
            title="Pick your vertical. See what's included."
            lede="Interactive blueprints with pre-built workflows, reports, and compliance packs."
          />
          <div data-reveal>
            <IndustryExplorer />
          </div>
        </SectionShell>

        <SectionShell tone="subtle">
          <SectionHeader eyebrow="By role" title="One platform. Every leader's view." />
          <div className="grid sm:grid-cols-2 gap-4" data-reveal-stagger>
            {roles.map((r) => (
              <PremiumCard key={r.t}>
                <IconBadge icon={r.i} className="mb-4" />
                <div className="font-serif text-xl text-[color:var(--ink)] mb-4">{r.t}</div>
                <ul className="space-y-2.5">
                  {r.p.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-foreground/80">
                      <Icon
                        icon="solar:check-circle-bold"
                        className="text-primary shrink-0 mt-0.5"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </PremiumCard>
            ))}
          </div>
        </SectionShell>

        <CTABanner
          title="Not sure which configuration fits?"
          lede="Our field team will map Verdian to your business in a 30-minute working session."
          primaryLabel="Start with a demo"
        />
      </div>
    </Layout>
  );
}
