import { brand } from "@/lib/brand";
import { compileMjml } from "@/lib/email/compile-mjml";
import { getEmailLogoAttachment } from "@/lib/email/logo-attachment";
import {
  renderDetailsTable,
  renderEmailLayout,
  renderMessageBlock,
} from "@/lib/email/load-mjml-template";
import { detailRow, linkRow, optionalRow } from "@/lib/email/mjml-rows";
import type { BuiltEmail } from "@/emails/contact";

export type JobApplicationEmailContent = {
  name: string;
  email: string;
  jobTitle: string;
  phone?: string;
  linkedin?: string;
  portfolio?: string;
  resumeLink: string;
  locationLabel: string;
  experienceLabel: string;
  availabilityLabel: string;
  coverLetter: string;
};

export async function buildJobApplicationEmail(
  data: JobApplicationEmailContent,
): Promise<BuiltEmail> {
  const title = `Application — ${data.jobTitle}`;
  const subtitle = `${data.name} · ${data.email}`;

  const rows = [
    detailRow("Position", data.jobTitle),
    detailRow("Applicant", data.name),
    linkRow("Email", `mailto:${data.email}`, data.email),
    optionalRow("Phone", data.phone),
    data.linkedin ? linkRow("LinkedIn", data.linkedin, data.linkedin) : "",
    data.portfolio ? linkRow("Portfolio", data.portfolio, data.portfolio) : "",
    linkRow("Resume", data.resumeLink, "View resume"),
    detailRow("Location", data.locationLabel),
    detailRow("Experience", data.experienceLabel),
    detailRow("Availability", data.availabilityLabel),
  ].join("");

  const body = `
    ${renderDetailsTable(rows)}
    ${renderMessageBlock("Cover letter", data.coverLetter)}
  `;

  const text = [
    title,
    subtitle,
    "",
    `Position: ${data.jobTitle}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.linkedin ? `LinkedIn: ${data.linkedin}` : null,
    data.portfolio ? `Portfolio: ${data.portfolio}` : null,
    `Resume: ${data.resumeLink}`,
    `Location: ${data.locationLabel}`,
    `Experience: ${data.experienceLabel}`,
    `Availability: ${data.availabilityLabel}`,
    "",
    "Cover letter:",
    data.coverLetter,
    "",
    `— ${brand.name} careers`,
  ]
    .filter(Boolean)
    .join("\n");

  const html = await compileMjml(
    renderEmailLayout({
      category: "Job application",
      title,
      subtitle,
      body,
      replyEmail: data.email,
      replyName: data.name,
    }),
  );

  return { text, html, attachments: [await getEmailLogoAttachment()] };
}
