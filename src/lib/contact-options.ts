export const INQUIRY_TYPES = [
  "New project",
  "Staff augmentation",
  "Support & maintenance",
  "Partnerships",
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];

export const TEAM_SIZE_RANGES = [
  { value: "1-25", label: "1–25 employees" },
  { value: "26-100", label: "26–100 employees" },
  { value: "101-500", label: "101–500 employees" },
  { value: "500+", label: "500+ employees" },
] as const;

export const TEAM_SIZE_LABELS = Object.fromEntries(
  TEAM_SIZE_RANGES.map(({ value, label }) => [value, label]),
) as Record<string, string>;
