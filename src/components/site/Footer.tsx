import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { socialLinks } from "@/lib/site-data";

const socialIcons = [
  { key: "twitter" as const, icon: "ion:logo-twitter", label: "Twitter" },
  { key: "linkedin" as const, icon: "ion:logo-linkedin", label: "LinkedIn" },
  { key: "github" as const, icon: "ion:logo-github", label: "GitHub" },
  { key: "youtube" as const, icon: "ion:logo-youtube", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="mt-32">
      <div className="footer-fade">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <h3 className="font-serif text-3xl text-(--ink)">Stay ahead of the platform.</h3>
            <p className="mt-3 text-muted-foreground max-w-md">
              Product updates, operator insights, and release notes — once a month, no noise.
            </p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
            <button type="submit" className="btn-primary py-3! px-6! shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-(--ink) text-background/85">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-lg bg-accent text-accent-foreground grid place-items-center">
                  <Icon icon="solar:leaf-bold" className="text-xl" />
                </div>
                <span className="font-serif text-2xl">Verdian</span>
              </div>
              <p className="max-w-sm text-background/50 leading-relaxed text-[15px]">
                The native CRM & ERP workspace for teams that build enduring companies. Engineered
                in Austin, Texas.
              </p>
              <div className="flex items-center gap-2.5 mt-8">
                {socialIcons.map(({ key, icon, label }) => (
                  <a
                    key={key}
                    href={socialLinks[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-background/12 grid place-items-center text-background/60 hover:bg-accent hover:text-accent-foreground hover:border-accent transition"
                  >
                    <Icon icon={icon} className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
            {[
              {
                title: "Product",
                links: [
                  ["Platform", "/platform"],
                  ["Solutions", "/solutions"],
                  ["Pricing", "/pricing"],
                  ["Security", "/security"],
                ] as const,
              },
              {
                title: "Company",
                links: [
                  ["About", "/about"],
                  ["Careers", "/careers"],
                  ["Contact", "/contact"],
                  ["Press", "mailto:press@verdian.io"],
                ] as const,
              },
              {
                title: "Resources",
                links: [
                  ["Documentation", "/platform"],
                  ["Status", "https://status.verdian.io"],
                  ["Privacy", "/privacy"],
                  ["Terms", "/terms"],
                ] as const,
              },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-5">
                  {col.title}
                </div>
                <ul className="space-y-3 text-sm text-background/55">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      {href.startsWith("/") ? (
                        <Link to={href} className="hover:text-accent transition">
                          {label}
                        </Link>
                      ) : href.startsWith("mailto:") ? (
                        <a href={href} className="hover:text-accent transition">
                          {label}
                        </a>
                      ) : (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition"
                        >
                          {label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-background/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-background/35">
            <div>
              © {new Date().getFullYear()} Verdian Systems, Inc. · 500 W 2nd St, Austin, TX 78701
            </div>
            <div className="flex items-center gap-2 text-background/45">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" /> All systems
              operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
