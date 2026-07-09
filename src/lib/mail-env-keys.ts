/** Server-side mail env vars — refreshed from `.env` in dev so SMTP edits apply without restart. */
export const MAIL_ENV_KEYS = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "MAIL_FROM",
  "MAIL_TO",
] as const;

export const MAIL_ENV_KEY_SET = new Set<string>(MAIL_ENV_KEYS);

export function shouldApplyEnvKey(key: string) {
  return MAIL_ENV_KEY_SET.has(key) || process.env[key] === undefined;
}
