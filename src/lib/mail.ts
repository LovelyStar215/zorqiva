import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { brand } from "@/lib/brand";
import { loadEnvFile } from "@/lib/load-env-file";

export class MailConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MailConfigError";
  }
}

function getSmtpConfig(): SMTPTransport.Options {
  loadEnvFile();

  const host = process.env.SMTP_HOST?.trim() || "smtp.hostinger.com";
  const port = Number(process.env.SMTP_PORT?.trim() || "465");
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new MailConfigError(
      "Email is not configured. Set SMTP_USER and SMTP_PASS in your server environment.",
    );
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 15_000,
    ...(port === 587 ? { requireTLS: true } : {}),
  };
}

function getFromAddress() {
  return process.env.MAIL_FROM?.trim() || process.env.SMTP_USER?.trim() || brand.contactEmail;
}

function getToAddress() {
  return process.env.MAIL_TO?.trim() || brand.contactEmail;
}

let transporter: nodemailer.Transporter | undefined;
let transporterKey = "";

function getTransporter() {
  const config = getSmtpConfig();
  const key = `${config.host}:${config.port}:${config.auth?.user}:${config.auth?.pass}`;

  // Serverless: fresh transport per invocation avoids stale SMTP sockets.
  if (process.env.VERCEL) {
    return nodemailer.createTransport(config);
  }

  if (!transporter || transporterKey !== key) {
    transporter = nodemailer.createTransport(config);
    transporterKey = key;
  }

  return transporter;
}

export async function sendMail(options: Mail.Options) {
  const from = getFromAddress();
  const to = getToAddress();

  await getTransporter().sendMail({
    from: options.from ?? `${brand.displayName} <${from}>`,
    to: options.to ?? to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
    attachments: options.attachments,
  });
}
