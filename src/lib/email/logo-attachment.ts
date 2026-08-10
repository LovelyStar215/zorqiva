import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import type Mail from "nodemailer/lib/mailer";
import { brand, brandAssets } from "@/lib/brand";
import { absoluteUrl } from "@/lib/seo";

/** Inline CID referenced in MJML templates — avoids broken remote logo URLs in inboxes. */
export const EMAIL_LOGO_CID = "logo@tek4real.com";

export function emailLogoSrc() {
  return `cid:${EMAIL_LOGO_CID}`;
}

function logoFromDisk(): Mail.Attachment | undefined {
  if (process.env.VERCEL) return undefined;

  const fileName = brandAssets.logo.replace(/^\//, "");
  const path = resolve(process.cwd(), "public", fileName);
  if (!existsSync(path)) return undefined;

  return {
    filename: "logo.png",
    content: readFileSync(path),
    cid: EMAIL_LOGO_CID,
    contentType: "image/png",
  };
}

export async function getEmailLogoAttachment(): Promise<Mail.Attachment> {
  const fromDisk = logoFromDisk();
  if (fromDisk) return fromDisk;

  const url = absoluteUrl(brandAssets.logo);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Email logo not found. Expected ${brandAssets.logo} at ${url}.`);
  }

  return {
    filename: "logo.png",
    content: Buffer.from(await response.arrayBuffer()),
    cid: EMAIL_LOGO_CID,
    contentType: "image/png",
  };
}
