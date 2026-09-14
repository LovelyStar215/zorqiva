import { createFileRoute } from "@tanstack/react-router";
import { brand } from "@/lib/brand";
import {
  AVAILABILITY_LABELS,
  EXPERIENCE_LABELS,
  isAllowedResumeFile,
  MAX_RESUME_BYTES,
  sanitizeResumeFilename,
} from "@/lib/careers-form-options";
import { getJobById, openRoles } from "@/lib/site-data";
import { MailConfigError, sendMail } from "@/lib/mail";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /^https?:\/\/.+/i;
const ROLE_IDS = new Set(openRoles.map((job) => job.id));

function resolveJobTitle(roleId: string) {
  if (roleId === "general") return "General application";
  return getJobById(roleId)?.title;
}

function resumeContentType(file: File) {
  if (file.type) return file.type;
  if (/\.pdf$/i.test(file.name)) return "application/pdf";
  if (/\.docx$/i.test(file.name)) {
    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  }
  if (/\.doc$/i.test(file.name)) return "application/msword";
  return "application/octet-stream";
}

export const Route = createFileRoute("/api/job-application")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const form = await request.formData();

          if (String(form.get("_hp") ?? "").trim()) {
            return Response.json({ ok: true });
          }

          const role = String(form.get("role") ?? "").trim();
          const firstName = String(form.get("firstName") ?? "").trim();
          const lastName = String(form.get("lastName") ?? "").trim();
          const email = String(form.get("email") ?? "").trim();
          const phone = String(form.get("phone") ?? "").trim();
          const linkedin = String(form.get("linkedin") ?? "").trim();
          const portfolio = String(form.get("portfolio") ?? "").trim();
          const location = String(form.get("location") ?? "").trim();
          const remoteRole = String(form.get("remoteRole") ?? "").trim();
          const workAuthorization = String(form.get("workAuthorization") ?? "").trim();
          const loomVideoLink = String(form.get("loomVideoLink") ?? "").trim();
          const experience = String(form.get("experience") ?? "").trim();
          const availability = String(form.get("availability") ?? "").trim();
          const coverLetter = String(form.get("coverLetter") ?? "").trim();
          const resumeField = form.get("resume");

          if (role !== "general" && !ROLE_IDS.has(role)) {
            return Response.json({ ok: false, error: "Select a valid role." }, { status: 400 });
          }

          const jobTitle = resolveJobTitle(role);
          if (!jobTitle) {
            return Response.json({ ok: false, error: "Unknown job role." }, { status: 400 });
          }

          if (!firstName) {
            return Response.json({ ok: false, error: "First name is required." }, { status: 400 });
          }
          if (!lastName) {
            return Response.json({ ok: false, error: "Last name is required." }, { status: 400 });
          }
          if (!EMAIL_RE.test(email)) {
            return Response.json(
              { ok: false, error: "Enter a valid email address." },
              { status: 400 },
            );
          }
          if (!linkedin || !URL_RE.test(linkedin)) {
            return Response.json(
              { ok: false, error: "Enter a valid LinkedIn URL (https://…)." },
              { status: 400 },
            );
          }
          if (portfolio && !URL_RE.test(portfolio)) {
            return Response.json(
              { ok: false, error: "Enter a valid portfolio URL (https://…)." },
              { status: 400 },
            );
          }
          if (!remoteRole) {
            return Response.json(
              { ok: false, error: "Select whether this is a remote role." },
              { status: 400 },
            );
          }
          if (!workAuthorization) {
            return Response.json(
              { ok: false, error: "Tell us your work authorization status." },
              { status: 400 },
            );
          }
          if (!loomVideoLink || !URL_RE.test(loomVideoLink)) {
            return Response.json(
              { ok: false, error: "Enter a valid Loom video URL (https://…)." },
              { status: 400 },
            );
          }
          if (!(resumeField instanceof File) || resumeField.size <= 0) {
            return Response.json(
              { ok: false, error: "Upload your resume (PDF or Word)." },
              { status: 400 },
            );
          }
          if (resumeField.size > MAX_RESUME_BYTES) {
            return Response.json(
              { ok: false, error: "Resume must be 5MB or smaller." },
              { status: 400 },
            );
          }
          if (!isAllowedResumeFile(resumeField)) {
            return Response.json(
              { ok: false, error: "Upload a PDF or Word document (.pdf, .doc, .docx)." },
              { status: 400 },
            );
          }
          if (!experience || !EXPERIENCE_LABELS[experience]) {
            return Response.json(
              { ok: false, error: "Select your experience level." },
              { status: 400 },
            );
          }
          if (!availability || !AVAILABILITY_LABELS[availability]) {
            return Response.json(
              { ok: false, error: "Select your availability." },
              { status: 400 },
            );
          }
          if (coverLetter.length < 50) {
            return Response.json(
              { ok: false, error: "Tell us more about your background (at least 50 characters)." },
              { status: 400 },
            );
          }

          const resumeFilename = sanitizeResumeFilename(resumeField.name);
          const resumeBuffer = Buffer.from(await resumeField.arrayBuffer());

          const name = `${firstName} ${lastName}`.trim();
          const { buildJobApplicationEmail } = await import("@/lib/email-templates");
          const { text, html, attachments } = await buildJobApplicationEmail({
            name,
            email,
            jobTitle,
            phone: phone || undefined,
            linkedin,
            portfolio: portfolio || undefined,
            remoteRole,
            workAuthorization,
            loomVideoLink,
            resumeFilename,
            locationLabel: location || "Not specified",
            experienceLabel: EXPERIENCE_LABELS[experience],
            availabilityLabel: AVAILABILITY_LABELS[availability],
            coverLetter,
            resumeAttachment: {
              filename: resumeFilename,
              content: resumeBuffer,
              contentType: resumeContentType(resumeField),
            },
          });

          await sendMail({
            replyTo: `${name} <${email}>`,
            subject: `[${brand.name}] Application — ${jobTitle} — ${name}`,
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
          console.error("Job application email failed:", error);
          return Response.json(
            { ok: false, error: "We couldn't submit your application. Please try again shortly." },
            { status: 500 },
          );
        }
      },
    },
  },
});
