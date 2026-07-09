export const brand = {
  name: "Tek4Real",
  legalName: "Tek4Real, Inc.",
  siteUrl: "https://tek4real.com",
  emailDomain: "tek4real.com",
  contactEmail: "hello@tek4real.com",
} as const;

export const brandAssets = {
  logo: "/logo.png",
  logoIcon: "/logo-icon.png",
  logoSquare: "/logo-square.png",
  favicon: "/favicon.ico",
  favicon48: "/favicon-48x48.png",
  favicon96: "/favicon-96x96.png",
  favicon192: "/favicon-192x192.png",
  appleTouchIcon: "/apple-touch-icon.png",
  webManifest: "/site.webmanifest",
} as const;

/** Single inbox for all public contact links. */
export function brandEmail() {
  return brand.contactEmail;
}
