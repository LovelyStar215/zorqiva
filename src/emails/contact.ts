import { brand } from "@/lib/brand";
import { compileMjml } from "@/lib/email/compile-mjml";
import { getEmailLogoAttachment } from "@/lib/email/logo-attachment";
import {
  renderDetailsTable,
  renderEmailLayout,
  renderMessageBlock,
} from "@/lib/email/load-mjml-template";
import { detailRow, linkRow, optionalRow } from "@/lib/email/mjml-rows";
import type Mail from "nodemailer/lib/mailer";

export type BuiltEmail = {
  text: string;
  html: string;
  attachments: Mail.Attachment[];
};

export type ContactEmailContent = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  inquiryLabel: string;
  teamSizeLabel?: string;
  message: string;
};

export async function buildContactEmail(data: ContactEmailContent): Promise<BuiltEmail> {
  const name = `${data.firstName} ${data.lastName}`.trim();
  const title = "New contact inquiry";
  const subtitle = `Submitted by ${name} · ${data.email}`;

  const rows = [
    detailRow("Name", name),
    linkRow("Email", `mailto:${data.email}`, data.email),
    detailRow("Company", data.company),
    detailRow("Inquiry type", data.inquiryLabel),
    optionalRow("Team size", data.teamSizeLabel),
  ].join("");

  const body = `
    ${renderDetailsTable(rows)}
    ${renderMessageBlock("Message", data.message)}
  `;

  const text = [
    title,
    subtitle,
    "",
    `Name: ${name}`,
    `Email: ${data.email}`,
    `Company: ${data.company}`,
    `Inquiry type: ${data.inquiryLabel}`,
    data.teamSizeLabel ? `Team size: ${data.teamSizeLabel}` : null,
    "",
    "Message:",
    data.message,
    "",
    `— ${brand.name} website`,
  ]
    .filter(Boolean)
    .join("\n");

  const html = await compileMjml(
    renderEmailLayout({
      category: "Contact",
      title,
      subtitle,
      body,
      replyEmail: data.email,
      replyName: name,
    }),
  );

  return { text, html, attachments: [await getEmailLogoAttachment()] };
}
