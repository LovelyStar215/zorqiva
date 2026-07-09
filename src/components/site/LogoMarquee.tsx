import { ClientLogo } from "@/components/site/ClientLogo";
import { TRUSTED_COMPANY_LOGOS } from "@/lib/trusted-companies";

export function LogoMarquee() {
  const items = [...TRUSTED_COMPANY_LOGOS, ...TRUSTED_COMPANY_LOGOS];

  return (
    <section className="logo-marquee-band overflow-hidden border-y border-background/8 py-8 md:py-10">
      <p className="mb-4 text-center text-[10px] uppercase tracking-[0.25em] text-background/40 font-semibold px-6">
        Trusted by industry leaders
      </p>
      <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="marquee-track items-center gap-16 px-10 md:gap-20">
          {items.map((logo, i) => (
            <ClientLogo key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
