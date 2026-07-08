export type FaqItem = { q: string; a: string };

export type FaqSection = { title: string; items: FaqItem[] };

export const faqSections: FaqSection[] = [
  {
    title: "Getting started",
    items: [
      {
        q: "How quickly will I hear back?",
        a: "We respond within one business day. Discovery calls are typically scheduled within 48 hours.",
      },
      {
        q: "How quickly can you start a project?",
        a: "Most projects kick off within two weeks of signing. We keep a bench of senior talent ready to deploy.",
      },
      {
        q: "Do you sign NDAs before discussing projects?",
        a: "Yes — we're happy to sign a mutual NDA before any detailed technical discussion.",
      },
      {
        q: "Can I visit your offices?",
        a: "Absolutely. Email hello@verdian.io to schedule an in-person session at our Texas or Hong Kong headquarters.",
      },
    ],
  },
  {
    title: "Engagement & pricing",
    items: [
      {
        q: "What's included in a retainer?",
        a: "A set number of sprint hours per month across engineering, design, and DevOps — with flexible reallocation as priorities shift.",
      },
      {
        q: "Can we scale the team up or down?",
        a: "Absolutely. Retainers and dedicated squads are designed to flex with your roadmap and budget.",
      },
      {
        q: "Do you work with existing codebases?",
        a: "Yes. We regularly join mid-project — auditing code, stabilizing infrastructure, and shipping features on legacy stacks.",
      },
    ],
  },
  {
    title: "Privacy & legal",
    items: [
      {
        q: "How do you handle my data?",
        a: "We collect only what's needed to respond to inquiries and deliver services. See our Privacy Policy for full details.",
      },
      {
        q: "Does this site use cookies?",
        a: "We use essential cookies for site functionality and optional analytics cookies. See our Cookie Policy to learn more and manage preferences.",
      },
    ],
  },
];

export const pricingFaqs: FaqItem[] = faqSections.find((s) => s.title === "Engagement & pricing")!.items;

export const contactFaqs: FaqItem[] = faqSections.find((s) => s.title === "Getting started")!.items;
