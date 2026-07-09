import { createRequire } from "node:module";

type MjmlResult = {
  html: string;
  errors?: Array<{ formattedMessage?: string; message?: string }>;
};

type MjmlCompiler = (
  source: string,
  options?: { validationLevel?: string; minify?: boolean },
) => Promise<MjmlResult>;

let mjmlPromise: Promise<MjmlCompiler> | undefined;

function resolveMjmlExport(mod: unknown): MjmlCompiler {
  let candidate: unknown = mod;
  for (let depth = 0; depth < 3; depth += 1) {
    if (typeof candidate === "function") return candidate as MjmlCompiler;
    if (candidate && typeof candidate === "object" && "default" in candidate) {
      candidate = (candidate as { default: unknown }).default;
      continue;
    }
    break;
  }
  throw new Error("MJML compiler could not be loaded.");
}

async function getMjml() {
  if (!mjmlPromise) {
    mjmlPromise = import.meta.env.DEV
      ? Promise.resolve(createRequire(import.meta.url)("mjml") as MjmlCompiler)
      : import("mjml").then((mod) => resolveMjmlExport(mod));
  }
  return mjmlPromise;
}

export async function compileMjml(source: string) {
  const mjml = await getMjml();
  const result = await mjml(source, {
    validationLevel: "soft",
    minify: false,
  });

  if (result.errors?.length) {
    console.warn(
      "MJML compile warnings:",
      result.errors.map((e) => e.formattedMessage ?? e.message).join("\n"),
    );
  }

  return result.html;
}
