import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Verdian" },
      { name: "description", content: "Talk to the Verdian team in Austin, Texas. Book a demo or reach sales, support, and partnerships." },
      { property: "og:title", content: "Contact Verdian" },
      { property: "og:description", content: "Book a demo or reach our team in Austin." },
    ],
  }),
  component: ContactPage,
});

const contacts = [
  { i: "solar:map-point-bold", t: "Headquarters", d: "500 W 2nd Street, Suite 1900\nAustin, TX 78701" },
  { i: "solar:phone-bold", t: "Sales", d: "+1 (512) 555-0140\nsales@verdian.io" },
  { i: "solar:letter-bold", t: "Support", d: "support@verdian.io\n24/7 for Enterprise" },
  { i: "solar:hand-shake-bold", t: "Partnerships", d: "partners@verdian.io" },
];

const fields: Array<[string, string, string]> = [
  ["First name", "text", "firstName"],
  ["Last name", "text", "lastName"],
  ["Work email", "email", "email"],
  ["Company", "text", "company"],
];

function ContactPage() {
  const scope = useGsapReveal();
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <div ref={scope}>
        <PageHero eyebrow="Contact" title="Let's talk about your operation."
          lede="Our field team responds within one business day. For faster demos, use the form." />
        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <div className="space-y-8" data-reveal>
            {contacts.map((c) => (
              <div key={c.t} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                  <Icon icon={c.i} className="text-xl" />
                </div>
                <div>
                  <div className="font-serif text-xl text-[color:var(--ink)]">{c.t}</div>
                  <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
          <form data-reveal onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-[var(--shadow-soft)]">
            {sent ? (
              <div className="text-center py-16">
                <Icon icon="solar:verified-check-bold" className="text-6xl text-primary mx-auto" />
                <h3 className="font-serif text-3xl text-[color:var(--ink)] mt-4">Thank you.</h3>
                <p className="mt-2 text-muted-foreground">Our team will be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-3xl text-[color:var(--ink)]">Book a demo</h3>
                <p className="text-sm text-muted-foreground mt-1">30 minutes, tailored to your business.</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {fields.map(([label, type, name]) => (
                    <label key={name} className="block">
                      <span className="text-xs font-medium text-foreground/70">{label}</span>
                      <input required type={type} name={name}
                        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    </label>
                  ))}
                </div>
                <label className="block mt-4">
                  <span className="text-xs font-medium text-foreground/70">What are you trying to solve?</span>
                  <textarea name="message" rows={4}
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </label>
                <button type="submit"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition">
                  Request a demo <Icon icon="solar:arrow-right-linear" />
                </button>
              </>
            )}
          </form>
        </section>
      </div>
    </Layout>
  );
}