// @lovable.dev/vite-tanstack-config already includes the following – do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv } from "vite";
import { shouldApplyEnvKey } from "./src/lib/mail-env-keys";

const isBuild = process.argv.includes("build");
const buildMode =
  process.argv.includes("--mode") &&
  process.argv[process.argv.indexOf("--mode") + 1] === "development"
    ? "development"
    : "production";

for (const mode of isBuild ? [buildMode, ""] : ["development", ""]) {
  for (const [key, value] of Object.entries(loadEnv(mode, process.cwd(), ""))) {
    if (shouldApplyEnvKey(key)) {
      process.env[key] = value;
    }
  }
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    externals: { inline: true },
  },
  vite: {
    ssr: isBuild ? { noExternal: true } : { external: ["mjml", "nodemailer"] },
  },
});
