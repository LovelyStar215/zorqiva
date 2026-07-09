import { Icon } from "@iconify/react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import { IndustryExplorer } from "@/components/site/IndustryExplorer";
import { IconBadge, PremiumCard } from "@/components/site/primitives";
import { SectionImage } from "@/components/site/SectionImage";
import { siteImages } from "@/lib/site-images";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Industries — Verdian IT Agency" },
      {
        name: "description",
        content:
          "Verdian serves healthcare, fintech, retail, SaaS, enterprise, and government clients.",
      },
      { property: "og:title", content: "Industries — Verdian" },
      {
        property: "og:description",
        content: "Industry expertise across regulated and high-growth sectors.",
      },
    ],
  }),
  component: SolutionsPage,
});

const roles = [
  {
    t: "Founders & CEOs",
    i: "solar:crown-bold",
    p: [
      "MVP to market in weeks, not months",
      "Technical co-founder-level guidance",
      "Investor-ready demos and roadmaps",
    ],
  },
  {
    t: "CTOs & VPs Engineering",
    i: "solar:code-bold",
    p: [
      "Augment your team without hiring delays",
      "Architecture reviews and code audits",
      "Cloud migration and DevOps setup",
    ],
  },
  {
    t: "Product Leaders",
    i: "solar:palette-bold",
    p: [
      "UX research and design systems",
      "Rapid prototyping and user testing",
      "Design-to-development handoff",
    ],
  },
  {
    t: "Operations Leaders",
    i: "solar:settings-bold",
    p: [
      "Internal tools and workflow automation",
      "Legacy system modernization",
      "Managed services and monitoring",
    ],
  },
];

function SolutionsPage() {
  return (
    <Layout>
      <div>
        <PageHero
          eyebrow="Industries"
          title="Deep expertise across sectors."
          lede="We've delivered projects for healthcare, fintech, retail, SaaS, and enterprise clients — with compliance and security built in from day one."
        />

        <SectionShell className="!pt-0">
          <SectionHeader
            eyebrow="By industry"
            title="Select your sector. See what we deliver."
            lede="Every industry has unique requirements — we bring domain experience and technical depth to each engagement."
          />
          <IndustryExplorer />
          <div className="mt-8">
            <SectionImage
              src={siteImages.solutionsIndustries}
              alt="Verdian client work across industries"
              aspect="video"
            />
          </div>
        </SectionShell>

        <SectionShell tone="subtle">
          <SectionHeader eyebrow="By stakeholder" title="Built for every decision-maker." />
          <div className="grid sm:grid-cols-2 gap-4 card-grid">
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
          title="Not sure where to start?"
          lede="Book a free discovery call — we'll map the right services and team to your industry and goals."
          primaryLabel="Start a project"
        />
      </div>
    </Layout>
  );
}
