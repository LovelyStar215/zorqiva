export const pricingFeatures = [
  { name: "Discovery & scoping", starter: true, growth: true, enterprise: true },
  { name: "UI/UX design", starter: "Basic", growth: true, enterprise: true },
  { name: "Full-stack development", starter: true, growth: true, enterprise: true },
  { name: "Cloud & DevOps setup", starter: false, growth: true, enterprise: true },
  { name: "Dedicated squad", starter: false, growth: false, enterprise: true },
  { name: "AI & data engineering", starter: false, growth: "Add-on", enterprise: true },
  { name: "Ongoing maintenance", starter: false, growth: "Optional", enterprise: true },
  { name: "SLA & priority support", starter: false, growth: false, enterprise: true },
  { name: "Technical account manager", starter: false, growth: false, enterprise: true },
] as const;
