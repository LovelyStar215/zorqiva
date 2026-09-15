import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/site/Icon";
import { Layout, SectionShell } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { EnterpriseMatrix, ServiceAreas } from "@/components/site/ServiceShowcase";
import { SectionImage } from "@/components/site/SectionImage";
import { siteImages } from "@/lib/site-images";
import { Eyebrow, PrimaryButton, SecondaryButton } from "@/components/site/primitives";
import { trustBadges } from "@/lib/site-data";
import { CaseStudiesGrid } from "@/components/site/CaseStudies";
import { pageSeo, pageTitle, professionalServiceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: pageTitle("Zorqiva", "Technology Consulting & Software Engineering"),
      description:
        "Zorqiva is a technology consulting and software engineering company – custom software, cloud, design, and AI for ambitious companies.",
      path: "/",
      ogTitle: pageTitle("Zorqiva", "Technology Consulting"),
      ogDescription: "Build. Ship. Scale. With a partner you can trust.",
      jsonLd: professionalServiceJsonLd(),
    }),
  component: Home,
});

const metrics = [
  { v: "8", l: "Published case studies" },
  { v: "10+", l: "Senior team" },
  { v: "2025", l: "Founded" },
  { v: "<2 wks", l: "Avg. kickoff time" },
];

function Home() {
  return (
    <Layout>
      <div>
        <section className="relative page-hero hero-viewport">
          <div className="absolute inset-0 premium-grid opacity-50" />
          <div className="absolute inset-0 grain" />
          <div
            className="absolute inset-0 hero-mesh"
            style={{ background: "var(--gradient-mesh)" }}
          />
          <div className="hero-viewport__content relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0d1a26]/80 backdrop-blur-sm pl-1 pr-4 py-1 text-xs font-medium text-foreground mb-10 shadow-(--shadow-soft)">
              <span className="rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold">
                Technology Consulting
              </span>
              Alaska · Hong Kong
            </div>
            <h1 className="font-hero text-[clamp(2.5rem,7vw,4.75rem)] leading-[0.98] text-(--ink) max-w-4xl mx-auto">
              <span className="block">We build digital products</span>
              <span className="block">
                that <span className="text-white">move businesses forward.</span>
              </span>
            </h1>
            <p className="mt-7 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              Custom software, cloud infrastructure, UI/UX design, and AI – delivered by a senior
              cross-functional team that treats your project like our own.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton to="/contact">
                Start a project <Icon icon="solar:arrow-right-linear" />
              </PrimaryButton>
              <SecondaryButton to="/services">
                Our services <Icon icon="solar:layers-bold" />
              </SecondaryButton>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 max-w-3xl mx-auto">
              {trustBadges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium"
                >
                  <Icon icon="solar:verified-check-bold" className="text-primary" /> {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        <SectionShell className="pt-0!">
          <div className="text-center mb-10">
            <Eyebrow className="justify-center">What we do</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-(--ink) tracking-[-0.02em]">
              Twelve service lines. One accountable team.
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm">
              Engineering, mobile, cloud, design, AI, data, QA, consulting, maintenance, security,
              and managed support – explore our services and see how we deliver.
            </p>
          </div>
          <ServiceAreas />
          <div className="mt-8">
            <SectionImage
              src={siteImages.homeServices}
              alt="Zorqiva service offerings on the homepage"
              aspect="video"
            />
          </div>
        </SectionShell>

        <LogoMarquee />

        <section className="relative overflow-hidden section-dark-flat section-shell">
          <div className="absolute inset-0 premium-grid opacity-[0.06] pointer-events-none" />
          <div className="section-inner grid grid-cols-2 lg:grid-cols-4 gap-8 items-center card-grid">
            {metrics.map((m) => (
              <div key={m.l} className="text-center h-full">
                <div className="font-serif text-4xl lg:text-5xl text-gradient tracking-tight">
                  {m.v}
                </div>
                <div className="text-[10px] mt-2 text-background/40 uppercase tracking-[0.2em] font-medium">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </section>

        <SectionShell>
          <SectionHeader
            eyebrow="Why Zorqiva"
            title="Stop stitching freelancers together."
            lede="Side-by-side comparison of in-house hiring and DIY vs. working with a dedicated agency squad."
          />
          <EnterpriseMatrix />
        </SectionShell>

        <SectionShell>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>How we build</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-(--ink) tracking-[-0.02em] leading-tight">
                Modern stack. Battle-tested process.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                TypeScript, React, cloud-native infrastructure, and automated CI/CD – the same
                practices we rely on for our own products, applied to every client project.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Agile sprints with weekly demos",
                  "Design-to-dev handoff in Figma",
                  "Automated testing & code review",
                  "Post-launch support retainers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <Icon icon="solar:check-circle-bold" className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="link-arrow mt-8 text-primary font-semibold text-sm">
                Explore our services{" "}
                <Icon icon="solar:arrow-right-linear" className="link-arrow__icon" />
              </Link>
            </div>
            <SectionImage
              src={siteImages.homeDevelopment}
              alt="Zorqiva development process on the homepage"
              aspect="video"
            />
          </div>
        </SectionShell>

        <SectionShell tone="muted">
          <SectionHeader
            eyebrow="Client outcomes"
            title="Results that speak for themselves."
            align="center"
          />
          <CaseStudiesGrid limit={3} />
          <div className="mt-8 text-center">
            <Link to="/case-studies" className="link-arrow text-primary font-semibold text-sm">
              View all case studies{" "}
              <Icon icon="solar:arrow-right-linear" className="link-arrow__icon" />
            </Link>
          </div>
        </SectionShell>

        <CTABanner
          title="Let's build something great together."
          lede="Tell us about your project – we'll respond within one business day with a clear plan and timeline."
          primaryLabel="Start a project"
          secondaryLabel="View engagement models"
        />
      </div>
    </Layout>
  );
}
