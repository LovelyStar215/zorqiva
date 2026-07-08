import type { ReactNode } from "react";
import { Layout, PageHero } from "@/components/site/Layout";

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
      <article className="max-w-3xl mx-auto px-6 py-16 prose prose-neutral dark:prose-invert">
        <div className="space-y-6 text-foreground/85 leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-[color:var(--ink)] [&_h2]:mt-10 [&_h2]:mb-4">
          {children}
        </div>
      </article>
    </Layout>
  );
}
