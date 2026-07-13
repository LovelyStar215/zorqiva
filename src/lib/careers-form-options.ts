export const EXPERIENCE_LABELS: Record<string, string> = {
  "0-2": "0–2 years",
  "3-5": "3–5 years",
  "6-10": "6–10 years",
  "10+": "10+ years",
};

export const AVAILABILITY_LABELS: Record<string, string> = {
  immediate: "Immediately",
  "2-weeks": "Within 2 weeks",
  "1-month": "Within 1 month",
  "2-months+": "2+ months",
};

/** Max resume upload size (email + serverless body limits). */
export const MAX_RESUME_BYTES = 5 * 1024 * 1024;

export const ALLOWED_RESUME_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export const RESUME_ACCEPT =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

export function isAllowedResumeFile(file: { name: string; type: string; size: number }) {
  if (file.size <= 0 || file.size > MAX_RESUME_BYTES) return false;
  if (ALLOWED_RESUME_MIME_TYPES.has(file.type)) return true;
  return /\.(pdf|docx?)$/i.test(file.name);
}

export function sanitizeResumeFilename(name: string) {
  const cleaned = name.replace(/[^\w.\-()+ ]+/g, "_").trim().slice(0, 120);
  return cleaned || "resume.pdf";
}
