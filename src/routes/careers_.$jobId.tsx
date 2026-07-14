import { Icon } from "@/components/site/Icon";
import { Link, createFileRoute, notFound, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { JobApplicationForm } from "@/components/site/JobApplicationForm";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { getJobById, openRoles } from "@/lib/site-data";
import { breadcrumbJsonLd, jobPostingJsonLd, pageSeo, pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/careers_/$jobId")({
  loader: ({ params }) => {
    const job = getJobById(params.jobId);
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => {
    const job = loaderData?.job;
    if (!job) {
      return pageSeo({
        title: pageTitle("Careers", "Tek4Real"),
        description: "Join Tek4Real – build software, cloud systems, and digital products.",
        path: "/careers",
      });
    }

    const path = `/careers/${job.id}`;
    return pageSeo({
      title: pageTitle(job.title, "Careers", "Tek4Real"),
      description: job.description,
      path,
      ogTitle: pageTitle(job.title, "Tek4Real Careers"),
      ogDescription: job.description,
      ogType: "article",
      jsonLd: [
        jobPostingJsonLd(job),
        breadcrumbJsonLd([
          { name: "Careers", path: "/careers" },
          { name: job.title, path },
        ]),
      ],
    });
  },
  component: JobDetailPage,
});

function JobDetailPage() {
  const { job } = Route.useLoaderData();
  const hash = useRouterState({ select: (state) => state.location.hash });
  const related = openRoles
    .filter((role) => role.id !== job.id && role.department === job.department)
    .slice(0, 2);

  useEffect(() => {
    if (hash === "apply") {
      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash, job.id]);

  return (
    <Layout>
      <div>
        <PageHero eyebrow={job.department} title={job.title} lede={job.description}>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Icon icon="solar:map-point-bold" className="text-primary" /> {job.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Icon icon="solar:clock-circle-bold" className="text-primary" /> {job.type}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Icon icon="solar:medal-star-bold" className="text-primary" /> {job.level}
            </span>
          </div>
        </PageHero>

        <SectionShell className="pt-0!">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-10"
          >
            <Icon icon="solar:arrow-left-linear" /> All open roles
          </Link>

          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 xl:gap-16 items-start">
            <div className="space-y-10">
              <section>
                <h2 className="font-serif text-2xl text-(--ink) mb-4">About the role</h2>
                <p className="text-muted-foreground leading-relaxed">{job.overview}</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-(--ink) mb-4">What you'll do</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-foreground/85 leading-relaxed"
                    >
                      <Icon
                        icon="solar:check-circle-bold"
                        className="text-primary shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-(--ink) mb-4">What we're looking for</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-foreground/85 leading-relaxed"
                    >
                      <Icon
                        icon="solar:check-circle-bold"
                        className="text-primary shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <section>
                  <h2 className="font-serif text-2xl text-(--ink) mb-4">Nice to have</h2>
                  <ul className="space-y-3">
                    {job.niceToHave.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                      >
                        <Icon
                          icon="solar:add-circle-linear"
                          className="text-accent shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <div
              id="apply"
              className="scroll-mt-28 rounded-4xl border border-border bg-card p-8 md:p-10 shadow-(--shadow-lift) ring-1 ring-primary/5 lg:sticky lg:top-28"
            >
              <JobApplicationForm
                title={`Apply for ${job.title}`}
                subtitle="Our talent team reviews every application and responds within five business days."
                selectedRoleId={job.id}
              />
            </div>
          </div>
        </SectionShell>

        {related.length > 0 && (
          <SectionShell tone="muted">
            <h2 className="font-serif text-2xl text-(--ink) mb-6">More {job.department} roles</h2>
            <div className="grid sm:grid-cols-2 gap-4 items-stretch card-grid">
              {related.map((role) => (
                <Link
                  key={role.id}
                  to="/careers/$jobId"
                  params={{ jobId: role.id }}
                  className="card-premium p-6! block h-full hover:border-primary/40! transition"
                >
                  <div className="text-xs uppercase tracking-widest text-accent font-semibold">
                    {role.level}
                  </div>
                  <div className="font-serif text-xl text-(--ink) mt-2 group-hover:text-primary transition">
                    {role.title}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {role.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-4">
                    View role <Icon icon="solar:arrow-right-linear" />
                  </span>
                </Link>
              ))}
            </div>
          </SectionShell>
        )}
      </div>
    </Layout>
  );
}
