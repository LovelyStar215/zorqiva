import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { Layout, PageHero } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import dashboardMock from "@/assets/dashboard-mock.jpg";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — Verdian" },
      { name: "description", content: "Explore the Verdian platform: unified CRM, ERP, finance, workflows, and AI on one intelligent graph." },
      { property: "og:title", content: "Verdian Platform" },
      { property: "og:description", content: "The unified CRM + ERP graph for modern operators." },
    ],
  }),
  component: PlatformPage,
});

const modules = [
  { i: "solar:users-group-two-rounded-bold", t: "Revenue CRM", d: "Accounts, contacts, deals, forecasting, quotes, and buyer signals." },
  { i: "solar:chart-square-bold", t: "General Ledger", d: "Multi-entity, multi-currency GL with continuous close." },
  { i: "solar:card-recive-bold", t: "AR & Billing", d: "Recurring, usage, and milestone billing across every channel." },
  { i: "solar:card-send-bold", t: "AP & Spend", d: "Purchase orders, approvals, and vendor payments in one flow." },
  { i: "solar:box-bold", t: "Inventory & WMS", d: "SKU management, replenishment, and warehouse orchestration." },
  { i: "solar:target-bold", t: "Marketing Ops", d: "Segmentation, journeys, and attribution built on the same graph." },
  { i: "solar:case-round-bold", t: "Projects & Services", d: "Time, resourcing, and revenue recognition for services teams." },
  { i: "solar:user-hand-up-bold", t: "People & HR", d: "Hire-to-retire with payroll partners and equity tracking." },
  { i: "solar:brain-bold", t: "Verdian AI", d: "Native agents for every module — no separate copilot to license." },
  { i: "solar:layers-bold", t: "Workflow Studio", d: "No-code automation with 400+ triggers and actions." },
  { i: "solar:shield-check-bold", t: "Governance", d: "SOC 2, HIPAA, SOX-ready audit trails and RBAC." },
  { i: "solar:global-bold", t: "Open API", d: "GraphQL, webhooks, SDKs, and 300+ prebuilt connectors." },
];

function PlatformPage() {
  const scope = useGsapReveal();
  return (
    <Layout>
      <div ref={scope}>
        <PageHero
          eyebrow="The Platform"
          title="One graph. Every discipline. Zero seams."
          lede="Verdian is a native platform where every module — CRM, ERP, finance, inventory, workflows, AI — shares the same objects, permissions, and workflow engine."
        />
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-lift)]" data-reveal>
            <img src={dashboardMock} alt="Platform" className="w-full" width={1600} height={1100} loading="lazy" />
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-reveal-stagger>
            {modules.map((m) => (
              <div key={m.t} className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                  <Icon icon={m.i} className="text-2xl" />
                </div>
                <div className="font-serif text-xl text-[color:var(--ink)]">{m.t}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-card/60 border-y border-border/60 py-24">
          <div className="max-w-5xl mx-auto px-6 text-center" data-reveal>
            <h2 className="font-serif text-4xl text-[color:var(--ink)]">Built on a truly unified data model</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              An account created in sales is the same account paid by finance and shipped to by ops. No sync jobs, no drift, no reconciliation.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold shadow-[var(--shadow-soft)]">
              Talk to an engineer <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}