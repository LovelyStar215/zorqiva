export const pricingFeatures = [
  { name: "Discovery & scoping", project: true, retainer: true, squad: true },
  { name: "UI/UX design", project: "Basic", retainer: true, squad: true },
  { name: "Full-stack development", project: true, retainer: true, squad: true },
  { name: "Cloud & DevOps setup", project: false, retainer: true, squad: true },
  { name: "Dedicated squad", project: false, retainer: false, squad: true },
  { name: "AI & data engineering", project: false, retainer: "Add-on", squad: true },
  { name: "Ongoing maintenance", project: false, retainer: "Optional", squad: true },
  { name: "SLA & priority support", project: false, retainer: false, squad: true },
  { name: "Technical account manager", project: false, retainer: false, squad: true },
] as const;

export type EngagementPlan = "project" | "retainer" | "squad";
