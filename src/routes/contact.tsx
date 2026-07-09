import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Layout, PageHero, SectionShell } from "@/components/site/Layout";
import { ContactForm } from "@/components/site/ContactForm";
import { ChannelCard } from "@/components/site/ChannelCard";
import { Eyebrow, PremiumCard } from "@/components/site/primitives";
import { SectionImage } from "@/components/site/SectionImage";
import { siteImages } from "@/lib/site-images";
import { FaqList } from "@/components/site/FaqList";
import { contactFaqs } from "@/lib/faq-data";
import { offices } from "@/lib/site-data";
import { brand } from "@/lib/brand";
import { pageSeo, pageTitle } from "@/lib/seo";

const contactMailto = `mailto:${brand.contactEmail}`;

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      title: pageTitle("Contact", "Tek4Real"),
      description:
        "Contact Tek4Real. Start a project, partnerships, careers, or general inquiries.",
      path: "/contact",
      ogTitle: "Contact Tek4Real",
      ogDescription: "Start a project with our global studio.",
    }),
  component: ContactPage,
});

const channels = [
  {
    icon: "solar:calendar-bold",
    title: "Start a project",
    desc: "Free 30-minute discovery call. Tell us your goals and we'll outline a plan.",
    action: "Use the form below",
    href: "#contact-form",
  },
  {
    icon: "solar:letter-bold",
    title: "Email",
    desc: "General inquiries, project questions, and new business.",
    action: brand.contactEmail,
    href: contactMailto,
  },
  {
    icon: "solar:case-round-bold",
    title: "Careers",
    desc: "Join our team in Colorado, Hong Kong, or remotely.",
    action: "View open roles",
    href: "/careers#open-roles",
  },
];

function ContactPage() {
  const hash = useRouterState({ select: (state) => state.location.hash });

  useEffect(() => {
    if (hash === "contact-form") {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <Layout>
      <div>
        <PageHero
          eyebrow="Contact"
          title="Let's talk about your project."
          lede="Whether you're scoping an MVP, augmenting your team, or need ongoing development – we're ready to help."
        >
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Icon icon="solar:clock-circle-bold" className="text-primary" /> Response within 1
              business day
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Icon icon="solar:map-point-bold" className="text-primary" /> Colorado · Hong Kong
            </span>
          </div>
        </PageHero>

        {/* Contact channels */}
        <SectionShell className="pt-0!">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch card-grid">
            {channels.map((c) => (
              <div key={c.title} className="h-full min-h-0">
                <ChannelCard
                  icon={c.icon}
                  title={c.title}
                  desc={c.desc}
                  action={c.action}
                  href={c.href}
                />
              </div>
            ))}
          </div>
        </SectionShell>

        {/* Form + HQ */}
        <SectionShell tone="muted">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 xl:gap-16 items-start">
            <div>
              <Eyebrow>Headquarters</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-(--ink) leading-tight tracking-[-0.02em]">
                Global headquarters
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We operate from two headquarters – Colorado and Hong Kong – with field engineers
                available worldwide.
              </p>

              <SectionImage
                src={siteImages.contactHeadquarters}
                alt="Tek4Real global headquarters"
                aspect="video"
              />

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { i: "solar:clock-circle-bold", l: "Hours", v: "Mon–Fri, 8am–6pm" },
                  { i: "solar:global-bold", l: "Coverage", v: "US · EU · APAC" },
                ].map((item) => (
                  <div key={item.l} className="rounded-xl border border-border bg-card p-4">
                    <Icon icon={item.i} className="text-primary text-lg" />
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                      {item.l}
                    </div>
                    <div className="text-sm font-medium text-(--ink) mt-0.5">{item.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="contact-form"
              className="scroll-mt-28 rounded-4xl border border-border bg-card p-8 md:p-10 shadow-(--shadow-lift) ring-1 ring-primary/5"
            >
              <ContactForm />
            </div>
          </div>
        </SectionShell>

        {/* Global offices */}
        <SectionShell>
          <Eyebrow>Our offices</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl text-(--ink) tracking-[-0.02em] mb-10">
            Where we work.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 items-stretch card-grid">
            {offices.map((o) => (
              <PremiumCard key={o.city} className="p-6!">
                <div className="font-serif text-2xl text-(--ink)">{o.city}</div>
                <div className="text-xs text-accent font-semibold mt-1 uppercase tracking-wider">
                  {o.role}
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                  {o.address}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">{o.country}</p>
              </PremiumCard>
            ))}
          </div>
        </SectionShell>

        {/* FAQ */}
        <SectionShell tone="muted">
          <div>
            <Eyebrow>Common questions</Eyebrow>
            <h2 className="font-serif text-3xl text-(--ink) mb-8">Before you reach out.</h2>
            <div className="space-y-3">
              <FaqList items={contactFaqs} />
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              More answers on our{" "}
              <Link to="/faq" className="text-primary font-semibold hover:underline">
                FAQ page
              </Link>
              .
            </p>
          </div>
        </SectionShell>
      </div>
    </Layout>
  );
}
