import { useEffect, useState } from "react";

type Aspect = "video" | "square" | "wide";

const aspectClass: Record<Aspect, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/11]",
};

export function SectionImage({
  src,
  alt,
  aspect = "video",
  position = "center",
  className = "",
}: {
  src: string;
  alt: string;
  aspect?: Aspect;
  position?: "center" | "top" | "bottom";
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

  const positionClass =
    position === "top" ? "bg-top" : position === "bottom" ? "bg-bottom" : "bg-center";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`overflow-hidden rounded-2xl border border-border bg-muted/30 bg-cover bg-no-repeat shadow-(--shadow-soft) ${aspectClass[aspect]} ${positionClass} ${className}`}
      style={ready && !failed ? { backgroundImage: `url("${src}")` } : undefined}
    >
      {failed && (
        <div className="flex h-full w-full items-center justify-center bg-muted/50 px-6 text-center">
          <p className="text-sm text-muted-foreground">
            Add <span className="font-mono text-xs">{src}</span>
          </p>
        </div>
      )}
    </div>
  );
}
