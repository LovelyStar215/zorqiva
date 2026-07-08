import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { LegalPage } from "@/components/site/LegalPage";
import { complianceBadges } from "@/lib/site-data";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — Verdian" },
      {
        name: "description",
        content: "Verdian security practices, certifications, and compliance.",
      },
    ],
  }),
  component: SecurityPage,
});

const practices = [
  {
    icon: "solar:lock-keyhole-bold",
    title: "Encryption everywhere",
    desc: "AES-256 at rest, TLS 1.3 in transit. Customer-managed keys available on Enterprise.",
  },
  {
    icon: "solar:shield-check-bold",
    title: "Certified compliance",
    desc: "SOC 2 Type II, HIPAA, GDPR, and ISO 27001 with annual third-party audits.",
  },
  {
    icon: "solar:user-id-bold",
    title: "Granular access control",
    desc: "Role-based permissions, SSO/SAML, SCIM provisioning, and field-level security.",
  },
  {
    icon: "solar:history-bold",
    title: "Immutable audit trails",
    desc: "Every change logged with actor, timestamp, and before/after state — SOX-ready.",
  },
];

function SecurityPage() {
  return (
    <LegalPage title="Security & Compliance" updated="July 1, 2026">
      <p>
        Security is not a feature tier at Verdian — it's foundational. Our platform is designed for
        regulated industries and enterprise operators who require audit-grade controls from day one.
      </p>
      <div className="not-prose grid sm:grid-cols-2 gap-4 my-10">
        {practices.map((p) => (
          <div key={p.title} className="border border-border rounded-2xl p-6 bg-card">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center mb-3">
              <Icon icon={p.icon} className="text-xl" />
            </div>
            <div className="font-serif text-lg text-[color:var(--ink)]">{p.title}</div>
            <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
      <h2>Certifications</h2>
      <div className="not-prose flex flex-wrap gap-3 my-6">
        {complianceBadges.map((b) => (
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
        If you discover a security vulnerability, please report it to security@verdian.io. We
        acknowledge reports within 24 hours and maintain a coordinated disclosure process.
      </p>
      <h2>Request documentation</h2>
      <p>
        Enterprise customers can request our SOC 2 report, penetration test summary, and
        subprocessor list.{" "}
        <Link to="/contact" className="text-primary font-semibold hover:underline">
          Contact our team
        </Link>{" "}
        for access.
      </p>
    </LegalPage>
  );
}
