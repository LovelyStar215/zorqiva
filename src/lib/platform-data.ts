export const platformModules = [
  {
    id: "crm",
    label: "Revenue CRM",
    icon: "solar:users-group-two-rounded-bold",
    headline: "Pipeline that reconciles to the ledger.",
    desc: "Every deal, account, and forecast writes directly to finance — no sync jobs, no drift.",
    metrics: [
      { label: "Forecast accuracy", value: "94.2%" },
      { label: "Pipeline velocity", value: "+18%" },
      { label: "Accounts synced", value: "12,400" },
    ],
    rows: [
      {
        name: "Halcyon Bio — Enterprise",
        stage: "Negotiation",
        value: "$840K",
        signal: "High intent",
      },
      {
        name: "Northstar — Expansion",
        stage: "Proposal",
        value: "$320K",
        signal: "Champion active",
      },
      { name: "Meridian SaaS — New", stage: "Discovery", value: "$180K", signal: "Multi-thread" },
    ],
  },
  {
    id: "finance",
    label: "Finance & ERP",
    icon: "solar:chart-square-bold",
    headline: "Continuous close. Multi-entity native.",
    desc: "GL, AP, AR, and consolidation on one ledger — close in days, not weeks.",
    metrics: [
      { label: "Close cycle", value: "4 days" },
      { label: "Entities", value: "24" },
      { label: "Currencies", value: "18" },
    ],
    rows: [
      { name: "Verdian US Inc.", stage: "Closed", value: "$89.2M", signal: "SOX-ready" },
      { name: "Verdian UK Ltd.", stage: "Closed", value: "£12.4M", signal: "Audited" },
      { name: "Verdian SG Pte.", stage: "Review", value: "S$8.1M", signal: "Pending sign-off" },
    ],
  },
  {
    id: "ai",
    label: "Verdian AI",
    icon: "solar:brain-bold",
    headline: "Agents that act — not just answer.",
    desc: "Copilots draft outreach, revise forecasts, and execute workflows with human approval.",
    metrics: [
      { label: "Actions / week", value: "2,840" },
      { label: "Time saved", value: "680 hrs" },
      { label: "Accuracy", value: "97.1%" },
    ],
    rows: [
      { name: "Renewal risk — 3 accounts", stage: "Draft ready", value: "—", signal: "Approve" },
      { name: "Q4 forecast revision", stage: "Complete", value: "+4.2%", signal: "View" },
      { name: "Board narrative v3", stage: "Generated", value: "12 slides", signal: "Edit" },
    ],
  },
  {
    id: "ops",
    label: "Inventory & Ops",
    icon: "solar:box-bold",
    headline: "Ops and finance in real time.",
    desc: "Stock levels, POs, and fulfillment update the moment a transaction lands.",
    metrics: [
      { label: "SKU accuracy", value: "99.7%" },
      { label: "Fill rate", value: "98.2%" },
      { label: "Warehouses", value: "14" },
    ],
    rows: [
      { name: "SKU-8842 — Widget Pro", stage: "Low stock", value: "142 units", signal: "Reorder" },
      { name: "PO-2024-1847", stage: "In transit", value: "$48K", signal: "ETA 2d" },
      { name: "WH-Austin — Zone B", stage: "Optimal", value: "94%", signal: "Healthy" },
    ],
  },
] as const;

export const liveEvents = [
  { time: "Just now", event: "Invoice #8847 reconciled to GL", module: "Finance" },
  { time: "2m ago", event: "Deal moved to Closed Won — $840K", module: "CRM" },
  { time: "5m ago", event: "AI agent drafted renewal outreach (3 accounts)", module: "AI" },
  { time: "8m ago", event: "PO-2024-1847 received at WH-Austin", module: "Ops" },
  { time: "12m ago", event: "Entity UK Ltd. close signed off", module: "Finance" },
  { time: "18m ago", event: "Workflow: Quote-to-cash completed", module: "Workflow" },
] as const;

export const enterpriseMatrix = [
  { capability: "Unified data model", legacy: "12+ sync jobs", verdian: "Native graph" },
  { capability: "Month-end close", legacy: "15–19 days", verdian: "3–5 days" },
  { capability: "AI copilots", legacy: "Separate add-on", verdian: "Built-in" },
  { capability: "Multi-entity", legacy: "Manual consolidation", verdian: "Real-time" },
  { capability: "Audit trail", legacy: "Partial logs", verdian: "Immutable" },
  { capability: "Workflow automation", legacy: "3rd-party iPaaS", verdian: "Native studio" },
  {
    capability: "API & extensibility",
    legacy: "Limited REST",
    verdian: "GraphQL + 300+ connectors",
  },
] as const;

export const apiExample = `// Query the unified graph — one API for CRM, finance, and ops
const { data } = await verdian.query({
  entity: "Account",
  include: ["deals", "invoices", "inventory"],
  filter: { revenue: { gt: 1_000_000 } },
});

// AI agent — approve and execute
await verdian.ai.execute({
  agent: "renewal-copilot",
  action: "draft_outreach",
  accounts: data.accounts.atRisk,
  requireApproval: true,
});`;

export const advancedCapabilities = [
  {
    icon: "solar:graph-bold",
    title: "Unified Graph Engine",
    desc: "Every object — Account, Invoice, SKU, Employee — lives in one relational graph with shared permissions and lineage.",
    spec: "Sub-50ms query latency · 10B+ objects",
  },
  {
    icon: "solar:bolt-bold",
    title: "Event-Driven Core",
    desc: "Changes propagate in milliseconds across CRM, finance, and ops. No batch jobs. No reconciliation drift.",
    spec: "99.99% uptime · Multi-region",
  },
  {
    icon: "solar:code-bold",
    title: "GraphQL & Webhooks",
    desc: "Full programmatic access with typed SDKs, webhooks, and 300+ pre-built connectors to your existing stack.",
    spec: "REST · GraphQL · gRPC",
  },
  {
    icon: "solar:lock-password-bold",
    title: "Zero-Trust Governance",
    desc: "Field-level RBAC, SSO/SAML, SCIM, and immutable audit trails — SOC 2, HIPAA, and SOX-ready out of the box.",
    spec: "SOC 2 Type II · ISO 27001",
  },
  {
    icon: "solar:cpu-bold",
    title: "Verdian AI Runtime",
    desc: "Composable agents with tool access across every module. Human-in-the-loop approval on every action.",
    spec: "40+ pre-built agents",
  },
  {
    icon: "solar:server-bold",
    title: "Dedicated Environments",
    desc: "Single-tenant deployments for Enterprise with custom SLAs, data residency, and customer-managed keys.",
    spec: "US · EU · APAC regions",
  },
] as const;
