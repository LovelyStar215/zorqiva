import { brand } from "./brand";

export type FaqItem = { q: string; a: string };

export type FaqSection = { title: string; lede?: string; items: FaqItem[] };

export const faqSections: FaqSection[] = [
  {
    title: "Getting started",
    lede: "How to begin a project, what to expect from first contact, and how we scope engagements.",
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
        q: "What happens on a discovery call?",
        a: "We learn your goals, timeline, and constraints — then outline a recommended engagement model, team shape, and next steps. No obligation.",
      },
      {
        q: "Do you sign NDAs before discussing projects?",
        a: "Yes — we're happy to sign a mutual NDA before any detailed technical discussion.",
      },
      {
        q: "What services do you offer?",
        a: "Custom software development, cloud infrastructure, UI/UX design, and AI engineering — delivered by cross-functional squads. See our Services page for detail.",
      },
      {
        q: "Can I visit your offices?",
        a: `Yes. Email ${brand.contactEmail} to schedule an in-person session at our Texas or Hong Kong headquarters.`,
      },
    ],
  },
  {
    title: "Engagement & pricing",
    lede: "Project-based builds, monthly retainers, and dedicated squads — how each model works.",
    items: [
      {
        q: "What engagement models do you offer?",
        a: "Three options: fixed-scope projects (MVPs and one-off builds), monthly retainers (ongoing development), and dedicated squads (long-term cross-functional teams).",
      },
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
      {
        q: "How do you price projects?",
        a: "Projects are quoted after discovery based on scope, timeline, and team composition. Retainers and squads are priced monthly with transparent hour allocations.",
      },
      {
        q: "Do you offer post-launch support?",
        a: "Yes. Every project includes a 30-day warranty. Ongoing support is available through retainer or dedicated squad engagements.",
      },
    ],
  },
  {
    title: "Working with us",
    lede: "How our teams collaborate across Texas, Hong Kong, and remote.",
    items: [
      {
        q: "Where are you based?",
        a: "We operate from two headquarters — Texas (Americas) and Hong Kong (APAC). Our teams work across US and APAC time zones with remote-friendly collaboration.",
      },
      {
        q: "What does a typical team look like?",
        a: "A senior engineer, designer, and delivery lead at minimum — scaled up with DevOps, QA, or specialists as the project requires. No junior-only staffing.",
      },
      {
        q: "How do you communicate during a project?",
        a: "Weekly demos, shared Slack or Teams channels, and a dedicated delivery lead as your single point of contact. Async updates keep stakeholders informed between syncs.",
      },
      {
        q: "What tech stacks do you work with?",
        a: "TypeScript, React, Node.js, Python, cloud-native infrastructure (AWS, Azure, GCP), Kubernetes, PostgreSQL, and modern CI/CD — chosen to fit your project, not a one-size template.",
      },
      {
        q: "Do you handle security and compliance?",
        a: "Yes. We follow secure SDLC practices, maintain SOC 2 Type II and ISO 27001 certifications, and have experience with HIPAA-aligned and regulated industry work.",
      },
    ],
  },
  {
    title: "Privacy & legal",
    lede: "How we handle your data and website policies.",
    items: [
      {
        q: "How do you handle my data?",
        a: "We collect only what's needed to respond to inquiries and deliver services. We do not sell personal information. See our Privacy Policy for full details.",
      },
      {
        q: "Does this site use cookies?",
        a: "We use essential cookies for site functionality and optional analytics cookies. See our Cookie Policy to learn more and manage preferences.",
      },
      {
        q: "Who owns the code you build?",
        a: "Unless otherwise agreed in your statement of work, you own deliverables created for your project upon full payment. We retain rights to pre-existing tools and frameworks.",
      },
    ],
  },
];

export const pricingFaqs: FaqItem[] = faqSections.find(
  (s) => s.title === "Engagement & pricing",
)!.items;

export const contactFaqs: FaqItem[] = faqSections
  .find((s) => s.title === "Getting started")!
  .items.slice(0, 4);
