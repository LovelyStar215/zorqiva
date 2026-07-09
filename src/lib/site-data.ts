export const companyValues = [
  {
    icon: "solar:diamond-bold",
    title: "Craft over shortcuts",
    desc: "We ship polished software – thoughtful architecture, clean code, and interfaces people enjoy using.",
  },
  {
    icon: "solar:hand-shake-bold",
    title: "Partners, not vendors",
    desc: "We embed with your team, communicate clearly, and own outcomes from discovery through launch.",
  },
  {
    icon: "solar:earth-bold",
    title: "Built to last",
    desc: "We design systems that scale with your business – maintainable, documented, and ready for what's next.",
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
    desc: "Medical, dental, vision, and mental health – 100% covered for you and dependents.",
  },
  {
    icon: "solar:chart-2-bold",
    title: "Competitive pay",
    desc: "Top-of-market salaries with performance bonuses and transparent career frameworks.",
  },
  {
    icon: "solar:home-2-bold",
    title: "Flexible work",
    desc: "Hybrid flexibility across our Colorado and Hong Kong offices. Core collaboration hours, async-friendly culture.",
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

export type JobDepartment = "Engineering" | "Design" | "Delivery" | "Sales" | "Operations";
export type JobLocation = "Colorado" | "Hong Kong" | "Hybrid (US)" | "Remote (US)";

export type Job = {
  id: string;
  title: string;
  department: JobDepartment;
  location: JobLocation;
  type: "Full-time" | "Contract";
  level: "Senior" | "Mid" | "Lead" | "Director";
  description: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
};

export function getJobById(id: string): Job | undefined {
  return openRoles.find((job) => job.id === id);
}

export const openRoles: Job[] = [
  {
    id: "senior-fullstack",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Colorado",
    type: "Full-time",
    level: "Senior",
    description:
      "Lead client builds across React, Node, and cloud-native stacks – from architecture through production launch.",
    overview:
      "You'll join a senior engineering squad shipping production software for healthcare, fintech, and SaaS clients. This role blends hands-on development with technical leadership – you set patterns, review code, and partner with designers and delivery leads to ship reliably every sprint.",
    responsibilities: [
      "Architect and build full-stack features in TypeScript, React, and Node.js",
      "Lead technical decisions on greenfield builds and legacy modernizations",
      "Write clean, tested code and mentor mid-level engineers on the squad",
      "Collaborate with designers on implementation feasibility and polish",
      "Participate in client demos, sprint planning, and production releases",
    ],
    requirements: [
      "5+ years building production web applications",
      "Strong experience with React, TypeScript, and a modern backend framework",
      "Comfort with SQL/NoSQL databases, REST or GraphQL APIs, and cloud deployment",
      "Track record of owning features from design through production support",
      "Clear written and verbal communication with clients and teammates",
    ],
    niceToHave: [
      "Experience with Next.js, TanStack Query, or similar modern frontend tooling",
      "Familiarity with AWS or Azure and infrastructure-as-code",
      "Prior agency or consulting experience across multiple domains",
    ],
  },
  {
    id: "staff-devops",
    title: "Senior DevOps Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    level: "Lead",
    overview:
      "You'll own the platform layer for client engagements – CI/CD, cloud infrastructure, security baselines, and observability. You work embedded with product squads while establishing reusable patterns the wider studio can adopt.",
    description:
      "Design CI/CD pipelines, infrastructure-as-code, and observability for enterprise client environments.",
    responsibilities: [
      "Design and maintain CI/CD pipelines, staging environments, and release workflows",
      "Implement infrastructure-as-code with Terraform or similar tooling",
      "Establish monitoring, alerting, and incident response practices for client systems",
      "Partner with engineers on containerization, secrets management, and cost optimization",
      "Document runbooks and security controls for audit-ready client delivery",
    ],
    requirements: [
      "6+ years in DevOps, platform, or SRE roles",
      "Production experience with AWS, Azure, or GCP",
      "Strong skills in Terraform, Docker, and Kubernetes or managed container services",
      "Experience building GitHub Actions, GitLab CI, or comparable pipeline tooling",
      "Understanding of networking, IAM, and security best practices",
    ],
    niceToHave: [
      "SOC 2 or HIPAA-aligned environment experience",
      "Background supporting multi-tenant or multi-client infrastructure",
      "Scripting proficiency in Python, Bash, or Go",
    ],
  },
  {
    id: "product-designer",
    title: "Senior UX/UI Designer",
    department: "Design",
    location: "Colorado",
    type: "Full-time",
    level: "Senior",
    description:
      "Shape digital products for clients – research, wireframes, design systems, and developer handoff.",
    overview:
      "You'll lead design for client products from discovery through developer handoff. You balance user research, visual craft, and pragmatic delivery – producing systems and specs engineers can build against without guesswork.",
    responsibilities: [
      "Run discovery sessions, user flows, and wireframes for new client products",
      "Create high-fidelity UI in Figma with accessible, responsive patterns",
      "Build and maintain design systems shared across client engagements",
      "Partner with engineers on feasibility, edge cases, and QA before release",
      "Present design rationale in client reviews and sprint demos",
    ],
    requirements: [
      "5+ years in product, UX, or UI design roles",
      "Strong portfolio showing end-to-end product work",
      "Expert Figma skills including components, variants, and dev-ready specs",
      "Experience collaborating closely with engineering teams",
      "Solid understanding of web and mobile interaction patterns",
    ],
    niceToHave: [
      "Front-end prototyping skills (HTML/CSS or React)",
      "Experience in regulated industries such as healthcare or finance",
      "Facilitation experience for workshops and usability testing",
    ],
  },
  {
    id: "delivery-manager",
    title: "Technical Delivery Manager",
    department: "Delivery",
    location: "Colorado",
    type: "Full-time",
    level: "Senior",
    description:
      "Own sprint planning, stakeholder communication, and on-time delivery across multiple client engagements.",
    overview:
      "You'll be the operational backbone for one or more client squads – keeping schedules honest, risks visible, and stakeholders aligned. You understand software delivery deeply enough to translate between engineers, designers, and client leadership.",
    responsibilities: [
      "Own sprint planning, backlog grooming, and release coordination",
      "Track milestones, budgets, and scope with clear client-facing reporting",
      "Facilitate standups, retros, and escalation paths when blockers appear",
      "Partner with sales and engineering leads on staffing and timeline estimates",
      "Ensure documentation, acceptance criteria, and sign-offs stay current",
    ],
    requirements: [
      "5+ years in technical program, delivery, or engineering management roles",
      "Experience shipping software in agile environments",
      "Strong stakeholder communication with technical and non-technical audiences",
      "Comfort reading technical plans and identifying delivery risk early",
      "Organized, proactive, and calm under competing priorities",
    ],
    niceToHave: [
      "PMP, Scrum Master, or comparable certification",
      "Prior agency or consulting delivery experience",
      "Background as a developer or designer before moving into delivery",
    ],
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
    overview:
      "You'll grow Tek4Real's pipeline by identifying fit, building relationships, and closing engagements that match our delivery strengths. You partner with technical leaders on scoping and proposals – selling outcomes, not slide decks.",
    responsibilities: [
      "Build and manage a qualified pipeline of mid-market and enterprise prospects",
      "Lead discovery calls and translate business goals into engagement outlines",
      "Coordinate proposals, SOWs, and pricing with delivery and leadership",
      "Represent Tek4Real at events, referrals, and partner introductions",
      "Maintain CRM hygiene and accurate forecasting for leadership reviews",
    ],
    requirements: [
      "5+ years in B2B sales or business development, ideally in technology services",
      "Proven track record closing deals $100k+ in annual contract value",
      "Ability to discuss technical concepts credibly with engineering buyers",
      "Strong writing skills for proposals and follow-up communication",
      "Self-directed work style in a remote-friendly environment",
    ],
    niceToHave: [
      "Existing network in healthcare, fintech, or SaaS verticals",
      "Experience selling agency, consulting, or managed squad models",
      "Familiarity with HubSpot, Salesforce, or similar CRM platforms",
    ],
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
    overview:
      "You'll own the post-sale relationship for APAC clients – ensuring engagements stay healthy, value stays visible, and expansion opportunities surface early. You are the client's trusted point of contact between leadership and delivery teams.",
    responsibilities: [
      "Run QBRs and health checks for assigned client accounts",
      "Monitor satisfaction, utilization, and renewal timelines proactively",
      "Coordinate issue resolution across delivery, engineering, and leadership",
      "Identify upsell and cross-sell opportunities aligned to client roadmaps",
      "Capture feedback that improves delivery playbooks studio-wide",
    ],
    requirements: [
      "3+ years in client success, account management, or consulting",
      "Experience supporting technology or professional services clients",
      "Excellent communication across US and APAC time zones",
      "Detail-oriented with strong follow-through on action items",
      "Comfort discussing project status, budgets, and scope trade-offs",
    ],
    niceToHave: [
      "Mandarin or Cantonese language skills",
      "Background in software delivery or technical account management",
      "Experience in Hong Kong or broader APAC markets",
    ],
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

export const trustBadges = [
  "AWS · Azure · GCP",
  "TypeScript & React",
  "Secure SDLC",
  "HIPAA-aligned delivery",
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
  twitter: "https://twitter.com/tek4real",
  linkedin: "https://linkedin.com/company/tek4real",
  github: "https://github.com/tek4real",
  youtube: "https://youtube.com/@tek4real",
} as const;
