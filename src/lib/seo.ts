import { brand, brandAssets } from "./brand";
import { faqSections } from "./faq-data";
import { openRoles, socialLinks, type Job } from "./site-data";

export const defaultDescription =
  "Tek4Real is a premium IT agency — custom software, cloud infrastructure, UI/UX design, and AI for ambitious companies.";

export const defaultOgImage = `${brand.siteUrl}${brandAssets.logoSquare}`;

type HeadLink = {
  rel: string;
  href: string;
  type?: string;
  sizes?: string;
  crossOrigin?: "anonymous";
};

/** Icon/manifest links for Google Search favicon + mobile home screen. */
export function siteIconLinks(): HeadLink[] {
  return [
    { rel: "icon", href: brandAssets.favicon, sizes: "any" },
    { rel: "icon", href: brandAssets.favicon48, type: "image/png", sizes: "48x48" },
    { rel: "icon", href: brandAssets.favicon96, type: "image/png", sizes: "96x96" },
    { rel: "icon", href: brandAssets.favicon192, type: "image/png", sizes: "192x192" },
    { rel: "apple-touch-icon", href: brandAssets.appleTouchIcon, sizes: "512x512" },
    { rel: "manifest", href: brandAssets.webManifest },
  ];
}

export function organizationLogoJsonLd() {
  return {
    "@type": "ImageObject",
    url: absoluteUrl(brandAssets.logoSquare),
    width: 512,
    height: 512,
  };
}

type StandardMeta =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

type JsonLdScript = {
  type: "application/ld+json";
  children: string;
};

export type PageHead = {
  meta: StandardMeta[];
  links: Array<{ rel: "canonical"; href: string }>;
  scripts?: JsonLdScript[];
};

export type PageSeoOptions = {
  title: string;
  description: string;
  path?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

function jsonLdScripts(data: Record<string, unknown> | Record<string, unknown>[]): JsonLdScript[] {
  const items = Array.isArray(data) ? data : [data];
  return items.map((item) => ({
    type: "application/ld+json",
    children: JSON.stringify(item),
  }));
}

export function absoluteUrl(path = "/") {
  if (path === "" || path === "/") return brand.siteUrl;
  return `${brand.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageSeo({
  title,
  description,
  path = "/",
  ogTitle,
  ogDescription,
  ogImage = defaultOgImage,
  ogType = "website",
  jsonLd,
}: PageSeoOptions): PageHead {
  const canonical = absoluteUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: brand.legalName },
      { name: "theme-color", content: "#1a3d32" },
      { property: "og:site_name", content: brand.name },
      { property: "og:title", content: ogTitle ?? title },
      { property: "og:description", content: ogDescription ?? description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: `${brand.name} logo` },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle ?? title },
      { name: "twitter:description", content: ogDescription ?? description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: canonical }],
    ...(jsonLd ? { scripts: jsonLdScripts(jsonLd) } : {}),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    legalName: brand.legalName,
    url: brand.siteUrl,
    logo: organizationLogoJsonLd(),
    image: absoluteUrl(brandAssets.logoSquare),
    email: brand.contactEmail,
    sameAs: Object.values(socialLinks),
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    url: brand.siteUrl,
    image: absoluteUrl(brandAssets.logoSquare),
    logo: organizationLogoJsonLd(),
    description: defaultDescription,
    email: brand.contactEmail,
    areaServed: ["United States", "Hong Kong"],
    serviceType: [
      "Custom Software Development",
      "Cloud Infrastructure",
      "UI/UX Design",
      "AI Engineering",
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageJsonLd() {
  const questions = faqSections.flatMap((section) => section.items);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

function jobLocationJsonLd(job: Job) {
  if (job.location.startsWith("Remote")) {
    return {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
    };
  }

  const locality = job.location === "Hong Kong" ? "Hong Kong" : "Texas";
  const country = job.location === "Hong Kong" ? "HK" : "US";

  return {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: locality,
      addressCountry: country,
    },
  };
}

export function jobPostingJsonLd(job: Job) {
  const posting: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.overview}\n\n${job.responsibilities.join("\n")}`,
    identifier: {
      "@type": "PropertyValue",
      name: brand.name,
      value: job.id,
    },
    datePosted: "2026-07-01",
    validThrough: "2026-12-31",
    employmentType: job.type === "Full-time" ? "FULL_TIME" : "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: brand.name,
      sameAs: brand.siteUrl,
      logo: organizationLogoJsonLd(),
    },
    jobLocation: jobLocationJsonLd(job),
    directApply: true,
    url: absoluteUrl(`/careers/${job.id}`),
  };

  if (job.location.startsWith("Remote") || job.location.startsWith("Hybrid")) {
    posting.jobLocationType = job.location.startsWith("Remote") ? "TELECOMMUTE" : "HYBRID";
  }

  return posting;
}

const sitemapEntries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/solutions", changefreq: "monthly", priority: "0.8" },
  { path: "/pricing", changefreq: "monthly", priority: "0.8" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/careers", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.7" },
  { path: "/security", changefreq: "yearly", priority: "0.5" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/cookies", changefreq: "yearly", priority: "0.3" },
] as const;

export function buildSitemapXml() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = [
    ...sitemapEntries.map((entry) => ({ ...entry, lastmod })),
    ...openRoles.map((job) => ({
      path: `/careers/${job.id}`,
      changefreq: "weekly",
      priority: "0.7",
      lastmod,
    })),
  ];

  const body = urls
    .map(
      (url) => `  <url>
    <loc>${absoluteUrl(url.path)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
}
