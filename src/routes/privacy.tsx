import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { brand, hqOffices } from "@/lib/brand";
import { pageSeo, pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageSeo({
      title: pageTitle("Privacy Policy", "Tek4Real"),
      description: "How Tek4Real collects, uses, and protects your data.",
      path: "/privacy",
    }),
  component: () => (
    <LegalPage title="Privacy Policy" updated="July 1, 2026">
      <p>
        Tek4Real, Inc. (&ldquo;Tek4Real&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
        privacy. This policy describes how we collect, use, and safeguard information when you use
        our website and engage our services.
      </p>
      <h2>Information we collect</h2>
      <p>
        We collect information you provide directly (such as name, email, and company when you
        contact us about a project), project-related data necessary to deliver our services, and
        technical data including IP address and browser type for security and analytics.
      </p>
      <h2>How we use information</h2>
      <p>
        We use your information to provide and improve our services, respond to inquiries, send
        relevant communications (with your consent), and maintain security and compliance
        obligations.
      </p>
      <h2>Data sharing</h2>
      <p>
        We do not sell personal information. We share data with subprocessors under contract who
        help us deliver services, and when required by law.
      </p>
      <h2>Cookies</h2>
      <p>
        We use cookies and similar technologies on our website. For details on the types of cookies
        we use and how to manage them, see our{" "}
        <Link to="/cookies" className="text-primary font-semibold hover:underline">
          Cookie Policy
        </Link>
        .
      </p>
      <h2>Your rights</h2>
      <p>
        Depending on your jurisdiction, you may have rights to access, correct, delete, or export
        your personal data. Contact {brand.contactEmail} to exercise these rights.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Email {brand.contactEmail} or write to {brand.legalName},{" "}
        {hqOffices.americas.addressInline}.
      </p>
    </LegalPage>
  ),
});
