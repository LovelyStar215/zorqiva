import type { TrustedCompanyLogo } from "@/lib/trusted-companies";

/** Base rendered height (px) before per-logo contentScale. */
const BASE_HEIGHT = 60;
const MIN_HEIGHT = 38;

export function ClientLogo({
  logo,
  className = "",
}: {
  logo: TrustedCompanyLogo;
  className?: string;
}) {
  const height = Math.max(MIN_HEIGHT, Math.round(BASE_HEIGHT * (logo.contentScale ?? 1)));
  const isPhotoLogo = logo.src.endsWith(".webp");

  return (
    <img
      src={logo.src}
      alt={logo.name}
      draggable={false}
      className={
        isPhotoLogo
          ? `w-auto shrink-0 object-contain grayscale brightness-[1.85] opacity-50 transition-opacity duration-300 hover:opacity-75 ${className}`
          : `w-auto shrink-0 object-contain brightness-0 invert opacity-45 transition-opacity duration-300 hover:opacity-70 ${className}`
      }
      style={{ height: `${height}px`, maxWidth: `${Math.max(height * 4, 160)}px` }}
    />
  );
}
