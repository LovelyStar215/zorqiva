import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { PricingMatrix } from "@/components/site/IndustryExplorer";
import { FaqList } from "@/components/site/FaqList";
import { pricingFaqs } from "@/lib/faq-data";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SectionImage } from "@/components/site/SectionImage";
import { siteImages } from "@/lib/site-images";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Engagement Models — Verdian" },
      {
        name: "description",
        content:
          "Flexible engagement models — project-based, monthly retainer, or dedicated squad.",
      },
      { property: "og:title", content: "Engagement — Verdian" },
      { property: "og:description", content: "Three ways to work with our agency." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Project",
    price: "From $25K",
    unit: "fixed scope",
    tag: "MVP & one-off builds",
    features: [
      "Discovery & scoping",
      "UI/UX design",
      "Full-stack development",
      "QA & launch support",
      "30-day post-launch warranty",
      "Documentation handoff",
    ],
    cta: "Get a quote",
    highlight: false,
    ctaVariant: "solid" as const,
  },
  {
    name: "Retainer",
    price: "From $12K",
    unit: "per month",
    tag: "Most popular",
    features: [
      "Everything in Project",
      "Ongoing feature development",
      "Cloud & DevOps included",
      "Monthly strategy sessions",
      "Priority support",
      "Flexible scope each sprint",
    ],
    cta: "Talk to us",
    highlight: true,
    ctaVariant: "accent" as const,
  },
  {
    name: "Dedicated Squad",
    price: "Custom",
    unit: "annual engagement",
    tag: "Enterprise & scale",
    features: [
      "Everything in Retainer",
      "Dedicated cross-functional team",
      "Technical account manager",
      "SLA-backed response times",
      "AI & data engineering",
      "On-site workshops available",
    ],
    cta: "Contact us",
    highlight: false,
    ctaVariant: "outline" as const,
  },
];

function PricingPage() {
  return (
    <Layout>
      <div>
        <PageHero
          eyebrow="Engagement"
          title="Flexible models. Clear expectations."
          lede="Whether you need a focused MVP build, ongoing development, or a dedicated squad — we structure engagements around outcomes, not hours billed."
        />

        <SectionShell className="pt-0!">
          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`h-full rounded-4xl p-8 flex flex-col ${
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
                <div className="mt-auto pt-8">
                  <Link to="/contact" className={`pricing-cta pricing-cta--${p.ctaVariant}`}>
                    {p.cta}
                    <Icon icon="solar:arrow-right-linear" className="text-[1.05rem]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell tone="subtle">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Partnership"
                title="Engagements built on trust."
                lede="Every model starts with discovery, clear scope, and a senior team accountable to outcomes — not billable hours alone."
              />
            </div>
            <SectionImage
              src={siteImages.pricingPartnership}
              alt="Verdian client partnership and engagement"
              aspect="video"
            />
          </div>
        </SectionShell>

        <SectionShell tone="muted">
          <SectionHeader eyebrow="Compare models" title="What's included." align="center" />
          <div>
            <PricingMatrix />
          </div>
        </SectionShell>

        <SectionShell>
          <SectionHeader eyebrow="FAQ" title="Common questions." />
          <div className="max-w-3xl">
            <FaqList items={pricingFaqs} />
          </div>
        </SectionShell>

        <CTABanner
          title="Not sure which model fits?"
          lede="Book a free 30-minute discovery call — we'll recommend the right engagement for your goals and budget."
          primaryLabel="Start a project"
        />
      </div>
    </Layout>
  );
}
