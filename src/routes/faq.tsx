import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { FaqList } from "@/components/site/FaqList";
import { SectionHeader } from "@/components/site/SectionHeader";
import { faqSections } from "@/lib/faq-data";
import { faqPageJsonLd, pageSeo, pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageSeo({
      title: pageTitle("FAQ", "Zorqiva"),
      description:
        "Frequently asked questions about working with Zorqiva – projects, pricing, teams, and policies.",
      path: "/faq",
      ogTitle: pageTitle("FAQ", "Zorqiva"),
      ogDescription:
        "Answers about our agency services, engagement models, and Alaska & Hong Kong offices.",
      jsonLd: faqPageJsonLd(),
    }),
  component: FaqPage,
});

const sectionAnchors = faqSections.map((s) => ({
  title: s.title,
  id: s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
}));

function FaqPage() {
  return (
    <Layout>
      <div>
        <PageHero
          eyebrow="FAQ"
          title="Answers before you reach out."
          lede="Projects, pricing, how we work across Alaska and Hong Kong – and what to expect when you partner with Zorqiva."
        />

        <SectionShell className="pt-0!">
          <nav className="flex flex-wrap justify-center gap-2" aria-label="FAQ sections">
            {sectionAnchors.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground/70 hover:border-primary/40 hover:text-primary transition"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </SectionShell>

        {faqSections.map((section, i) => (
          <SectionShell
            key={section.title}
            id={sectionAnchors[i].id}
            tone={i % 2 === 1 ? "muted" : "default"}
            className={i === 0 ? "pt-0!" : ""}
          >
            <SectionHeader
              eyebrow={section.title}
              title={
                {
                  "Getting started": "Start a project with confidence.",
                  "Engagement & pricing": "Models that fit your roadmap.",
                  "Working with us": "Teams, tools, and time zones.",
                  "Privacy & legal": "Your data and our policies.",
                }[section.title] ?? section.title
              }
              lede={section.lede}
            />
            <div>
              <FaqList items={section.items} />
            </div>
          </SectionShell>
        ))}

        <SectionShell tone="warm">
          <div className="text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-(--ink) mb-4">Policies & legal</h2>
            <p className="text-muted-foreground leading-relaxed">
              Read our{" "}
              <Link to="/privacy" className="text-primary font-semibold hover:underline">
                Privacy Policy
              </Link>
              ,{" "}
              <Link to="/terms" className="text-primary font-semibold hover:underline">
                Terms of Service
              </Link>
              , and{" "}
              <Link to="/cookies" className="text-primary font-semibold hover:underline">
                Cookie Policy
              </Link>
              . For security practices, see our{" "}
              <Link to="/security" className="text-primary font-semibold hover:underline">
                Security page
              </Link>
              .
            </p>
          </div>
        </SectionShell>

        <CTABanner
          title="Didn't find your answer?"
          lede="Send us a message – we respond within one business day."
          primaryLabel="Contact us"
          primaryTo="/contact"
          secondaryLabel="View engagement models"
          secondaryTo="/pricing"
        />
      </div>
    </Layout>
  );
}
