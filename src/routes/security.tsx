import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { LegalPage } from "@/components/site/LegalPage";
import { brand } from "@/lib/brand";
import { partnerBadges } from "@/lib/site-data";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — Tek4Real" },
      {
        name: "description",
        content: "Tek4Real security practices, certifications, and how we protect client projects.",
      },
    ],
  }),
  component: SecurityPage,
});

const practices = [
  {
    icon: "solar:lock-keyhole-bold",
    title: "Secure development lifecycle",
    desc: "Code review, dependency scanning, secrets management, and encrypted environments for every project.",
  },
  {
    icon: "solar:shield-check-bold",
    title: "Certified practices",
    desc: "SOC 2 Type II, ISO 27001, and HIPAA-aligned processes for regulated industry clients.",
  },
  {
    icon: "solar:user-id-bold",
    title: "Access control",
    desc: "Least-privilege access, MFA, SSO integration, and role-based permissions on all client systems.",
  },
  {
    icon: "solar:history-bold",
    title: "Audit-ready documentation",
    desc: "Change logs, deployment records, and security assessments available for client compliance reviews.",
  },
];

function SecurityPage() {
  return (
    <LegalPage title="Security & Compliance" updated="July 1, 2026">
      <p>
        Security is foundational to how we work. Every client engagement follows secure development
        practices — from code review and dependency scanning to encrypted infrastructure and access
        controls.
      </p>
      <div className="not-prose grid sm:grid-cols-2 gap-4 card-grid my-10">
        {practices.map((p) => (
          <div key={p.title} className="border border-border rounded-2xl p-6 bg-card h-full">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center mb-3">
              <Icon icon={p.icon} className="text-xl" />
            </div>
            <div className="font-serif text-lg text-(--ink)">{p.title}</div>
            <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
      <h2>Certifications & partnerships</h2>
      <div className="not-prose flex flex-wrap gap-3 my-6">
        {partnerBadges.map((b) => (
          <span
            key={b}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
          >
            <Icon icon="solar:verified-check-bold" className="text-primary" /> {b}
          </span>
        ))}
      </div>
      <h2>Responsible disclosure</h2>
      <p>
        If you discover a security vulnerability in our systems, please report it to{" "}
        {brand.contactEmail}. We acknowledge reports within 24 hours.
      </p>
      <h2>Client documentation</h2>
      <p>
        Retainer and dedicated squad clients can request our SOC 2 report, security questionnaire
        responses, and subprocessor list.{" "}
        <Link to="/contact" className="text-primary font-semibold hover:underline">
          Contact our team
        </Link>{" "}
        for access.
      </p>
    </LegalPage>
  );
}
