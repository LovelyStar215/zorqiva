import { createFileRoute } from "@tanstack/react-router";
import { brand } from "@/lib/brand";
import { INQUIRY_TYPES, TEAM_SIZE_LABELS } from "@/lib/contact-options";
import { MailConfigError, sendMail } from "@/lib/mail";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INQUIRY_SET = new Set<string>(INQUIRY_TYPES);

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const form = await request.formData();

          if (String(form.get("_hp") ?? "").trim()) {
            return Response.json({ ok: true });
          }

          const firstName = String(form.get("firstName") ?? "").trim();
          const lastName = String(form.get("lastName") ?? "").trim();
          const email = String(form.get("email") ?? "").trim();
          const company = String(form.get("company") ?? "").trim();
          const inquiry = String(form.get("inquiry") ?? "").trim();
          const teamSize = String(form.get("teamSize") ?? "").trim();
          const message = String(form.get("message") ?? "").trim();

          if (!firstName) {
            return Response.json({ ok: false, error: "First name is required." }, { status: 400 });
          }
          if (!lastName) {
            return Response.json({ ok: false, error: "Last name is required." }, { status: 400 });
          }
          if (!EMAIL_RE.test(email)) {
            return Response.json(
              { ok: false, error: "Enter a valid work email." },
              { status: 400 },
            );
          }
          if (!company) {
            return Response.json({ ok: false, error: "Company is required." }, { status: 400 });
          }
          if (!INQUIRY_SET.has(inquiry)) {
            return Response.json(
              { ok: false, error: "Select a valid inquiry type." },
              { status: 400 },
            );
          }
          if (message.length < 10) {
            return Response.json(
              { ok: false, error: "Tell us a bit more (at least 10 characters)." },
              { status: 400 },
            );
          }

          const name = `${firstName} ${lastName}`.trim();
          const teamSizeLabel = teamSize ? (TEAM_SIZE_LABELS[teamSize] ?? teamSize) : undefined;

          const { buildContactEmail } = await import("@/lib/email-templates");
          const { text, html, attachments } = await buildContactEmail({
            firstName,
            lastName,
            email,
            company,
            inquiryLabel: inquiry,
            teamSizeLabel,
            message,
          });

          await sendMail({
            replyTo: `${name} <${email}>`,
            subject: `[${brand.name}] Contact inquiry — ${name}`,
            text,
            html,
            attachments,
          });

          return Response.json({ ok: true });
        } catch (error) {
          if (
            error instanceof MailConfigError ||
            (error instanceof Error && error.name === "MailConfigError")
          ) {
            console.error(error.message);
            return Response.json(
              { ok: false, error: "Email delivery is temporarily unavailable." },
              { status: 503 },
            );
          }
          console.error("Contact form email failed:", error);
          return Response.json(
            { ok: false, error: "We couldn't send your message. Please try again shortly." },
            { status: 500 },
          );
        }
      },
    },
  },
});
