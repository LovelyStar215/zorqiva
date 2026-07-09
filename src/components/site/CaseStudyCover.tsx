import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

type Aspect = "card" | "hero";

const aspectClass: Record<Aspect, string> = {
  card: "aspect-[16/10]",
  hero: "aspect-[21/9] md:aspect-[2.4/1]",
};

export function CaseStudyCover({
  src,
  alt,
  label,
  aspect = "card",
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  aspect?: Aspect;
  className?: string;
}) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setReady(false);
    setFailed(false);

    const img = new Image();
    img.onload = () => setReady(true);
    img.onerror = () => setFailed(true);
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border shadow-(--shadow-soft) ${aspectClass[aspect]} ${className}`}
    >
      {ready && !failed ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-primary/8 via-muted/40 to-accent/10 px-6 text-center"
          aria-hidden={failed}
        >
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <Icon icon="solar:gallery-bold" className="text-2xl" />
          </div>
          <div>
            <p className="font-serif text-lg text-(--ink)">{label}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {failed ? (
                <>
                  Add image at{" "}
                  <span className="font-mono text-[10px] text-foreground/70">{src}</span>
                </>
              ) : (
                "Loading preview…"
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
