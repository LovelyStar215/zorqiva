import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Verdian" },
      { name: "description", content: "How Verdian collects, uses, and protects your data." },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy" updated="July 1, 2026">
      <p>
        Verdian Systems, Inc. ("Verdian", "we", "us") respects your privacy. This policy describes
        how we collect, use, and safeguard information when you use our website and platform.
      </p>
      <h2>Information we collect</h2>
      <p>
        We collect information you provide directly (such as name, email, and company when you
        request a demo), usage data from our platform, and technical data including IP address and
        browser type for security and analytics.
      </p>
      <h2>How we use information</h2>
      <p>
        We use your information to provide and improve our services, respond to inquiries, send
        product communications (with your consent), and maintain security and compliance
        obligations.
      </p>
      <h2>Data sharing</h2>
      <p>
        We do not sell personal information. We share data with subprocessors under contract who
        help us operate our platform, and when required by law.
      </p>
      <h2>Your rights</h2>
      <p>
        Depending on your jurisdiction, you may have rights to access, correct, delete, or export
        your personal data. Contact privacy@verdian.io to exercise these rights.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Email privacy@verdian.io or write to Verdian Systems, Inc., 500
        W 2nd Street, Suite 1900, Austin, TX 78701.
      </p>
    </LegalPage>
  ),
});
