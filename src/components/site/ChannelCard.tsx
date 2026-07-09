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
    "card-premium p-6! group flex flex-col h-full hover:border-primary/35! transition-[border-color,box-shadow]";

  const content = (
    <>
      <IconBadge
        icon={icon}
        className="mb-4 group-hover:bg-primary! group-hover:text-primary-foreground! transition-colors"
      />
      <div className="font-serif text-xl text-(--ink)">{title}</div>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{desc}</p>
      <div className="link-arrow mt-auto pt-4 text-sm font-semibold text-primary">
        {action} <Icon icon="solar:arrow-right-linear" className="link-arrow__icon" />
      </div>
    </>
  );

  if (href.startsWith("/")) {
    const [to, hash] = href.split("#");
    return (
      <Link to={to} hash={hash} className={className}>
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
