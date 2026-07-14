import { Icon } from "@/components/site/Icon";
import type { FaqItem } from "@/lib/faq-data";

export function FaqList({ items, className = "" }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-2xl border border-border bg-card px-6 py-5 open:shadow-(--shadow-soft) transition"
        >
          <summary className="flex items-center justify-between cursor-pointer font-semibold text-(--ink) text-[15px]">
            {item.q}
            <Icon
              icon="solar:alt-arrow-down-linear"
              className="text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-4"
            />
          </summary>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
