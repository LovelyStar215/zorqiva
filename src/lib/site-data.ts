export const companyValues = [
  {
    icon: "solar:diamond-bold",
    title: "Craft over shortcuts",
    desc: "We ship polished software — thoughtful architecture, clean code, and interfaces people enjoy using.",
  },
  {
    icon: "solar:hand-shake-bold",
    title: "Partners, not vendors",
    desc: "We embed with your team, communicate clearly, and own outcomes from discovery through launch.",
  },
  {
    icon: "solar:earth-bold",
    title: "Built to last",
    desc: "We design systems that scale with your business — maintainable, documented, and ready for what's next.",
  },
  {
    icon: "solar:shield-star-bold",
    title: "Security by default",
    desc: "Every engagement follows secure SDLC practices, least-privilege access, and production-grade ops.",
  },
] as const;

export const benefits = [
  {
    icon: "solar:heart-pulse-bold",
    title: "Premium health",
    desc: "Medical, dental, vision, and mental health — 100% covered for you and dependents.",
  },
  {
    icon: "solar:chart-2-bold",
    title: "Competitive pay",
    desc: "Top-of-market salaries with performance bonuses and transparent career frameworks.",
  },
  {
    icon: "solar:home-2-bold",
    title: "Flexible work",
    desc: "Hybrid flexibility across our Texas and Hong Kong offices. Core collaboration hours, async-friendly culture.",
  },
  {
    icon: "solar:book-2-bold",
    title: "Learning budget",
    desc: "$3,000 annual stipend for courses, conferences, and certifications.",
  },
  {
    icon: "solar:calendar-bold",
    title: "Generous time off",
    desc: "Unlimited PTO with a 15-day minimum. Parental leave for all caregivers.",
  },
  {
    icon: "solar:cup-hot-bold",
    title: "Team rituals",
    desc: "Quarterly offsites, weekly demos, and a team kitchen stocked for long build days.",
  },
] as const;

export const offices = [
  { city: "Texas", country: "USA", role: "Americas HQ", address: "500 W 2nd Street, Suite 1900" },
  { city: "Hong Kong", country: "HK", role: "APAC HQ", address: "1 Exchange Square, Central" },
] as const;

export type JobDepartment = "Engineering" | "Design" | "Delivery" | "Sales" | "Operations";
export type JobLocation = "Texas" | "Hong Kong" | "Hybrid (US)" | "Remote (US)";

export type Job = {
  id: string;
  title: string;
  department: JobDepartment;
  location: JobLocation;
  type: "Full-time" | "Contract";
  level: "Senior" | "Mid" | "Lead" | "Director";
  description: string;
};

export const openRoles: Job[] = [
  {
    id: "senior-fullstack",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Texas",
    type: "Full-time",
    level: "Senior",
    description:
      "Lead client builds across React, Node, and cloud-native stacks — from architecture through production launch.",
  },
  {
    id: "staff-devops",
    title: "Senior DevOps Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    level: "Lead",
    description:
      "Design CI/CD pipelines, infrastructure-as-code, and observability for enterprise client environments.",
  },
  {
    id: "product-designer",
    title: "Senior UX/UI Designer",
    department: "Design",
    location: "Texas",
    type: "Full-time",
    level: "Senior",
    description:
      "Shape digital products for clients — research, wireframes, design systems, and developer handoff.",
  },
  {
    id: "delivery-manager",
    title: "Technical Delivery Manager",
    department: "Delivery",
    location: "Texas",
    type: "Full-time",
    level: "Senior",
    description:
      "Own sprint planning, stakeholder communication, and on-time delivery across multiple client engagements.",
  },
  {
    id: "business-dev",
    title: "Business Development Manager",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    level: "Senior",
    description:
      "Identify and close new agency partnerships across mid-market and enterprise accounts.",
  },
  {
    id: "client-success",
    title: "Client Success Lead",
    department: "Operations",
    location: "Hong Kong",
    type: "Full-time",
    level: "Mid",
    description:
      "Ensure long-term client satisfaction, retention, and expansion across APAC accounts.",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Azure",
  "Google Cloud",
  "Kubernetes",
  "PostgreSQL",
  "Figma",
  "Terraform",
] as const;

export const caseStudies = [
  {
    company: "Halcyon Health",
    industry: "Healthcare",
    metric: "8 weeks",
    metricLabel: "MVP to production",
    quote:
      "Verdian rebuilt our patient portal from scratch — secure, fast, and live in two months. Our internal team couldn't have moved that quickly.",
    author: "Maren Klaassen",
    role: "CTO",
  },
  {
    company: "Northstar Retail",
    industry: "Commerce",
    metric: "40%",
    metricLabel: "Faster deployments",
    quote:
      "They modernized our e-commerce stack and CI/CD pipeline. We ship features weekly now instead of quarterly.",
    author: "James Okonkwo",
    role: "VP Engineering",
  },
  {
    company: "Meridian Finance",
    industry: "Financial Services",
    metric: "99.9%",
    metricLabel: "Uptime achieved",
    quote:
      "From legacy monolith to cloud-native microservices — Verdian guided us end-to-end without a single day of downtime.",
    author: "Elena Vasquez",
    role: "CIO",
  },
] as const;

export const partnerBadges = [
  "AWS Partner",
  "Microsoft Azure",
  "Google Cloud",
  "ISO 27001",
  "SOC 2 Type II",
  "Agile Certified",
] as const;

export const agencyComparison = {
  before: [
    "Freelancer coordination overhead",
    "Inconsistent code quality",
    "No long-term maintenance plan",
    "Slow hiring cycles",
    "Siloed design & engineering",
  ],
  after: [
    "Dedicated cross-functional squad",
    "Senior engineers & designers",
    "Ongoing support retainers",
    "Team ready in 2 weeks",
    "Unified design-to-dev workflow",
  ],
} as const;

export const socialLinks = {
  twitter: "https://twitter.com/verdian",
  linkedin: "https://linkedin.com/company/verdian",
  github: "https://github.com/verdian",
  youtube: "https://youtube.com/@verdian",
} as const;
