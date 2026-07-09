import type { ReactNode } from "react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <Layout>
      <PageHero eyebrow="Legal" title={title} lede={`Last updated ${updated}`} />
      <SectionShell>
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="space-y-6 text-foreground/85 leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-(--ink) [&_h2]:mt-10 [&_h2]:mb-4 [&_ul]:space-y-2 [&_strong]:text-(--ink)">
            {children}
          </div>
        </article>
      </SectionShell>
    </Layout>
  );
}
