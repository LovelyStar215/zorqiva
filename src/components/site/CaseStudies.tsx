import { Icon } from "@/components/site/Icon";
import { Link } from "@tanstack/react-router";
import { CaseStudyCover } from "@/components/site/CaseStudyCover";
import { caseStudies, type CaseStudy } from "@/lib/case-studies-data";

function CaseStudyCard({
  study,
  featured = false,
  detailed = false,
  linkable = true,
}: {
  study: CaseStudy;
  featured?: boolean;
  detailed?: boolean;
  linkable?: boolean;
}) {
  return (
    <article
      className={`relative card-premium p-0! overflow-hidden h-full flex flex-col ${
        featured ? "border-primary/25! ring-1! ring-primary/10!" : ""
      } ${linkable ? "hover:border-primary/40! transition" : ""}`}
    >
      {linkable && (
        <Link
          to="/case-studies/$caseId"
          params={{ caseId: study.id }}
          className="absolute inset-0 z-10"
          aria-label={`Read ${study.company} case study`}
        />
      )}

      <CaseStudyCover
        src={study.image}
        alt={`${study.company} case study cover`}
        label={study.company}
        aspect="card"
        className="rounded-none! border-0! shadow-none!"
      />

      <div className="p-8 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
            {study.industry}
          </span>
        </div>
        <h3 className="font-serif text-2xl text-(--ink)! mt-2">{study.company}</h3>

        {detailed && (
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{study.summary}</p>
        )}

        <div className="mt-5 font-serif text-4xl text-gradient tracking-tight">{study.metric}</div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
          {study.metricLabel}
        </div>

        {detailed && (
          <ul className="mt-5 space-y-2">
            {study.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                <Icon icon="solar:check-circle-bold" className="text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {study.quote && (
          <blockquote className="mt-5 text-sm text-muted-foreground leading-relaxed border-l-2 border-accent/40 pl-4 flex-1">
            &ldquo;{study.quote}&rdquo;
          </blockquote>
        )}

        {detailed && (
          <div className="mt-4 flex flex-wrap gap-2">
            {study.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium text-foreground/75"
              >
                {service}
              </span>
            ))}
          </div>
        )}

        {study.quote && study.author && (
          <div className="mt-auto pt-5 border-t border-border flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 text-primary grid place-items-center font-serif text-sm">
              {study.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div className="font-semibold text-sm">{study.author}</div>
              {study.role && <div className="text-xs text-muted-foreground">{study.role}</div>}
            </div>
          </div>
        )}

        {linkable && (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-4">
            Read case study <Icon icon="solar:arrow-right-linear" />
          </span>
        )}
      </div>
    </article>
  );
}

export function CaseStudiesGrid({
  detailed = false,
  limit,
}: {
  detailed?: boolean;
  limit?: number;
}) {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-muted/20 px-8 py-14 text-center">
        <p className="font-serif text-xl text-(--ink)">Case studies coming soon</p>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          Share project URLs and we will publish analyzed write-ups with screenshots here.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid gap-5 items-stretch card-grid ${
        detailed ? "md:grid-cols-2" : "md:grid-cols-3"
      }`}
    >
      {items.map((study, i) => (
        <div key={study.id} className="h-full min-h-0">
          <CaseStudyCard study={study} featured={!detailed && i === 1} detailed={detailed} />
        </div>
      ))}
    </div>
  );
}
