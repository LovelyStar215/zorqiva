import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";
import { IconBadge } from "./primitives";

export function ChannelCard({
  icon,
  title,
  desc,
  action,
  href,
}: {
  icon: string;
  title: string;
  desc: string;
  action: string;
  href: string;
}) {
  const className =
    "card-premium !p-6 group flex flex-col h-full hover:!border-primary/35 transition-all";

  const content = (
    <>
      <IconBadge
        icon={icon}
        className="mb-4 group-hover:!bg-primary group-hover:!text-primary-foreground transition-colors"
      />
      <div className="font-serif text-xl text-[color:var(--ink)]">{title}</div>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{desc}</p>
      <div className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
        {action} <Icon icon="solar:arrow-right-linear" />
      </div>
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
