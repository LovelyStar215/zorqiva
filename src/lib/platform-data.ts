export const serviceAreas = [
  {
    id: "dev",
    label: "Custom Development",
    icon: "solar:code-bold",
    headline: "Web & mobile apps built for scale.",
    desc: "Full-stack engineering from MVP to enterprise — React, Node, mobile, and APIs tailored to your roadmap.",
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "solar:cloud-bold",
    headline: "Infrastructure that ships reliably.",
    desc: "AWS, Azure, and GCP — CI/CD, Kubernetes, monitoring, and cost optimization from day one.",
  },
  {
    id: "design",
    label: "UI/UX Design",
    icon: "solar:palette-bold",
    headline: "Interfaces users actually love.",
    desc: "Research, wireframes, design systems, and pixel-perfect handoff — product design as a discipline.",
  },
  {
    id: "ai",
    label: "AI & Data",
    icon: "solar:brain-bold",
    headline: "Intelligent products, responsibly built.",
    desc: "LLM integrations, data pipelines, analytics dashboards, and ML features with guardrails built in.",
  },
] as const;

export const enterpriseMatrix = [
  {
    capability: "Team composition",
    legacy: "Freelancer patchwork",
    withTek4Real: "Senior cross-functional squad",
  },
  { capability: "Time to start", legacy: "2–3 months hiring", withTek4Real: "2 weeks to kickoff" },
  {
    capability: "Code quality",
    legacy: "Inconsistent standards",
    withTek4Real: "Reviewed, tested, documented",
  },
  {
    capability: "Design & dev alignment",
    legacy: "Separate handoffs",
    withTek4Real: "Unified workflow",
  },
  {
    capability: "Post-launch support",
    legacy: "None or ad-hoc",
    withTek4Real: "Retainer & SLA options",
  },
  {
    capability: "Security practices",
    legacy: "Varies by contractor",
    withTek4Real: "SOC 2-aligned SDLC",
  },
  {
    capability: "Scalability",
    legacy: "Short-term fixes",
    withTek4Real: "Architecture for growth",
  },
] as const;

export const advancedCapabilities = [
  {
    icon: "solar:code-bold",
    title: "Full-Stack Engineering",
    desc: "React, Next.js, Node, Python, and mobile — from greenfield builds to legacy modernization.",
    spec: "TypeScript · React · Node · PostgreSQL",
  },
  {
    icon: "solar:cloud-bold",
    title: "Cloud Infrastructure",
    desc: "AWS, Azure, and GCP with Terraform, Kubernetes, and production-grade observability.",
    spec: "AWS Partner · Terraform · K8s",
  },
  {
    icon: "solar:palette-bold",
    title: "Product Design",
    desc: "User research, UX strategy, design systems, and prototyping — design that developers can ship.",
    spec: "Figma · Design systems · A11y",
  },
  {
    icon: "solar:brain-bold",
    title: "AI Integration",
    desc: "LLM-powered features, chatbots, document processing, and custom ML pipelines with responsible guardrails.",
    spec: "OpenAI · LangChain · Vector DBs",
  },
  {
    icon: "solar:shield-check-bold",
    title: "Security & Compliance",
    desc: "Secure SDLC, penetration testing coordination, HIPAA/SOC 2-aligned practices for regulated industries.",
    spec: "SOC 2 · HIPAA · OWASP",
  },
  {
    icon: "solar:settings-bold",
    title: "Managed Services",
    desc: "Ongoing maintenance, monitoring, incident response, and feature development on retainer.",
    spec: "24/7 monitoring · SLAs",
  },
] as const;
