export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "";
  return (
    <div className={`max-w-3xl mb-14 flex flex-col ${alignClass}`} data-reveal>
      <div className={`eyebrow mb-5 ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</div>
      <h2 className="font-serif text-4xl md:text-[2.75rem] leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)]">
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
