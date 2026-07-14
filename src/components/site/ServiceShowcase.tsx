import { Icon } from "@/components/site/Icon";
import { agencyComparisonMatrix, serviceAreas } from "@/lib/services-data";
import { IconBadge, PremiumCard } from "@/components/site/primitives";

export function ServiceAreas() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch card-grid">
      {serviceAreas.map((area) => (
        <PremiumCard key={area.id} className="h-full flex flex-col">
          <IconBadge icon={area.icon} className="mb-4" />
          <div className="font-serif text-xl text-(--ink)">{area.label}</div>
          <p className="text-sm font-medium text-foreground/80 mt-2">{area.headline}</p>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{area.desc}</p>
          <div className="mt-4 text-[10px] uppercase tracking-wider font-semibold text-accent">
            {area.spec}
          </div>
        </PremiumCard>
      ))}
    </div>
  );
}

export function EnterpriseMatrix() {
  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-(--shadow-soft)">
      <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-muted/40 border-b border-border text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
        <div className="px-5 py-3.5">Capability</div>
        <div className="px-5 py-3.5 border-l border-border">In-house / DIY</div>
        <div className="px-5 py-3.5 border-l border-border text-primary">With Tek4Real</div>
      </div>
      {agencyComparisonMatrix.map((row, i) => (
        <div
          key={row.capability}
          className={`grid grid-cols-[1.2fr_1fr_1fr] border-b border-border last:border-0 text-sm ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
        >
          <div className="px-5 py-4 font-medium text-(--ink)">{row.capability}</div>
          <div className="px-5 py-4 border-l border-border text-muted-foreground flex items-center gap-2">
            <Icon icon="solar:close-circle-linear" className="text-destructive/50 shrink-0" />
            {row.legacy}
          </div>
          <div className="px-5 py-4 border-l border-border text-foreground/85 font-medium flex items-center gap-2">
            <Icon icon="solar:check-circle-bold" className="text-primary shrink-0" />
            {row.withTek4Real}
          </div>
        </div>
      ))}
    </div>
  );
}
