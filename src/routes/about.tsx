import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AustinVisual, TeamVisual } from "@/components/site/Visuals";
import { IconBadge, PremiumCard } from "@/components/site/primitives";
import { companyValues } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Verdian" },
      {
        name: "description",
        content:
          "Verdian is headquartered in Austin, Texas. We build the native CRM & ERP for modern operators.",
      },
      { property: "og:title", content: "About Verdian" },
      { property: "og:description", content: "Built in Austin, Texas." },
    ],
  }),
  component: AboutPage,
});

const leadership = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Former VP Finance at two public SaaS companies. Built Verdian after living the reconciliation nightmare.",
  },
  {
    name: "Marcus Webb",
    role: "CTO & Co-founder",
    bio: "Staff engineer alum from Stripe and Snowflake. Architect of Verdian's unified ledger.",
  },
  {
    name: "Priya Nair",
    role: "Chief Product Officer",
    bio: "Led product at NetSuite and Workday. Obsessed with operator-grade UX.",
  },
  {
    name: "David Okonkwo",
    role: "Chief Revenue Officer",
    bio: "Scaled enterprise sales from $10M to $200M ARR across three category leaders.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Founded in Austin",
    desc: "Sarah and Marcus leave their roles to build the unified CRM & ERP they wished existed.",
  },
  {
    year: "2023",
    title: "Series A & first 50 customers",
    desc: "Launch Growth plan, ship Verdian AI, and expand to New York and London hubs.",
  },
  {
    year: "2024",
    title: "Enterprise & multi-entity",
    desc: "SOC 2 Type II, HIPAA pack, and native consolidation for regulated industries.",
  },
  {
    year: "2025",
    title: "1,200+ companies",
    desc: "Singapore hub opens. Platform processes $48B in annual transaction volume.",
  },
];

function AboutPage() {
  const scope = useGsapReveal();
  return (
    <Layout>
      <div ref={scope}>
        <PageHero
          eyebrow="About"
          title="Built in Austin. Made for operators."
          lede="We're a team of engineers, designers, and former CFOs building the operating system we always wished we had."
        />

        <SectionShell className="!pt-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-lift)]"
              data-reveal
            >
              <AustinVisual />
            </div>
            <div data-reveal>
              <SectionHeader eyebrow="Our home" title="500 W 2nd Street, Austin, Texas" />
              <p className="text-lg text-muted-foreground leading-relaxed -mt-4">
                Our headquarters sits five blocks from the Colorado River in downtown Austin. It's
                where our founding team writes code, meets customers, and prototypes what comes
                next. We also operate hubs in New York, London, and Singapore.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { v: "2022", l: "Founded" },
                  { v: "180+", l: "Team" },
                  { v: "4", l: "Offices" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-serif text-3xl text-primary">{s.v}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell tone="warm">
          <SectionHeader eyebrow="Our story" title="From frustration to platform." />
          <div className="relative max-w-3xl" data-reveal-stagger>
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" aria-hidden />
            <div className="space-y-8">
              {timeline.map((t) => (
                <div key={t.year} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-primary bg-background grid place-items-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {t.year}
                  </div>
                  <div className="font-serif text-xl text-[color:var(--ink)] mt-1">{t.title}</div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell>
          <SectionHeader eyebrow="What we believe" title="Principles that guide every ship." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-reveal-stagger>
            {companyValues.map((v) => (
              <PremiumCard key={v.title}>
                <IconBadge icon={v.icon} className="mb-4" />
                <div className="font-serif text-xl text-[color:var(--ink)]">{v.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
              </PremiumCard>
            ))}
          </div>
        </SectionShell>

        <SectionShell tone="muted">
          <SectionHeader eyebrow="Leadership" title="Operators who've been in the room." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-reveal-stagger>
            {leadership.map((l) => (
              <PremiumCard key={l.name} className="!p-6">
                <div className="w-14 h-14 rounded-full bg-primary/15 text-primary grid place-items-center font-serif text-xl mb-4">
                  {l.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="font-serif text-lg text-[color:var(--ink)]">{l.name}</div>
                <div className="text-xs text-accent font-semibold mt-1">{l.role}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{l.bio}</p>
              </PremiumCard>
            ))}
          </div>
        </SectionShell>

        <SectionShell>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal>
              <SectionHeader eyebrow="The team" title="Operators building for operators." />
              <p className="text-lg text-muted-foreground leading-relaxed -mt-4">
                Our leadership has scaled companies from seed through IPO across SaaS, life
                sciences, and commerce. That perspective is in every screen we ship.
              </p>
              <Link
                to="/careers"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold hover:opacity-90 transition"
              >
                Join us in Austin <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>
            <div
              className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)]"
              data-reveal
            >
              <TeamVisual />
            </div>
          </div>
        </SectionShell>

        <CTABanner
          title="See the platform in action."
          lede="Book a 30-minute walkthrough with our Austin team."
          primaryLabel="Book a demo"
        />
      </div>
    </Layout>
  );
}
