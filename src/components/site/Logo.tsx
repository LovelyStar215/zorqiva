import { Link } from "@tanstack/react-router";
import { brand, brandAssets } from "@/lib/brand";

export function Logo({
  variant = "full",
  className = "",
  link = false,
}: {
  variant?: "full" | "icon";
  className?: string;
  link?: boolean;
}) {
  const src = variant === "icon" ? brandAssets.logoIcon : brandAssets.logo;
  const sizeClass = variant === "icon" ? "h-8 w-8" : "h-9 w-auto sm:h-10";

  const image = (
    <img
      src={src}
      alt={brand.name}
      className={`${sizeClass} object-contain ${className}`}
      width={variant === "icon" ? 32 : undefined}
      height={variant === "icon" ? 32 : undefined}
    />
  );

  if (!link) return image;

  return (
    <Link to="/" className="inline-flex shrink-0 group">
      <span className="group-hover:opacity-90 transition-opacity">{image}</span>
    </Link>
  );
}
