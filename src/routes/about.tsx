import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import { StudioVisual, TeamVisual } from "@/components/site/Visuals";
import { IconBadge, PremiumCard } from "@/components/site/primitives";
import { companyValues } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Verdian IT Agency" },
      {
        name: "description",
        content:
          "Verdian is a premium IT agency. We build custom software for ambitious companies worldwide.",
      },
      { property: "og:title", content: "About Verdian" },
      { property: "og:description", content: "Global IT agency since 2012." },
    ],
  }),
  component: AboutPage,
});

const leadership = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "Former engineering director at two Fortune 500 companies. Founded Verdian to deliver agency work at product-company quality.",
  },
  {
    name: "Marcus Webb",
    role: "CTO & Co-founder",
    bio: "Staff engineer alum from Stripe and Snowflake. Leads architecture and engineering standards across all client engagements.",
  },
  {
    name: "Priya Nair",
    role: "Head of Design",
    bio: "Led design at agencies and product companies. Obsessed with interfaces that are beautiful and ship on time.",
  },
  {
    name: "David Okonkwo",
    role: "Head of Delivery",
    bio: "Scaled delivery operations across 180+ client projects. Ensures every engagement ships on scope, on time, on budget.",
  },
];

const timeline = [
  {
    year: "2012",
    title: "Verdian founded",
    desc: "Sarah launches Verdian as a boutique dev shop — three engineers, one mission: build software that lasts.",
  },
  {
    year: "2016",
    title: "Design & cloud practices",
    desc: "Expand into UI/UX and DevOps. Strengthen delivery from our Texas headquarters.",
  },
  {
    year: "2020",
    title: "Enterprise & regulated industries",
    desc: "SOC 2 certification, HIPAA experience, and first Fortune 500 retainer clients.",
  },
  {
    year: "2024",
    title: "180+ projects delivered",
    desc: "Hong Kong headquarters opens. AI & data practice launches. Team grows to 85 across two global offices.",
  },
];

function AboutPage() {
  return (
    <Layout>
      <div>
        <PageHero
          eyebrow="About"
          title="Built for craft. Trusted worldwide."
          lede="We're a premium IT agency — engineers, designers, and delivery leads who treat every client project with the care of an in-house product team."
        />

        <SectionShell className="!pt-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-lift)]">
              <StudioVisual />
            </div>
            <div>
              <SectionHeader
                eyebrow="Our studio"
                title="A global team, one standard."
                lede="We operate from two headquarters — Texas and Hong Kong — with the same engineering standards, design systems, and client rituals in every office."
              />
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { v: "2012", l: "Founded" },
                  { v: "85+", l: "Team" },
                  { v: "2", l: "Headquarters" },
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
          <SectionHeader eyebrow="Our story" title="From boutique shop to global agency." />
          <div className="relative max-w-3xl">
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
          <SectionHeader eyebrow="What we believe" title="Principles behind every project." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 card-grid">
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
          <SectionHeader eyebrow="Leadership" title="The team behind the work." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 card-grid">
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
            <div>
              <SectionHeader
                eyebrow="The team"
                title="Builders who care about craft."
                lede="Our team has shipped products at category-defining companies and agencies. That experience shows in every line of code and every pixel we deliver."
              />
              <Link
                to="/careers"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold hover:opacity-90 transition"
              >
                View open roles <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)]">
              <TeamVisual />
            </div>
          </div>
        </SectionShell>

        <CTABanner
          title="Ready to work together?"
          lede="Tell us about your project — we'll respond within one business day."
          primaryLabel="Start a project"
        />
      </div>
    </Layout>
  );
}
