import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Icon } from "@iconify/react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`eyebrow mb-7 ${className}`}>{children}</div>;
}

export function PrimaryButton({
  to,
  href,
  children,
  className = "",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const cls = `btn-primary ${className}`;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "/contact"} className={cls}>
      {children}
    </Link>
  );
}

export function SecondaryButton({
  to,
  hash,
  children,
  className = "",
}: {
  to: string;
  hash?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} hash={hash} className={`btn-secondary ${className}`}>
      {children}
    </Link>
  );
}

export function PremiumCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`${hover ? "card-premium" : "rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]"} p-7 h-full flex flex-col ${className}`}
    >
      {children}
    </div>
  );
}

export function GlowFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glow-frame ${className}`}>
      <div className="glow-frame-inner">{children}</div>
    </div>
  );
}

export function IconBadge({ icon, className = "" }: { icon: string; className?: string }) {
  return (
    <div
      className={`w-11 h-11 rounded-xl bg-primary/8 text-primary grid place-items-center ring-1 ring-primary/10 ${className}`}
    >
      <Icon icon={icon} className="text-xl" />
    </div>
  );
}
