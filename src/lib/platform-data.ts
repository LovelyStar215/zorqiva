export const platformModules = [
  {
    id: "dev",
    label: "Custom Development",
    icon: "solar:code-bold",
    headline: "Web & mobile apps built for scale.",
    desc: "Full-stack engineering from MVP to enterprise — React, Node, mobile, and APIs tailored to your roadmap.",
    metrics: [
      { label: "Projects shipped", value: "180+" },
      { label: "Avg. sprint velocity", value: "+32%" },
      { label: "Client NPS", value: "72" },
    ],
    rows: [
      {
        name: "Halcyon — Patient Portal",
        stage: "In progress",
        value: "Sprint 6",
        signal: "On track",
      },
      { name: "Northstar — Storefront", stage: "Shipped", value: "v2.4", signal: "Live" },
      { name: "Meridian — Admin Dashboard", stage: "Review", value: "UAT", signal: "Sign-off" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "solar:cloud-bold",
    headline: "Infrastructure that ships reliably.",
    desc: "AWS, Azure, and GCP — CI/CD, Kubernetes, monitoring, and cost optimization from day one.",
    metrics: [
      { label: "Deploy frequency", value: "Daily" },
      { label: "Incidents reduced", value: "−68%" },
      { label: "Cloud savings", value: "−24%" },
    ],
    rows: [
      {
        name: "Meridian — K8s migration",
        stage: "Complete",
        value: "3 clusters",
        signal: "Stable",
      },
      { name: "Northstar — CI/CD pipeline", stage: "Live", value: "12 min", signal: "Build time" },
      { name: "Halcyon — HIPAA env", stage: "Active", value: "SOC 2", signal: "Compliant" },
    ],
  },
  {
    id: "design",
    label: "UI/UX Design",
    icon: "solar:palette-bold",
    headline: "Interfaces users actually love.",
    desc: "Research, wireframes, design systems, and pixel-perfect handoff — product design as a discipline.",
    metrics: [
      { label: "Design systems", value: "45+" },
      { label: "Usability uplift", value: "+41%" },
      { label: "Handoff time", value: "−60%" },
    ],
    rows: [
      {
        name: "Northstar — Design system",
        stage: "Shipped",
        value: "48 components",
        signal: "Adopted",
      },
      {
        name: "Halcyon — Mobile UX audit",
        stage: "Complete",
        value: "28 fixes",
        signal: "Resolved",
      },
      { name: "Meridian — Prototype v3", stage: "Review", value: "Figma", signal: "Approved" },
    ],
  },
  {
    id: "ai",
    label: "AI & Data",
    icon: "solar:brain-bold",
    headline: "Intelligent products, responsibly built.",
    desc: "LLM integrations, data pipelines, analytics dashboards, and ML features with guardrails built in.",
    metrics: [
      { label: "AI features shipped", value: "60+" },
      { label: "Data pipelines", value: "120+" },
      { label: "Query latency", value: "<200ms" },
    ],
    rows: [
      { name: "Meridian — Doc classifier", stage: "Live", value: "97.2%", signal: "Accuracy" },
      { name: "Halcyon — Chat assistant", stage: "Beta", value: "4.8★", signal: "User rating" },
      {
        name: "Northstar — Sales forecast",
        stage: "Training",
        value: "v1.2",
        signal: "In progress",
      },
    ],
  },
] as const;

export const liveEvents = [
  { time: "Just now", event: "Halcyon portal deployed to staging", module: "Development" },
  { time: "3m ago", event: "Northstar CI pipeline — build passed", module: "DevOps" },
  { time: "7m ago", event: "Meridian design system — 3 new components", module: "Design" },
  { time: "12m ago", event: "Halcyon AI assistant — 240 queries today", module: "AI & Data" },
  { time: "18m ago", event: "Northstar infra — auto-scaled to 8 nodes", module: "DevOps" },
  { time: "25m ago", event: "Sprint review with Meridian team", module: "Delivery" },
] as const;

export const enterpriseMatrix = [
  {
    capability: "Team composition",
    legacy: "Freelancer patchwork",
    verdian: "Senior cross-functional squad",
  },
  { capability: "Time to start", legacy: "2–3 months hiring", verdian: "2 weeks to kickoff" },
  {
    capability: "Code quality",
    legacy: "Inconsistent standards",
    verdian: "Reviewed, tested, documented",
  },
  {
    capability: "Design & dev alignment",
    legacy: "Separate handoffs",
    verdian: "Unified workflow",
  },
  {
    capability: "Post-launch support",
    legacy: "None or ad-hoc",
    verdian: "Retainer & SLA options",
  },
  {
    capability: "Security practices",
    legacy: "Varies by contractor",
    verdian: "SOC 2-aligned SDLC",
  },
  { capability: "Scalability", legacy: "Short-term fixes", verdian: "Architecture for growth" },
] as const;

export const apiExample = `// Modern stack we ship for clients every day
import { createServerFn } from "@tanstack/react-start";

export const getProjects = createServerFn().handler(async () => {
  const projects = await db.project.findMany({
    where: { status: "active" },
    include: { team: true, milestones: true },
  });
  return projects;
});

// Deployed on AWS with CI/CD, monitoring, and auto-scaling
// Designed, built, and maintained by Verdian`;

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
