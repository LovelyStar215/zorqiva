import type { ReactNode } from "react";

type VisualProps = { className?: string };

function AppChrome({
  children,
  title = "Command Center",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="flex h-full min-h-[420px] text-white/90 text-[11px]">
      <aside className="w-[52px] shrink-0 border-r border-white/8 bg-black/30 flex flex-col items-center py-4 gap-3">
        <div className="w-7 h-7 rounded-lg bg-accent/90 mb-2" />
        {[true, false, false, false, false, false].map((active, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-lg ${active ? "bg-white/15 ring-1 ring-accent/50" : "bg-white/5"}`}
          />
        ))}
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-11 border-b border-white/8 flex items-center justify-between px-4 bg-black/20">
          <div className="flex items-center gap-3">
            <span className="text-white/50">Verdian</span>
            <span className="text-white/20">/</span>
            <span className="font-medium text-white/80">{title}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-32 rounded-md bg-white/8 hidden sm:block" />
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/80 to-primary" />
          </div>
        </header>
        <div className="flex-1 p-4 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export function HeroVisual({ className = "" }: VisualProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[oklch(0.12_0.03_160)] ${className}`}
      style={{
        background: "linear-gradient(160deg, oklch(0.14 0.035 160), oklch(0.10 0.025 165))",
      }}
    >
      <div className="absolute inset-0 premium-grid opacity-40" />
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[radial-gradient(circle,oklch(0.70_0.145_52/0.15),transparent_65%)]" />
      <AppChrome title="Project Dashboard">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-3">
          {[
            { l: "Sprint velocity", v: "42 pts", d: "+18% vs last" },
            { l: "Deploy frequency", v: "Daily", d: "12 min builds" },
            { l: "Test coverage", v: "94%", d: "+6% this month" },
            { l: "Uptime", v: "99.9%", d: "30-day avg" },
          ].map((m) => (
            <div key={m.l} className="rounded-xl border border-white/8 bg-white/4 p-3">
              <div className="text-[9px] uppercase tracking-wider text-white/35">{m.l}</div>
              <div className="font-serif text-lg text-accent mt-1">{m.v}</div>
              <div className="text-[9px] text-emerald-400/80 mt-0.5">{m.d}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-2.5 h-[140px]">
          <div className="col-span-3 rounded-xl border border-white/8 bg-white/4 p-3 flex flex-col">
            <div className="text-[9px] uppercase tracking-wider text-white/35 mb-2">
              Sprint burndown
            </div>
            <div className="flex-1 flex items-end gap-1">
              {[35, 48, 42, 58, 52, 72, 65, 78, 70, 88, 82, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary/80 to-accent/50"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="col-span-2 rounded-xl border border-accent/20 bg-accent/5 p-3">
            <div className="flex items-center gap-1.5 text-accent text-[9px] uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> CI/CD
            </div>
            <p className="text-[10px] leading-relaxed text-white/70 mt-2">
              Build #847 passed. Staging deploy ready — 3 features awaiting client review.
            </p>
            <div className="mt-3 flex gap-1.5">
              <span className="rounded-md bg-accent/20 text-accent px-2 py-1 text-[9px]">
                Approve
              </span>
              <span className="rounded-md bg-white/8 px-2 py-1 text-[9px] text-white/50">Edit</span>
            </div>
          </div>
        </div>
      </AppChrome>
    </div>
  );
}

export function DashboardVisual({ className = "" }: VisualProps) {
  return (
    <div className={`relative overflow-hidden bg-[oklch(0.12_0.03_160)] ${className}`}>
      <AppChrome title="Client Project — Halcyon">
        <div className="grid grid-cols-3 gap-2.5 mb-3">
          {["Tasks done", "In review", "Deployed"].map((l, i) => (
            <div key={l} className="rounded-xl border border-white/8 bg-white/4 p-3">
              <div className="text-[9px] uppercase tracking-wider text-white/35">{l}</div>
              <div className="font-serif text-base text-white/90 mt-1">
                {["24/28", "3", "v2.4"][i]}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/8 bg-white/4 p-3">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[9px] uppercase tracking-wider text-white/35">
              Active environments
            </span>
            <span className="text-[9px] text-accent">Live</span>
          </div>
          <div className="space-y-2">
            {[
              { e: "Production", v: "v2.4.1", s: "Live" },
              { e: "Staging", v: "v2.5-rc", s: "Testing" },
              { e: "Development", v: "feature/auth", s: "Active" },
            ].map((row) => (
              <div
                key={row.e}
                className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
              >
                <span className="text-white/70">{row.e}</span>
                <div className="flex items-center gap-3">
                  <span className="text-white/90 font-medium">{row.v}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded ${row.s === "Live" ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"}`}
                  >
                    {row.s}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppChrome>
    </div>
  );
}

export function TeamVisual({ className = "" }: VisualProps) {
  return (
    <div
      className={`relative aspect-[16/11] overflow-hidden ${className}`}
      style={{
        background:
          "var(--gradient-mesh), linear-gradient(145deg, oklch(0.92 0.04 85), oklch(0.85 0.07 155 / 0.4))",
      }}
    >
      <div className="absolute inset-0 premium-grid opacity-30" />
      <div className="absolute inset-0 flex items-end justify-center gap-4 p-10">
        {[
          { h: 100, c: "from-primary/20 to-primary/40" },
          { h: 130, c: "from-accent/25 to-accent/45" },
          { h: 115, c: "from-primary/30 to-primary/50" },
          { h: 140, c: "from-accent/20 to-primary/35" },
          { h: 105, c: "from-primary/15 to-primary/35" },
        ].map((p, i) => (
          <div
            key={i}
            className={`w-14 rounded-2xl bg-gradient-to-b ${p.c} border border-white/30 shadow-[var(--shadow-soft)]`}
            style={{ height: p.h }}
          />
        ))}
      </div>
      <div className="absolute top-6 left-6 glass rounded-full px-4 py-2 text-xs font-semibold text-[color:var(--ink)]">
        Global team · 85+ builders
      </div>
    </div>
  );
}

export function StudioVisual({ className = "" }: VisualProps) {
  return (
    <div
      className={`relative aspect-[16/9] overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(180deg, oklch(0.50 0.10 240 / 0.35) 0%, oklch(0.22 0.06 160) 55%, oklch(0.14 0.04 165) 100%)",
      }}
    >
      <div className="absolute inset-0 premium-grid opacity-20" />
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 items-end">
        {[90, 130, 170, 110, 150, 80, 120, 140].map((h, i) => (
          <div
            key={i}
            className="w-7 rounded-t bg-white/15 border-x border-t border-white/10"
            style={{ height: h * 0.45 }}
          />
        ))}
      </div>
      <div className="absolute bottom-6 left-6">
        <div className="font-serif text-2xl text-white">Global headquarters</div>
        <div className="text-sm text-white/50 mt-1">Texas · Hong Kong</div>
      </div>
    </div>
  );
}

/** @deprecated Use StudioVisual */
export const AustinVisual = StudioVisual;
