import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Verdian" },
      { name: "description", content: "Terms governing use of the Verdian platform and website." },
    ],
  }),
  component: () => (
    <LegalPage title="Terms of Service" updated="July 1, 2026">
      <p>
        These Terms of Service ("Terms") govern your access to and use of Verdian's website,
        platform, and related services. By using Verdian, you agree to these Terms.
      </p>
      <h2>Service description</h2>
      <p>
        Verdian provides a unified CRM and ERP platform. Features, availability, and pricing are
        described on our website and in your order form or subscription agreement.
      </p>
      <h2>Acceptable use</h2>
      <p>
        You may not misuse the service, attempt unauthorized access, interfere with other users, or
        use Verdian in violation of applicable law. Enterprise customers may have additional terms
        in their master subscription agreement.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Verdian retains all rights to the platform, documentation, and branding. You retain
        ownership of your data. You grant Verdian a limited license to process your data solely to
        provide the service.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Verdian's liability is limited to the fees paid by
        you in the twelve months preceding the claim. We provide the service "as is" except as
        expressly stated in your agreement.
      </p>
      <h2>Contact</h2>
      <p>Questions about these Terms? Email legal@verdian.io.</p>
    </LegalPage>
  ),
});
