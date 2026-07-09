import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { brand } from "@/lib/brand";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageSeo({
      title: "Terms of Service — Tek4Real",
      description: "Terms governing use of the Tek4Real website and services.",
      path: "/terms",
    }),
  component: () => (
    <LegalPage title="Terms of Service" updated="July 1, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
        Tek4Real&apos;s website and professional services. By engaging Tek4Real, you agree to these
        Terms.
      </p>
      <h2>Service description</h2>
      <p>
        Tek4Real provides IT consulting and software development services including custom
        application development, cloud infrastructure, UI/UX design, and managed services. Scope,
        deliverables, and fees are defined in your statement of work or master services agreement.
      </p>
      <h2>Acceptable use</h2>
      <p>
        You may not misuse our services, attempt unauthorized access to our systems, or use Tek4Real
        deliverables in violation of applicable law. Client-specific terms may be defined in your
        services agreement.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Unless otherwise agreed in writing, client owns deliverables created specifically for their
        project upon full payment. Tek4Real retains rights to pre-existing tools, frameworks, and
        methodologies. Tek4Real branding and website content remain our property.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Tek4Real&apos;s liability is limited to the fees
        paid by you in the twelve months preceding the claim, except as expressly stated in your
        services agreement.
      </p>
      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Texas, without regard to
        conflict-of-law principles, except where your services agreement specifies otherwise.
      </p>
      <h2>Related policies</h2>
      <p>
        Our{" "}
        <Link to="/privacy" className="text-primary font-semibold hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link to="/cookies" className="text-primary font-semibold hover:underline">
          Cookie Policy
        </Link>{" "}
        describe how we handle personal data and website cookies.
      </p>
      <h2>Contact</h2>
      <p>Questions about these Terms? Email {brand.contactEmail}.</p>
    </LegalPage>
  ),
});
