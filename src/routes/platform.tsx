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

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — Verdian" },
      {
        name: "description",
        content:
          "Explore the Verdian platform: unified CRM, ERP, finance, workflows, and AI on one intelligent graph.",
      },
      { property: "og:title", content: "Verdian Platform" },
      { property: "og:description", content: "The unified CRM + ERP graph for modern operators." },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  const scope = useGsapReveal();
  return (
    <Layout>
      <div ref={scope}>
        <PageHero
          eyebrow="The Platform"
          title="One graph. Every discipline. Zero seams."
          lede="CRM, ERP, finance, inventory, workflows, and AI — native modules on a single intelligent ledger with shared permissions and real-time sync."
        />

        <SectionShell className="!pt-0">
          <div data-reveal>
            <PlatformExplorer />
          </div>
        </SectionShell>

        <SectionShell tone="subtle">
          <SectionHeader
            eyebrow="Architecture"
            title="Enterprise-grade by design."
            lede="Sub-50ms queries, event-driven sync, and audit-grade governance — built for regulated industries."
          />
          <div data-reveal-stagger>
            <AdvancedCapabilities />
          </div>
        </SectionShell>

        <SectionShell>
          <SectionHeader
            eyebrow="Comparison"
            title="Why teams leave legacy stacks."
            lede="The difference between stitching tools together and running on one platform."
          />
          <div data-reveal>
            <EnterpriseMatrix />
          </div>
        </SectionShell>

        <SectionShell id="tour" className="scroll-mt-28" tone="muted">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal>
              <Eyebrow>Developer platform</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-[color:var(--ink)] tracking-[-0.02em]">
                Programmatic access to everything.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Query the unified graph, subscribe to webhook events, and deploy AI agents — all
                through one typed API surface.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold shadow-[var(--shadow-soft)] hover:opacity-90 transition"
              >
                Talk to an engineer <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>
            <div data-reveal>
              <CodePreview />
            </div>
          </div>
        </SectionShell>

        <CTABanner
          title="See how Verdian maps to your stack."
          lede="Our field engineers configure a live environment for your industry in 30 minutes."
          primaryLabel="Book a demo"
          secondaryLabel="View pricing"
        />
      </div>
    </Layout>
  );
}
