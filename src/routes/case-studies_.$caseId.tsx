import { Icon } from "@/components/site/Icon";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyCover } from "@/components/site/CaseStudyCover";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { caseStudies, getCaseStudyById } from "@/lib/case-studies-data";
import { breadcrumbJsonLd, caseStudyJsonLd, pageSeo, pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/case-studies_/$caseId")({
  loader: ({ params }) => {
    const study = getCaseStudyById(params.caseId);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    const study = loaderData?.study;
    if (!study) {
      return pageSeo({
        title: pageTitle("Case Studies", "Zorqiva"),
        description: "Client success stories from Zorqiva engagements.",
        path: "/case-studies",
      });
    }

    const path = `/case-studies/${study.id}`;
    return pageSeo({
      title: pageTitle(study.company, "Case Study", "Zorqiva"),
      description: study.summary,
      path,
      ogTitle: pageTitle(study.company, "Case Study", "Zorqiva"),
      ogDescription: study.summary,
      ogType: "article",
      jsonLd: [
        caseStudyJsonLd(study),
        breadcrumbJsonLd([
          { name: "Case Studies", path: "/case-studies" },
          { name: study.company, path },
        ]),
      ],
    });
  },
  component: CaseStudyDetailPage,
});

function CaseStudyDetailPage() {
  const { study } = Route.useLoaderData();
  const related = caseStudies
    .filter((item) => item.id !== study.id && item.industry === study.industry)
    .slice(0, 2);
  const fallbackRelated =
    related.length > 0 ? related : caseStudies.filter((item) => item.id !== study.id).slice(0, 2);

  return (
    <Layout>
      <div>
        <PageHero eyebrow={study.industry} title={study.company} lede={study.summary}>
          <div className="mt-4 inline-flex flex-col items-center">
            <div className="font-serif text-5xl text-gradient tracking-tight">{study.metric}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
              {study.metricLabel}
            </div>
          </div>
        </PageHero>

        <SectionShell className="pt-0!">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-8"
          >
            <Icon icon="solar:arrow-left-linear" /> All case studies
          </Link>

          <CaseStudyCover
            src={study.image}
            alt={`${study.company} project screenshot`}
            label={study.company}
            aspect="hero"
            className="mb-10"
          />

          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-16 items-start">
            <div className="space-y-10">
              <section>
                <h2 className="font-serif text-2xl text-(--ink) mb-4">The challenge</h2>
                <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-(--ink) mb-4">Our approach</h2>
                <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-(--ink) mb-4">What we delivered</h2>
                <ul className="space-y-3">
                  {study.highlights.map((item) => (
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
                <h2 className="font-serif text-2xl text-(--ink) mb-4">Services involved</h2>
                <div className="flex flex-wrap gap-2">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </section>

              {study.projectUrl && (
                <a
                  href={study.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-primary hover:border-primary/40 transition"
                >
                  Visit live project <Icon icon="solar:square-arrow-right-up-linear" />
                </a>
              )}
            </div>

            <aside className="rounded-4xl border border-border bg-card p-8 md:p-10 shadow-(--shadow-lift) ring-1 ring-primary/5 lg:sticky lg:top-28">
              <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                Key result
              </div>
              <div className="font-serif text-5xl text-gradient tracking-tight mt-3">
                {study.metric}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                {study.metricLabel}
              </div>

              {study.quote && (
                <>
                  <blockquote className="mt-8 text-sm text-muted-foreground leading-relaxed border-l-2 border-accent/40 pl-4">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>

                  {study.author && (
                    <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary grid place-items-center font-serif text-sm">
                        {study.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{study.author}</div>
                        {study.role && (
                          <div className="text-xs text-muted-foreground">{study.role}</div>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}

              <Link
                to="/contact"
                hash="contact-form"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-(--shadow-soft) hover:opacity-90 transition"
              >
                Discuss a similar project <Icon icon="solar:arrow-right-linear" />
              </Link>
            </aside>
          </div>
        </SectionShell>

        {fallbackRelated.length > 0 && (
          <SectionShell tone="muted">
            <h2 className="font-serif text-2xl text-(--ink) mb-6">More case studies</h2>
            <div className="grid sm:grid-cols-2 gap-4 items-stretch card-grid">
              {fallbackRelated.map((item) => (
                <Link
                  key={item.id}
                  to="/case-studies/$caseId"
                  params={{ caseId: item.id }}
                  className="card-premium p-0! overflow-hidden block h-full hover:border-primary/40! transition"
                >
                  <CaseStudyCover
                    src={item.image}
                    alt={`${item.company} case study`}
                    label={item.company}
                    aspect="card"
                    className="rounded-none! border-0! shadow-none!"
                  />
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-widest text-accent font-semibold">
                      {item.industry}
                    </div>
                    <div className="font-serif text-xl text-(--ink) mt-2">{item.company}</div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-4">
                      Read case study <Icon icon="solar:arrow-right-linear" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </SectionShell>
        )}

        <CTABanner
          title="Want outcomes like this for your team?"
          lede="Share your goals and constraints – we will map a path from discovery to production."
          primaryLabel="Start a project"
          secondaryLabel="View all case studies"
          secondaryTo="/case-studies"
        />
      </div>
    </Layout>
  );
}
