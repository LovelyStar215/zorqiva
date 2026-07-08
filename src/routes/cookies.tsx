import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Verdian" },
      {
        name: "description",
        content: "How Verdian uses cookies and similar technologies on our website.",
      },
    ],
  }),
  component: () => (
    <LegalPage title="Cookie Policy" updated="July 1, 2026">
      <p>
        This Cookie Policy explains how Verdian Digital, Inc. (&ldquo;Verdian&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;) uses cookies and similar technologies when you visit
        verdian.io and related pages.
      </p>
      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help sites
        remember preferences, keep sessions secure, and understand how visitors use pages.
      </p>
      <h2>How we use cookies</h2>
      <p>We use the following categories of cookies:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Essential cookies</strong> — required for core site functionality such as
          navigation and security. These cannot be disabled.
        </li>
        <li>
          <strong>Analytics cookies</strong> — help us understand traffic patterns and improve the
          site. These are only set if you consent where required by law.
        </li>
        <li>
          <strong>Preference cookies</strong> — remember choices such as display settings when
          applicable.
        </li>
      </ul>
      <h2>Third-party cookies</h2>
      <p>
        Some embedded content or analytics providers may set their own cookies. We limit third-party
        scripts to reputable services and review them periodically. See our{" "}
        <Link to="/privacy" className="text-primary font-semibold hover:underline">
          Privacy Policy
        </Link>{" "}
        for how we handle personal data.
      </p>
      <h2>Managing cookies</h2>
      <p>
        You can control cookies through your browser settings — most browsers let you block or
        delete cookies. Blocking essential cookies may affect site functionality. Where required, we
        will ask for consent before setting non-essential cookies.
      </p>
      <h2>Updates</h2>
      <p>
        We may update this policy as our site or regulations change. Material changes will be
        reflected in the &ldquo;Last updated&rdquo; date above.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about cookies? Email privacy@verdian.io or see our{" "}
        <Link to="/privacy" className="text-primary font-semibold hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </LegalPage>
  ),
});
