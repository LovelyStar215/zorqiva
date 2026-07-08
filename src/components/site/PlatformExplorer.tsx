import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import {
  apiExample,
  advancedCapabilities,
  enterpriseMatrix,
  liveEvents,
  platformModules,
} from "@/lib/platform-data";

function ModuleTable({ rows }: { rows: (typeof platformModules)[number]["rows"] }) {
  return (
    <div className="rounded-xl border border-white/8 overflow-x-auto">
      <div className="min-w-[480px]">
        <div className="grid grid-cols-[1.4fr_0.7fr_0.6fr_0.7fr] gap-2 px-3 py-2 bg-white/5 border-b border-white/8 text-[8px] uppercase tracking-wider text-white/35 font-semibold">
          <span>Name</span>
          <span>Status</span>
          <span>Value</span>
          <span>Signal</span>
        </div>
        {rows.map((row) => (
          <div
            key={row.name}
            className="grid grid-cols-[1.4fr_0.7fr_0.6fr_0.7fr] gap-2 px-3 py-2.5 border-b border-white/5 last:border-0 hover:bg-white/4 transition text-[10px]"
          >
            <span className="text-white/85 truncate font-medium">{row.name}</span>
            <span className="text-white/50">{row.stage}</span>
            <span className="text-accent font-medium">{row.value}</span>
            <span className="text-emerald-400/80">{row.signal}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PlatformExplorer() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const mod = platformModules[active];

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % platformModules.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const select = (i: number) => {
    setActive(i);
    setPaused(true);
  };

  return (
    <div
      className="rounded-2xl border border-border bg-[color:var(--ink)] overflow-hidden shadow-[var(--shadow-glow)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-black/30">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 rounded-lg bg-white/6 border border-white/8 px-4 py-1.5 text-[10px] text-white/40 max-w-xs w-full">
            <Icon icon="solar:magnifer-linear" />
            <span className="truncate">Search projects, deployments, designs…</span>
            <span className="ml-auto text-white/25 shrink-0">⌘K</span>
          </div>
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-primary shrink-0" />
      </div>

      <div className="flex flex-col lg:flex-row min-h-[480px]">
        <aside className="lg:w-52 shrink-0 border-b lg:border-b-0 lg:border-r border-white/8 p-3 flex lg:flex-col gap-1 overflow-x-auto">
          {platformModules.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => select(i)}
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[11px] font-medium whitespace-nowrap transition-all ${
                active === i
                  ? "bg-accent/15 text-accent ring-1 ring-accent/30"
                  : "text-white/45 hover:text-white/70 hover:bg-white/5"
              }`}
            >
              <Icon icon={m.icon} className="text-base shrink-0" />
              {m.label}
            </button>
          ))}
        </aside>

        <div className="flex-1 p-5 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
            <div>
              <h3 className="font-serif text-xl text-white leading-snug">{mod.headline}</h3>
              <p className="text-[11px] text-white/45 mt-1 max-w-md leading-relaxed">{mod.desc}</p>
            </div>
            <div className="flex gap-2 shrink-0 flex-wrap">
              {mod.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-white/8 bg-white/4 px-3 py-2 text-center min-w-[72px]"
                >
                  <div className="font-serif text-sm text-accent">{m.value}</div>
                  <div className="text-[8px] uppercase tracking-wider text-white/30 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ModuleTable rows={mod.rows} />

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[65, 82, 74].map((h, i) => (
              <div key={i} className="rounded-lg border border-white/6 bg-white/3 p-2.5">
                <div className="text-[8px] uppercase tracking-wider text-white/25 mb-2">
                  {["Trend", "Velocity", "Health"][i]}
                </div>
                <div className="flex items-end gap-0.5 h-8">
                  {Array.from({ length: 8 }, (_, j) => 30 + Math.sin(j + i) * 20 + h * 0.3).map(
                    (bar, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-sm bg-gradient-to-t from-primary/60 to-accent/40"
                        style={{ height: `${bar}%` }}
                      />
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LiveActivityFeed() {
  const [highlight, setHighlight] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHighlight((v) => (v + 1) % liveEvents.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-[var(--shadow-soft)] h-full flex flex-col">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2 text-xs font-semibold text-[color:var(--ink)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Live project activity
        </div>
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
          Real-time
        </span>
      </div>
      <div className="divide-y divide-border flex-1">
        {liveEvents.map((e, i) => (
          <div
            key={e.event}
            className={`flex items-center gap-4 px-5 py-3.5 text-sm transition-all duration-500 ${
              i === highlight ? "bg-primary/[0.04]" : ""
            }`}
          >
            <span className="text-[10px] text-muted-foreground w-14 shrink-0 tabular-nums">
              {e.time}
            </span>
            <span className="flex-1 text-foreground/80">{e.event}</span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-accent shrink-0">
              {e.module}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EnterpriseMatrix() {
  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-[var(--shadow-soft)] h-full">
      <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-muted/40 border-b border-border text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
        <div className="px-5 py-3.5">Capability</div>
        <div className="px-5 py-3.5 border-l border-border">In-house / DIY</div>
        <div className="px-5 py-3.5 border-l border-border text-primary">With Verdian</div>
      </div>
      {enterpriseMatrix.map((row, i) => (
        <div
          key={row.capability}
          className={`grid grid-cols-[1.2fr_1fr_1fr] border-b border-border last:border-0 text-sm ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
        >
          <div className="px-5 py-4 font-medium text-[color:var(--ink)]">{row.capability}</div>
          <div className="px-5 py-4 border-l border-border text-muted-foreground flex items-center gap-2">
            <Icon icon="solar:close-circle-linear" className="text-destructive/50 shrink-0" />
            {row.legacy}
          </div>
          <div className="px-5 py-4 border-l border-border text-foreground/85 font-medium flex items-center gap-2">
            <Icon icon="solar:check-circle-bold" className="text-primary shrink-0" />
            {row.verdian}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CodePreview() {
  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-[var(--shadow-glow)] bg-[color:var(--ink)]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-black/30">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <span className="text-[10px] text-white/35 font-mono">project-handler.ts</span>
        <span className="text-[10px] text-accent font-semibold">TypeScript · React · Node</span>
      </div>
      <pre className="p-5 overflow-x-auto text-[11px] leading-relaxed font-mono text-white/75">
        <code>{apiExample}</code>
      </pre>
    </div>
  );
}

export function AdvancedCapabilities() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch card-grid" data-reveal-stagger>
      {advancedCapabilities.map((cap) => (
        <div key={cap.title} className="h-full min-h-0">
          <div className="card-premium !p-6 group h-full flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
              <Icon icon={cap.icon} className="text-lg" />
            </div>
            <div className="font-serif text-lg text-[color:var(--ink)]">{cap.title}</div>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{cap.desc}</p>
            <div className="mt-4 text-[10px] uppercase tracking-wider font-semibold text-accent">
              {cap.spec}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
