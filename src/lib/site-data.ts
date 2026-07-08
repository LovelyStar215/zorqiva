export const companyValues = [
  {
    icon: "solar:diamond-bold",
    title: "Craft over quantity",
    desc: "We ship fewer things, better. Every pixel and every query is examined.",
  },
  {
    icon: "solar:hand-shake-bold",
    title: "Customer-obsessed",
    desc: "Our roadmap starts in customer sessions, not strategy decks.",
  },
  {
    icon: "solar:earth-bold",
    title: "Long-term thinking",
    desc: "We build for the operator who's still here in ten years.",
  },
  {
    icon: "solar:shield-star-bold",
    title: "Trust as a feature",
    desc: "Security, privacy, and reliability aren't tiers — they're defaults.",
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
    title: "Meaningful equity",
    desc: "Early-stage grants with transparent refresh cycles tied to company milestones.",
  },
  {
    icon: "solar:home-2-bold",
    title: "Flexible work",
    desc: "Austin HQ with hybrid flexibility. Core collaboration hours, async by default.",
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
    desc: "Quarterly offsites, weekly demos, and a kitchen that rivals Austin's best cafés.",
  },
] as const;

export const offices = [
  { city: "Austin", country: "USA", role: "Global HQ", address: "500 W 2nd Street, Suite 1900" },
  { city: "New York", country: "USA", role: "East Coast hub", address: "575 Fifth Avenue" },
  { city: "London", country: "UK", role: "EMEA hub", address: "30 St Mary Axe" },
  { city: "Singapore", country: "SG", role: "APAC hub", address: "71 Robinson Road" },
] as const;

export type JobDepartment = "Engineering" | "Product" | "Design" | "Sales" | "Operations";
export type JobLocation = "Austin, TX" | "Remote (US)" | "New York, NY" | "London, UK";

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
    location: "Austin, TX",
    type: "Full-time",
    level: "Senior",
    description:
      "Build the core ledger and workflow engine powering Verdian's unified CRM & ERP graph.",
  },
  {
    id: "staff-platform",
    title: "Staff Platform Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    level: "Lead",
    description:
      "Own infrastructure, observability, and deployment pipelines for multi-region enterprise customers.",
  },
  {
    id: "product-designer",
    title: "Senior Product Designer",
    department: "Design",
    location: "Austin, TX",
    type: "Full-time",
    level: "Senior",
    description:
      "Shape complex financial and operational workflows into interfaces operators love.",
  },
  {
    id: "product-manager",
    title: "Product Manager, Finance",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    level: "Senior",
    description:
      "Define the roadmap for GL, close, and multi-entity consolidation — working directly with CFO customers.",
  },
  {
    id: "enterprise-ae",
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    level: "Senior",
    description:
      "Drive new logo acquisition for mid-market and enterprise accounts across SaaS and life sciences.",
  },
  {
    id: "customer-success",
    title: "Customer Success Manager",
    department: "Operations",
    location: "London, UK",
    type: "Full-time",
    level: "Mid",
    description: "Guide EMEA customers from onboarding through expansion with measurable outcomes.",
  },
];

export const integrations = [
  "Stripe",
  "HubSpot",
  "Snowflake",
  "NetSuite",
  "Slack",
  "Salesforce",
  "Workday",
  "QuickBooks",
  "Shopify",
  "AWS",
  "Google Cloud",
  "Okta",
] as const;

export const caseStudies = [
  {
    company: "Halcyon Bio",
    industry: "Life Sciences",
    metric: "4 days",
    metricLabel: "Month-end close",
    quote:
      "We collapsed nine tools into Verdian and closed our first month in four days instead of nineteen.",
    author: "Maren Klaassen",
    role: "CFO",
  },
  {
    company: "Northstar Commerce",
    industry: "Commerce",
    metric: "38%",
    metricLabel: "Cycle time reduction",
    quote:
      "Inventory, billing, and CRM finally agree. Our ops team stopped living in spreadsheets.",
    author: "James Okonkwo",
    role: "VP Operations",
  },
  {
    company: "Meridian SaaS",
    industry: "Software",
    metric: "$12M",
    metricLabel: "ARR on one ledger",
    quote: "From Series B to IPO readiness without a re-platform. That alone justified the switch.",
    author: "Elena Vasquez",
    role: "CEO",
  },
] as const;

export const complianceBadges = [
  "SOC 2 Type II",
  "HIPAA",
  "GDPR",
  "ISO 27001",
  "SOX-ready",
  "PCI DSS",
] as const;

export const platformComparison = {
  before: [
    "12+ disconnected tools",
    "Nightly sync jobs & drift",
    "19-day month-end close",
    "Reconciliation heroics",
    "Separate AI add-ons",
  ],
  after: [
    "One unified graph & ledger",
    "Real-time, zero sync",
    "4-day continuous close",
    "Single source of truth",
    "Native AI in every module",
  ],
} as const;

export const socialLinks = {
  twitter: "https://twitter.com/verdian",
  linkedin: "https://linkedin.com/company/verdian",
  github: "https://github.com/verdian",
  youtube: "https://youtube.com/@verdian",
} as const;
