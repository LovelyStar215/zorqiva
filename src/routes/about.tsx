import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { Layout, PageHero } from "@/components/site/Layout";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import teamAustin from "@/assets/team-austin.jpg";
import austin from "@/assets/austin.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Verdian" },
      { name: "description", content: "Verdian is headquartered in Austin, Texas. We build the native CRM & ERP for modern operators." },
      { property: "og:title", content: "About Verdian" },
      { property: "og:description", content: "Built in Austin, Texas." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { i: "solar:diamond-bold", t: "Craft over quantity", d: "We ship fewer things, better. Every pixel and every query is examined." },
  { i: "solar:hand-shake-bold", t: "Customer-obsessed", d: "Our roadmap starts in customer sessions, not strategy decks." },
  { i: "solar:earth-bold", t: "Long-term thinking", d: "We build for the operator who's still here in ten years." },
  { i: "solar:shield-star-bold", t: "Trust as a feature", d: "Security, privacy, and reliability aren't tiers — they're defaults." },
];

function AboutPage() {
  const scope = useGsapReveal();
  return (
    <Layout>
      <div ref={scope}>
        <PageHero eyebrow="About" title="Built in Austin. Made for operators."
          lede="We're a team of engineers, designers, and former CFOs building the operating system we always wished we had." />
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-lift)]" data-reveal>
              <img src={austin} alt="Austin, Texas" className="w-full" width={1600} height={900} loading="lazy" />
            </div>
            <div data-reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">— Our home</div>
              <h2 className="font-serif text-4xl text-[color:var(--ink)]">500 W 2nd Street, Austin, Texas</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Our headquarters sits five blocks from the Colorado River in downtown Austin. It's where our founding team writes code, meets customers, and prototypes what comes next. We also operate hubs in New York, London, and Singapore.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div><div className="font-serif text-3xl text-primary">2022</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Founded</div></div>
                <div><div className="font-serif text-3xl text-primary">180+</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Team</div></div>
                <div><div className="font-serif text-3xl text-primary">4</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Offices</div></div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-card/60 border-y border-border/60 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6" data-reveal>— What we believe</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-reveal-stagger>
              {values.map((v) => (
                <div key={v.t} className="bg-background border border-border rounded-2xl p-7">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4"><Icon icon={v.i} className="text-2xl" /></div>
                  <div className="font-serif text-xl text-[color:var(--ink)]">{v.t}</div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div data-reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">— The team</div>
            <h2 className="font-serif text-4xl text-[color:var(--ink)]">Operators building for operators.</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Our leadership has scaled companies from seed through IPO across SaaS, life sciences, and commerce. That perspective is in every screen we ship.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold">
              Join us in Austin <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border" data-reveal>
            <img src={teamAustin} alt="Verdian team" className="w-full" width={1600} height={1100} loading="lazy" />
          </div>
        </section>
      </div>
    </Layout>
  );
}