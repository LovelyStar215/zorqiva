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
  favicon: "/favicon.ico",
} as const;

/** Single inbox for all public contact links. */
export function brandEmail() {
  return brand.contactEmail;
}
