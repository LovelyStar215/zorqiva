import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import {
  AdvancedCapabilities,
  CodePreview,
  EnterpriseMatrix,
  PlatformExplorer,
} from "@/components/site/PlatformExplorer";
import { Eyebrow } from "@/components/site/primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Verdian IT Agency" },
      {
        name: "description",
        content:
          "Custom software development, cloud & DevOps, UI/UX design, AI integration, and managed IT services.",
      },
      { property: "og:title", content: "Services — Verdian" },
      {
        property: "og:description",
        content: "Full-stack IT agency services for modern companies.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const scope = useGsapReveal();
  return (
    <Layout>
      <div ref={scope}>
        <PageHero
          eyebrow="Our Services"
          title="Everything you need to build, ship, and scale."
          lede="From custom software and cloud infrastructure to design and AI — one agency, one accountable team, end to end."
        />

        <SectionShell className="!pt-0">
          <div data-reveal>
            <PlatformExplorer />
          </div>
        </SectionShell>

        <SectionShell tone="subtle">
          <SectionHeader
            eyebrow="Capabilities"
            title="Senior talent across every discipline."
            lede="Cross-functional squads with engineers, designers, and delivery leads — no handoff gaps."
          />
          <div data-reveal-stagger>
            <AdvancedCapabilities />
          </div>
        </SectionShell>

        <SectionShell>
          <SectionHeader
            eyebrow="Why Verdian"
            title="Agency quality. Partner accountability."
            lede="The difference between patching freelancers together and working with a dedicated studio."
          />
          <div data-reveal>
            <EnterpriseMatrix />
          </div>
        </SectionShell>

        <SectionShell id="process" className="scroll-mt-28" tone="muted">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal>
              <Eyebrow>How we build</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-[color:var(--ink)] tracking-[-0.02em]">
                Modern stack. Production standards.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                TypeScript, React, cloud-native infrastructure, and automated testing — the same
                practices we use on our own products, applied to every client engagement.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold shadow-[var(--shadow-soft)] hover:opacity-90 transition"
              >
                Discuss your project <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>
            <div data-reveal>
              <CodePreview />
            </div>
          </div>
        </SectionShell>

        <CTABanner
          title="Ready to start your next project?"
          lede="Tell us what you're building — we'll respond within one business day with a clear plan."
          primaryLabel="Start a project"
          secondaryLabel="View engagement models"
        />
      </div>
    </Layout>
  );
}
