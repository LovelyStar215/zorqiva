import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { CTABanner } from "@/components/site/CTABanner";
import { JobApplicationForm } from "@/components/site/JobApplicationForm";
import { SectionHeader } from "@/components/site/SectionHeader";
import { TeamVisual } from "@/components/site/Visuals";
import { IconBadge, PremiumCard } from "@/components/site/primitives";
import { benefits, companyValues, offices, openRoles, type JobDepartment } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Verdian IT Agency" },
      {
        name: "description",
        content:
          "Join Verdian — build software, cloud systems, and digital products for ambitious clients worldwide.",
      },
      { property: "og:title", content: "Careers at Verdian" },
      { property: "og:description", content: "Join our global IT agency." },
    ],
  }),
  component: CareersPage,
});

const departments: Array<JobDepartment | "All"> = [
  "All",
  "Engineering",
  "Design",
  "Delivery",
  "Sales",
  "Operations",
];

function CareersPage() {
  const scope = useGsapReveal();
  const [dept, setDept] = useState<JobDepartment | "All">("All");
  const [selectedRoleId, setSelectedRoleId] = useState<string | undefined>();
  const filtered = useMemo(
    () => (dept === "All" ? openRoles : openRoles.filter((j) => j.department === dept)),
    [dept],
  );

  const scrollToApply = (roleId?: string) => {
    if (roleId) setSelectedRoleId(roleId);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      <div ref={scope}>
        <PageHero
          eyebrow="Careers"
          title="Build remarkable things for remarkable clients."
          lede="We're engineers, designers, and delivery leads shipping software that matters for companies around the world."
        />

        <SectionShell className="pt-0!">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal>
              <SectionHeader
                eyebrow="Life at Verdian"
                title="Small studio. Big impact."
                lede="You'll work on diverse client projects across healthcare, fintech, and SaaS — with the craft of a product company and the variety of agency life. We ship weekly, debate openly, and measure success by client outcomes."
              />
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
              className="rounded-3xl overflow-hidden border border-border shadow-(--shadow-soft)"
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
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch card-grid"
            data-reveal-stagger
          >
            {benefits.map((b) => (
              <PremiumCard key={b.title}>
                <IconBadge icon={b.icon} className="mb-4" />
                <div className="font-serif text-xl text-(--ink)">{b.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                  {b.desc}
                </p>
              </PremiumCard>
            ))}
          </div>
        </SectionShell>

        <SectionShell>
          <SectionHeader eyebrow="Our values" title="How we work together." />
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch card-grid"
            data-reveal-stagger
          >
            {companyValues.map((v) => (
              <PremiumCard key={v.title}>
                <IconBadge icon={v.icon} className="mb-4 bg-accent/15! text-accent!" />
                <div className="font-serif text-xl text-(--ink)">{v.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                  {v.desc}
                </p>
              </PremiumCard>
            ))}
          </div>
        </SectionShell>

        <SectionShell dark className="section-dark">
          <SectionHeader eyebrow="Where we work" title="Two headquarters. One team." dark />
          <div className="grid sm:grid-cols-2 gap-5 card-grid max-w-3xl" data-reveal-stagger>
            {offices.map((o) => (
              <div
                key={o.city}
                className="rounded-2xl border border-background/10 bg-background/5 p-6 hover:bg-background/10 transition h-full flex flex-col"
              >
                <div className="font-serif text-2xl">{o.city}</div>
                <div className="text-sm text-accent mt-1">{o.role}</div>
                <p className="text-sm text-background/60 mt-3 flex-1">{o.address}</p>
                <p className="text-xs text-background/40 mt-1">{o.country}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="open-roles">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="eyebrow mb-7">Open roles</div>
              <h2 className="font-serif text-4xl md:text-[2.75rem] leading-[1.08] tracking-[-0.02em] text-(--ink)">
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
          <div className="space-y-4">
            {filtered.map((job) => (
              <article
                key={job.id}
                className="group card-premium p-6! md:p-8! hover:border-primary/40! hover:shadow-(--shadow-soft) transition"
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
                    <h3 className="font-serif text-2xl text-(--ink) group-hover:text-primary transition">
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
                  <button
                    type="button"
                    onClick={() => scrollToApply(job.id)}
                    className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
                  >
                    Apply <Icon icon="solar:arrow-right-linear" />
                  </button>
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

        <SectionShell id="apply" tone="muted" className="scroll-mt-28">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 xl:gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Apply"
                title="Tell us about yourself."
                lede="Whether you're applying for a specific role or exploring opportunities, we'd love to hear from you. Share your background, links, and what kind of work excites you."
              />
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: "solar:clock-circle-bold",
                    title: "Response time",
                    desc: "Our talent team replies within five business days.",
                  },
                  {
                    icon: "solar:users-group-rounded-bold",
                    title: "Interview process",
                    desc: "Intro call, skills conversation, and team meet — typically two weeks.",
                  },
                  {
                    icon: "solar:global-bold",
                    title: "Locations",
                    desc: "Texas, Hong Kong, and remote roles across the US.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <Icon icon={item.icon} className="text-primary text-xl shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-(--ink)">{item.title}</div>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-4xl border border-border bg-card p-8 md:p-10 shadow-(--shadow-lift) ring-1 ring-primary/5">
              <JobApplicationForm selectedRoleId={selectedRoleId} />
            </div>
          </div>
        </SectionShell>

        <CTABanner
          title="Ready to join the studio?"
          lede="Tell us about your experience and what kind of work excites you."
          primaryLabel="Submit application"
          primaryTo="/careers"
          primaryHash="apply"
          secondaryLabel="About Verdian"
          secondaryTo="/about"
        />
      </div>
    </Layout>
  );
}
