import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { CTABanner } from "@/components/site/CTABanner";
import { FaqList } from "@/components/site/FaqList";
import { faqSections } from "@/lib/faq-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Verdian IT Agency" },
      {
        name: "description",
        content: "Frequently asked questions about working with Verdian — projects, pricing, privacy, and more.",
      },
      { property: "og:title", content: "FAQ — Verdian" },
      { property: "og:description", content: "Answers to common questions about our agency services." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const scope = useGsapReveal();

  return (
    <Layout>
      <div ref={scope}>
        <PageHero
          eyebrow="FAQ"
          title="Answers before you reach out."
          lede="Everything you need to know about starting a project, engagement models, and how we work."
        />

        {faqSections.map((section, i) => (
          <SectionShell key={section.title} tone={i % 2 === 1 ? "muted" : "default"}>
            <h2
              className="font-serif text-3xl text-[color:var(--ink)] tracking-[-0.02em] mb-8"
              data-reveal
            >
              {section.title}
            </h2>
            <div className="max-w-3xl" data-reveal-stagger>
              <FaqList items={section.items} />
            </div>
          </SectionShell>
        ))}

        <SectionShell tone="warm">
          <div className="max-w-3xl mx-auto text-center" data-reveal>
            <p className="text-muted-foreground leading-relaxed">
              Still have questions? Read our{" "}
              <Link to="/privacy" className="text-primary font-semibold hover:underline">
                Privacy Policy
              </Link>
              ,{" "}
              <Link to="/terms" className="text-primary font-semibold hover:underline">
                Terms of Service
              </Link>
              , or{" "}
              <Link to="/cookies" className="text-primary font-semibold hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
        </SectionShell>

        <CTABanner
          title="Didn't find your answer?"
          lede="Send us a message — we respond within one business day."
          primaryLabel="Contact us"
          primaryTo="/contact"
        />
      </div>
    </Layout>
  );
}
