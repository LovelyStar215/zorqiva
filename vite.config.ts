import { defineConfig, loadEnv, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
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

export default defineConfig(async ({ command, mode }): Promise<UserConfig> => {
  const isDevBuild = command === "build" && mode === "development";

  const plugins = [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
    }),
    react(),
  ];

  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(nitro({ preset: "vercel" }));
  }

  const envDefine: Record<string, string> = {};
  for (const [key, value] of Object.entries(loadEnv(mode, process.cwd(), "VITE_"))) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  return {
    define: envDefine,
    // Client-scoped so React DevTools gets the dev react-dom; a global NODE_ENV
    // flip would emit jsxDEV, which the react-server SSR runtime can't resolve.
    ...(isDevBuild
      ? {
          environments: {
            client: { define: { "process.env.NODE_ENV": JSON.stringify("development") } },
          },
          esbuild: { keepNames: true },
        }
      : {}),
    // Match the build's CSS pipeline in dev. Vite uses PostCSS in dev and only
    // runs Lightning CSS at build, so build-time transforms (e.g. collapsing a
    // hand-written `-webkit-backdrop-filter` to the prefixed form Chrome ignores)
    // break the built/static output while the dev preview looks fine. Running
    // Lightning CSS in both keeps the preview honest.
    css: { transformer: "lightningcss" as const },
    resolve: {
      tsconfigPaths: true,
      alias: {
        "@": `${process.cwd()}/src`,
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    // Dep re-optimization rotates the optimized-dep hash and 504s tabs holding
    // the old one; pre-bundle the always-present client deps + tolerate stale
    // requests. React core only — including @tanstack/react-start would pull its
    // node:async_hooks server entry into the client bundle and crash hydration.
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    server: { host: true, port: 8080 },
    ssr: isBuild ? { noExternal: true } : { external: ["mjml", "nodemailer"] },
    plugins,
  };
});
