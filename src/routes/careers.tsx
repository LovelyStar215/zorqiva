import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import { TeamVisual } from "@/components/site/Visuals";
import { IconBadge, PremiumCard } from "@/components/site/primitives";
import { benefits, companyValues, offices, openRoles, type JobDepartment } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Verdian" },
      {
        name: "description",
        content:
          "Join Verdian in Austin, Texas. Build the native CRM & ERP platform for modern operators.",
      },
      { property: "og:title", content: "Careers at Verdian" },
      { property: "og:description", content: "Build the operating system for modern companies." },
    ],
  }),
  component: CareersPage,
});

const departments: Array<JobDepartment | "All"> = [
  "All",
  "Engineering",
  "Product",
  "Design",
  "Sales",
  "Operations",
];

function CareersPage() {
  const scope = useGsapReveal();
  const [dept, setDept] = useState<JobDepartment | "All">("All");
  const filtered = useMemo(
    () => (dept === "All" ? openRoles : openRoles.filter((j) => j.department === dept)),
    [dept],
  );

  return (
    <Layout>
      <div ref={scope}>
        <PageHero
          eyebrow="Careers"
          title="Build the operating system for modern companies."
          lede="We're a team of operators, engineers, and designers headquartered in Austin — solving the hardest problems in revenue, finance, and operations."
        />

        <SectionShell className="!pt-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal>
              <SectionHeader
                eyebrow="Life at Verdian"
                title="Small enough to care. Ambitious enough to matter."
              />
              <p className="text-lg text-muted-foreground leading-relaxed -mt-4">
                You'll work alongside former CFOs, staff engineers from category-defining companies,
                and designers who treat enterprise software as craft. We ship weekly, debate openly,
                and measure success by customer outcomes — not slide decks.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Weekly demos",
                  "No-meeting Wednesdays",
                  "Customer-first roadmap",
                  "Top-tier compensation",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div
              data-reveal
              className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)]"
            >
              <TeamVisual />
            </div>
          </div>
        </SectionShell>

        <SectionShell tone="warm">
          <SectionHeader
            eyebrow="Benefits"
            title="Compensation and support that match the mission."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-reveal-stagger>
            {benefits.map((b) => (
              <PremiumCard key={b.title}>
                <IconBadge icon={b.icon} className="mb-4" />
                <div className="font-serif text-xl text-[color:var(--ink)]">{b.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.desc}</p>
              </PremiumCard>
            ))}
          </div>
        </SectionShell>

        <SectionShell>
          <SectionHeader eyebrow="Our values" title="How we work together." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-reveal-stagger>
            {companyValues.map((v) => (
              <PremiumCard key={v.title}>
                <IconBadge icon={v.icon} className="mb-4 !bg-accent/15 !text-accent" />
                <div className="font-serif text-xl text-[color:var(--ink)]">{v.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
              </PremiumCard>
            ))}
          </div>
        </SectionShell>

        <section className="section-band-dark py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-14" data-reveal>
              <div className="eyebrow mb-5">Where we work</div>
              <h2 className="font-serif text-4xl md:text-[2.75rem] leading-[1.08] tracking-[-0.02em] text-background">
                Four hubs. One platform.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-4" data-reveal-stagger>
              {offices.map((o) => (
                <div
                  key={o.city}
                  className="rounded-2xl border border-background/10 bg-background/5 p-6 hover:bg-background/10 transition"
                >
                  <div className="font-serif text-2xl">{o.city}</div>
                  <div className="text-sm text-accent mt-1">{o.role}</div>
                  <p className="text-sm text-background/60 mt-3">{o.address}</p>
                  <p className="text-xs text-background/40 mt-1">{o.country}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionShell id="open-roles">
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
            data-reveal
          >
            <div>
              <div className="eyebrow mb-5">Open roles</div>
              <h2 className="font-serif text-4xl md:text-[2.75rem] leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)]">
                {filtered.length} positions open
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {departments.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDept(d)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    dept === d
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-foreground/70 hover:border-primary/40"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4" data-reveal-stagger>
            {filtered.map((job) => (
              <article
                key={job.id}
                className="group card-premium !p-6 md:!p-8 hover:!border-primary/40 hover:shadow-[var(--shadow-soft)] transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                        {job.department}
                      </span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{job.level}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-[color:var(--ink)] group-hover:text-primary transition">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                      {job.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Icon icon="solar:map-point-linear" /> {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Icon icon="solar:clock-circle-linear" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
                  >
                    Apply <Icon icon="solar:arrow-right-linear" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground" data-reveal>
            Don't see a fit?{" "}
            <a
              href="mailto:careers@verdian.io"
              className="text-primary font-semibold hover:underline"
            >
              careers@verdian.io
            </a>
          </p>
        </SectionShell>

        <CTABanner
          title="Ready to build something enduring?"
          lede="Talk to our team about how your experience maps to what we're building next."
          primaryLabel="Get in touch"
          secondaryLabel="About Verdian"
          secondaryTo="/about"
        />
      </div>
    </Layout>
  );
}
