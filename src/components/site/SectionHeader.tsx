export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  dark = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "";
  const titleClass = dark ? "text-background" : "text-[color:var(--ink)]";
  return (
    <div className={`w-full mb-10 flex flex-col ${alignClass} ${className}`}>
      <div className={`eyebrow mb-7 ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</div>
      <h2
        className={`font-serif text-4xl md:text-[2.75rem] leading-[1.08] tracking-[-0.02em] ${titleClass}`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-lg text-muted-foreground leading-relaxed ${align === "center" ? "mx-auto" : ""}`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
