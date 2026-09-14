import { Link, createFileRoute } from "@tanstack/react-router";
import { Icon } from "@/components/site/Icon";
import { useMemo, useState } from "react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SectionImage } from "@/components/site/SectionImage";
import { siteImages } from "@/lib/site-images";
import { IconBadge, PremiumCard } from "@/components/site/primitives";
import { benefits, companyValues, openRoles, type JobDepartment } from "@/lib/site-data";
import { offices } from "@/lib/brand";
import { brand } from "@/lib/brand";
import { pageSeo, pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  head: () =>
    pageSeo({
      title: pageTitle("Careers", "Zorqiva"),
      description:
        "Join Zorqiva – build software, cloud systems, and digital products for ambitious clients worldwide.",
      path: "/careers",
      ogTitle: "Careers at Zorqiva",
      ogDescription: "Join our global IT agency.",
    }),
  component: CareersPage,
});

const departments: Array<JobDepartment | "All"> = ["All", "Engineering", "Design", "Operations"];

function CareersPage() {
  const [dept, setDept] = useState<JobDepartment | "All">("All");
  const filtered = useMemo(
    () => (dept === "All" ? openRoles : openRoles.filter((j) => j.department === dept)),
    [dept],
  );

  return (
    <Layout>
      <div>
        <PageHero
          eyebrow="Careers"
          title="Start your career building real client software."
          lede="We're looking for junior builders, CMS talent, designers, and team-support roles ready to learn while shipping real work for companies around the world."
        />

        <SectionShell className="pt-0!">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Life at Zorqiva"
                title="Small team. Real mentorship."
                lede="You'll work on real client projects across healthcare, fintech, and SaaS, alongside senior engineers and designers who review your work and help you grow. We ship weekly, debate openly, and measure success by client outcomes."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Weekly demos",
                  "Mentorship from senior engineers",
                  "Real client projects",
                  "Room to grow",
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
            <SectionImage
              src={siteImages.careersCulture}
              alt="Culture and life at Zorqiva"
              aspect="wide"
            />
          </div>
        </SectionShell>

        <SectionShell tone="warm">
          <SectionHeader
            eyebrow="Benefits"
            title="Compensation and support that match the mission."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch card-grid">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch card-grid">
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
          <div className="grid sm:grid-cols-2 gap-5 card-grid">
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
              <Link
                key={job.id}
                to="/careers/$jobId"
                params={{ jobId: job.id }}
                className="link-arrow group card-premium p-6! md:p-8! hover:border-primary/40! hover:shadow-(--shadow-soft) transition block"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                        {job.department}
                      </span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{job.level}</span>
                    </div>
                    <div className="font-serif text-2xl text-(--ink) group-hover:text-primary transition">
                      {job.title}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
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
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="link-arrow__icon text-primary text-xl shrink-0"
                  />
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground">
            Don't see a fit?{" "}
            <a
              href={`mailto:${brand.contactEmail}`}
              className="text-primary font-semibold hover:underline"
            >
              {brand.contactEmail}
            </a>
          </p>
        </SectionShell>

        <CTABanner
          title="Ready to join the studio?"
          lede="Browse our open roles and apply directly from the role page."
          primaryLabel="Browse open roles"
          primaryTo="/careers"
          primaryHash="open-roles"
          secondaryLabel="About Zorqiva"
          secondaryTo="/about"
        />
      </div>
    </Layout>
  );
}
