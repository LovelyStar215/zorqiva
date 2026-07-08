const logos = [
  "Halcyon Bio",
  "Northstar Commerce",
  "Cascade Systems",
  "Meridian SaaS",
  "Atlas Rowe",
  "Kestrel Labs",
  "Vantage Health",
  "Ironwood Capital",
];

export function LogoMarquee() {
  const items = [...logos, ...logos];
  return (
    <section className="logo-marquee-band overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center gap-8">
        <div className="shrink-0 text-[10px] uppercase tracking-[0.25em] text-background/40 font-semibold hidden sm:block">
          Trusted by
        </div>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track gap-16 pr-16">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-serif text-xl text-background/50 whitespace-nowrap hover:text-accent transition-colors duration-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
