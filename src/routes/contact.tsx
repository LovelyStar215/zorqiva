import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { ContactForm } from "@/components/site/ContactForm";
import { ChannelCard } from "@/components/site/ChannelCard";
import { Eyebrow, PremiumCard } from "@/components/site/primitives";
import { AustinVisual } from "@/components/site/Visuals";
import { offices } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Verdian" },
      {
        name: "description",
        content:
          "Talk to the Verdian team in Austin, Texas. Book a demo, reach sales, support, partnerships, or careers.",
      },
      { property: "og:title", content: "Contact Verdian" },
      { property: "og:description", content: "Book a demo or reach our team in Austin." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: "solar:calendar-bold",
    title: "Book a demo",
    desc: "30-minute session tailored to your business. See Verdian mapped to your stack live.",
    action: "Schedule via form",
    href: "#contact-form",
  },
  {
    icon: "solar:phone-bold",
    title: "Sales",
    desc: "Speak with our enterprise team about pricing, migration, and rollout.",
    action: "+1 (512) 555-0140",
    href: "tel:+15125550140",
  },
  {
    icon: "solar:letter-bold",
    title: "Email",
    desc: "General inquiries, product questions, and account support.",
    action: "hello@verdian.io",
    href: "mailto:hello@verdian.io",
  },
  {
    icon: "solar:hand-shake-bold",
    title: "Partnerships",
    desc: "Technology partners, integrators, and referral programs.",
    action: "partners@verdian.io",
    href: "mailto:partners@verdian.io",
  },
  {
    icon: "solar:headphones-round-bold",
    title: "Support",
    desc: "Existing customers — 24/7 for Enterprise plans.",
    action: "support@verdian.io",
    href: "mailto:support@verdian.io",
  },
  {
    icon: "solar:case-round-bold",
    title: "Careers",
    desc: "Join our team in Austin, New York, London, or Singapore.",
    action: "View open roles",
    href: "/careers",
  },
];

const faqs = [
  [
    "How quickly will I hear back?",
    "Our field team responds within one business day. Demo requests are typically scheduled within 48 hours.",
  ],
  [
    "Do you offer migration support?",
    "Yes — every Growth and Enterprise plan includes white-glove migration from your existing CRM, ERP, or billing stack.",
  ],
  [
    "Can I visit your Austin office?",
    "Absolutely. Email hello@verdian.io to schedule an in-person session at our HQ on West 2nd Street.",
  ],
];

function ContactPage() {
  const scope = useGsapReveal();

  return (
    <Layout>
      <div ref={scope}>
        <PageHero
          eyebrow="Contact"
          title="Let's build your operating system."
          lede="Whether you're exploring Verdian, migrating from a legacy stack, or scaling to IPO — our team is ready to help."
        >
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Icon icon="solar:clock-circle-bold" className="text-primary" /> Response within 1
              business day
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Icon icon="solar:map-point-bold" className="text-primary" /> Austin, TX · Global team
            </span>
          </div>
        </PageHero>

        {/* Contact channels */}
        <SectionShell className="!pt-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-reveal-stagger>
            {channels.map((c) => (
              <ChannelCard
                key={c.title}
                icon={c.icon}
                title={c.title}
                desc={c.desc}
                action={c.action}
                href={c.href}
              />
            ))}
          </div>
        </SectionShell>

        {/* Form + HQ */}
        <SectionShell tone="muted">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 xl:gap-16 items-start">
            <div data-reveal>
              <Eyebrow>Headquarters</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-[color:var(--ink)] leading-tight tracking-[-0.02em]">
                500 W 2nd Street
                <br />
                Austin, Texas 78701
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Our global HQ sits five blocks from the Colorado River in downtown Austin. We also
                operate hubs in New York, London, and Singapore — with field engineers available
                worldwide.
              </p>

              <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)]">
                <AustinVisual />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { i: "solar:clock-circle-bold", l: "Hours", v: "Mon–Fri, 8am–6pm CT" },
                  { i: "solar:global-bold", l: "Coverage", v: "US · EU · APAC" },
                ].map((item) => (
                  <div key={item.l} className="rounded-xl border border-border bg-card p-4">
                    <Icon icon={item.i} className="text-primary text-lg" />
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                      {item.l}
                    </div>
                    <div className="text-sm font-medium text-[color:var(--ink)] mt-0.5">
                      {item.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="contact-form"
              data-reveal
              className="scroll-mt-28 rounded-[1.25rem] border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-lift)] ring-1 ring-primary/5"
            >
              <ContactForm />
            </div>
          </div>
        </SectionShell>

        {/* Global offices */}
        <SectionShell>
          <Eyebrow>Global offices</Eyebrow>
          <h2
            className="font-serif text-3xl md:text-4xl text-[color:var(--ink)] tracking-[-0.02em] mb-10"
            data-reveal
          >
            Where we work.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-reveal-stagger>
            {offices.map((o) => (
              <PremiumCard key={o.city} className="!p-6">
                <div className="font-serif text-2xl text-[color:var(--ink)]">{o.city}</div>
                <div className="text-xs text-accent font-semibold mt-1 uppercase tracking-wider">
                  {o.role}
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{o.address}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">{o.country}</p>
              </PremiumCard>
            ))}
          </div>
        </SectionShell>

        {/* FAQ */}
        <SectionShell tone="muted">
          <div className="max-w-3xl mx-auto">
            <Eyebrow>Common questions</Eyebrow>
            <h2 className="font-serif text-3xl text-[color:var(--ink)] mb-8" data-reveal>
              Before you reach out.
            </h2>
            <div className="space-y-3" data-reveal-stagger>
              {faqs.map(([q, a]) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-border bg-card px-6 py-5 open:shadow-[var(--shadow-soft)] transition"
                >
                  <summary className="flex items-center justify-between cursor-pointer font-semibold text-[color:var(--ink)] text-[15px]">
                    {q}
                    <Icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-muted-foreground group-open:rotate-180 transition-transform"
                    />
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </SectionShell>
      </div>
    </Layout>
  );
}
