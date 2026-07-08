import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-background/90 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-accent text-accent-foreground grid place-items-center">
                <Icon icon="solar:leaf-bold" className="text-xl" />
              </div>
              <span className="font-serif text-2xl">Verdian</span>
            </div>
            <p className="max-w-md text-background/60 leading-relaxed font-serif text-lg">
              The native CRM & ERP workspace for teams that build enduring companies. Designed and engineered in Austin, Texas.
            </p>
            <div className="flex items-center gap-3 mt-8">
              {["logo-twitter", "logo-linkedin", "logo-github", "logo-youtube"].map((i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={i}
                  className="w-10 h-10 rounded-full border border-background/15 grid place-items-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition"
                >
                  <Icon icon={`ion:${i}`} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent mb-4">Product</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/platform" className="hover:text-accent transition">Platform</Link></li>
              <li><Link to="/solutions" className="hover:text-accent transition">Solutions</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition">Book a demo</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent mb-4">Company</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition">Contact</Link></li>
              <li><a href="#" className="hover:text-accent transition">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition">Press</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-background/50">
          <div>© {new Date().getFullYear()} Verdian Systems, Inc. — 500 W 2nd St, Austin, TX 78701</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
            <a href="#" className="hover:text-accent">Security</a>
            <a href="#" className="hover:text-accent">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}