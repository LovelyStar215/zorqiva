import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/site/Icon";
import { socialLinks } from "@/lib/site-data";
import { Logo } from "@/components/site/Logo";
import { brand, brandEmail, hqOffices } from "@/lib/brand";

const socialIcons = [
  { key: "twitter" as const, icon: "ion:logo-twitter", label: "Twitter" },
  { key: "linkedin" as const, icon: "ion:logo-linkedin", label: "LinkedIn" },
  { key: "github" as const, icon: "ion:logo-github", label: "GitHub" },
  { key: "youtube" as const, icon: "ion:logo-youtube", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="mt-18">
      <div className="bg-(--ink) text-background/85">
        <div className="section-inner py-20">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="mb-6">
                <Logo link />
              </div>
              <p className="max-w-sm text-background/50 leading-relaxed text-[15px]">
                A technology consulting and software engineering company building software, cloud
                infrastructure, and digital products for ambitious companies worldwide.
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
            {(
              [
                {
                  title: "Services",
                  links: [
                    { label: "What we do", to: "/services" },
                    { label: "Case studies", to: "/case-studies" },
                    { label: "Industries", to: "/solutions" },
                    { label: "Engagement", to: "/pricing" },
                    { label: "Security", to: "/security" },
                  ],
                },
                {
                  title: "Company",
                  links: [
                    { label: "About", to: "/about" },
                    { label: "Careers", to: "/careers" },
                    { label: "Contact", to: "/contact" },
                    { label: "Press", href: `mailto:${brandEmail()}` },
                  ],
                },
                {
                  title: "Resources",
                  links: [
                    { label: "FAQ", to: "/faq" },
                    { label: "Privacy", to: "/privacy" },
                    { label: "Terms", to: "/terms" },
                    { label: "Cookie Policy", to: "/cookies" },
                  ],
                },
              ] as const
            ).map((col) => (
              <div key={col.title}>
                <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-5">
                  {col.title}
                </div>
                <ul className="space-y-3 text-sm text-background/55">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {"to" in link ? (
                        <Link to={link.to} className="hover:text-accent transition">
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} className="hover:text-accent transition">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-background/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-background/35">
            <div suppressHydrationWarning>
              © {new Date().getFullYear()} {brand.legalName} · {hqOffices.americas.addressInline}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-background/45">
              <Link to="/privacy" className="hover:text-accent transition">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-accent transition">
                Terms
              </Link>
              <Link to="/cookies" className="hover:text-accent transition">
                Cookies
              </Link>
              <Link to="/faq" className="hover:text-accent transition">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
