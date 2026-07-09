import { brand } from "@/lib/brand";
import { escapeXml, formatMultiline } from "@/lib/email/escape-xml";
import { emailLogoSrc } from "@/lib/email/logo-attachment";
import { absoluteUrl } from "@/lib/seo";
import layoutTemplate from "@/emails/layout.mjml?raw";
import categoryTemplate from "@/emails/partials/category.mjml?raw";
import detailsTableTemplate from "@/emails/partials/details-table.mjml?raw";
import messageTemplate from "@/emails/partials/message.mjml?raw";
import subtitleTemplate from "@/emails/partials/subtitle.mjml?raw";

export function fillMjmlTemplate(template: string, vars: Record<string, string>) {
  let output = template;
  for (const [key, value] of Object.entries(vars)) {
    output = output.replaceAll(`{{${key}}}`, value);
    output = output.replace(new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, "g"), value);
  }
  return output;
}

export function renderDetailsTable(rows: string) {
  return fillMjmlTemplate(detailsTableTemplate, { rows });
}

export function renderMessageBlock(label: string, content: string) {
  return fillMjmlTemplate(messageTemplate, {
    label: escapeXml(label),
    content: formatMultiline(content),
  });
}

export type EmailLayoutVars = {
  category?: string;
  title: string;
  subtitle?: string;
  body: string;
  replyEmail: string;
  replyName: string;
};

export function renderEmailLayout({
  category,
  title,
  subtitle,
  body,
  replyEmail,
  replyName,
}: EmailLayoutVars) {
  const categorySection = category
    ? fillMjmlTemplate(categoryTemplate, { category: escapeXml(category) })
    : "";

  const subtitleSection = subtitle
    ? fillMjmlTemplate(subtitleTemplate, { subtitle: escapeXml(subtitle) })
    : "";

  return fillMjmlTemplate(layoutTemplate, {
    pageTitle: escapeXml(title),
    logoUrl: emailLogoSrc(),
    brandName: escapeXml(brand.displayName),
    siteUrl: absoluteUrl("/"),
    categorySection,
    title: escapeXml(title),
    subtitleSection,
    body,
    replyEmail: escapeXml(replyEmail),
    replyLabel: escapeXml(replyName || replyEmail),
    legalEntity: escapeXml(brand.legalName),
    tagline: escapeXml(brand.tagline),
    brandEmail: escapeXml(brand.contactEmail),
    domain: escapeXml(brand.emailDomain),
  });
}
