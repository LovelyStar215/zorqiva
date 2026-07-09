import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import { EnterpriseMatrix, ServiceAreas } from "@/components/site/ServiceShowcase";
import { CaseStudiesGrid } from "@/components/site/CaseStudies.tsx";
import { SectionImage } from "@/components/site/SectionImage";
import { siteImages } from "@/lib/site-images";
import { Eyebrow } from "@/components/site/primitives";
import { pageSeo, pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    pageSeo({
      title: pageTitle("Services", "Tek4Real"),
      description:
        "Custom software, mobile apps, cloud & DevOps, UI/UX design, AI, data engineering, QA, consulting, maintenance, and managed IT services.",
      path: "/services",
      ogTitle: pageTitle("Services", "Tek4Real"),
      ogDescription: "Full-stack IT agency services for modern companies.",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <div>
        <PageHero
          eyebrow="Our Services"
          title="Everything you need to build, ship, and scale."
          lede="Twelve service lines across engineering, design, cloud, data, consulting, maintenance, and delivery – one agency, one accountable team, end to end."
        />

        <SectionShell className="pt-0!">
          <ServiceAreas />
          <div className="mt-8">
            <SectionImage
              src={siteImages.servicesOverview}
              alt="Overview of Tek4Real agency services"
              aspect="video"
            />
          </div>
        </SectionShell>

        <SectionShell tone="warm">
          <SectionHeader
            eyebrow="Case studies"
            title="Real outcomes from recent client work."
            lede="Healthcare, fintech, commerce, SaaS, and enterprise – see how we deliver measurable results across industries."
          />
          <CaseStudiesGrid detailed limit={2} />
          <div className="mt-8 text-center">
            <Link to="/case-studies" className="link-arrow text-primary font-semibold text-sm">
              View all case studies{" "}
              <Icon icon="solar:arrow-right-linear" className="link-arrow__icon" />
            </Link>
          </div>
        </SectionShell>

        <SectionShell>
          <SectionHeader
            eyebrow="Why Tek4Real"
            title="Agency quality. Partner accountability."
            lede="The difference between patching freelancers together and working with a dedicated studio."
          />
          <EnterpriseMatrix />
        </SectionShell>

        <SectionShell id="process" className="scroll-mt-28" tone="muted">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>How we build</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-(--ink) tracking-[-0.02em]">
                Modern stack. Production standards.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                TypeScript, React, cloud-native infrastructure, and automated testing – the same
                practices we use on our own products, applied to every client engagement.
              </p>
              <Link
                to="/contact"
                hash="contact-form"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold shadow-(--shadow-soft) hover:opacity-90 transition"
              >
                Discuss your project <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>
            <SectionImage
              src={siteImages.servicesProcess}
              alt="Tek4Real engineering and delivery process"
              aspect="video"
            />
          </div>
        </SectionShell>

        <CTABanner
          title="Ready to start your next project?"
          lede="Tell us what you're building – we'll respond within one business day with a clear plan."
          primaryLabel="Start a project"
          secondaryLabel="View engagement models"
        />
      </div>
    </Layout>
  );
}
