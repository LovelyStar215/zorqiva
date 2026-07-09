import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { shouldApplyEnvKey } from "@/lib/mail-env-keys";

/** Load `.env` from the project root. Mail keys always refresh from the file. */
export function loadEnvFile() {
  const path = resolve(process.cwd(), ".env");
  if (!existsSync(path)) return;

  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    const rawValue = trimmed.slice(separator + 1).trim();
    const value = rawValue.replace(/^(['"])(.*)\1$/, "$2");

    if (shouldApplyEnvKey(key)) {
      process.env[key] = value;
    }
  }
}
