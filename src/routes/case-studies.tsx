import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/site/Icon";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CaseStudiesGrid } from "@/components/site/CaseStudies";
import { breadcrumbJsonLd, pageSeo, pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/case-studies")({
  head: () =>
    pageSeo({
      title: pageTitle("Case Studies", "Zorqiva"),
      description:
        "Client success stories across healthcare, fintech, commerce, SaaS, and enterprise – measurable outcomes from Zorqiva engagements.",
      path: "/case-studies",
      ogTitle: pageTitle("Case Studies", "Zorqiva"),
      ogDescription: "Real outcomes from recent client work.",
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Case Studies", path: "/case-studies" },
      ]),
    }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <Layout>
      <div>
        <PageHero
          eyebrow="Case studies"
          title="Outcomes our clients can measure."
          lede="From patient portals to fleet apps and data pipelines – see how Zorqiva delivers across industries."
        />

        <SectionShell className="pt-0!">
          <SectionHeader
            eyebrow="Client work"
            title="Recent engagements"
            lede="Each project pairs senior engineering, design, and delivery talent with clear business goals."
          />
          <CaseStudiesGrid detailed />
        </SectionShell>

        <SectionShell tone="subtle">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl text-(--ink)">Ready for results like these?</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Tell us what you are building – we will respond within one business day with a clear
              plan and timeline.
            </p>
            <Link
              to="/contact"
              hash="contact-form"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold shadow-(--shadow-soft) hover:opacity-90 transition"
            >
              Start a project <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </SectionShell>

        <CTABanner
          title="Let's build your next success story."
          lede="Whether you need an MVP, a modernization, or a dedicated squad – we bring the same standards to every engagement."
          primaryLabel="Start a project"
          secondaryLabel="View our services"
          secondaryTo="/services"
        />
      </div>
    </Layout>
  );
}
