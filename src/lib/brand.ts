export const brand = {
  name: "Tek4Real",
  displayName: "Tek4Real",
  legalName: "Tek4Real, LLC",
  siteUrl: "https://tek4real.com",
  emailDomain: "tek4real.com",
  contactEmail: "hello@tek4real.com",
  tagline:
    "Technology consulting and software engineering – custom software, cloud, design, and AI.",
} as const;

export type HqOffice = {
  city: string;
  role: string;
  country: string;
  countryCode: string;
  streetAddress: string;
  /** Full mailing address for office cards and contact pages */
  address: string;
  /** Single-line address for footer and legal pages */
  addressInline: string;
  region?: string;
  postalCode?: string;
};

export const hqOffices = {
  americas: {
    city: "Denver",
    role: "Americas HQ",
    country: "USA",
    countryCode: "US",
    region: "CO",
    postalCode: "80202",
    streetAddress: "1675 Broadway, Suite 700",
    address: "1675 Broadway, Suite 700, Denver, CO 80202",
    addressInline: "1675 Broadway, Suite 700, Denver, CO 80202, USA",
  } satisfies HqOffice,
  apac: {
    city: "Hong Kong",
    role: "APAC HQ",
    country: "HK",
    countryCode: "HK",
    streetAddress: "Suite 2808, Two Exchange Square, 8 Connaught Place",
    address: "Suite 2808, Two Exchange Square, 8 Connaught Place, Central",
    addressInline: "Suite 2808, Two Exchange Square, 8 Connaught Place, Central, Hong Kong",
  } satisfies HqOffice,
} as const;

export const offices = [
  {
    city: hqOffices.americas.city,
    country: hqOffices.americas.country,
    role: hqOffices.americas.role,
    address: hqOffices.americas.address,
  },
  {
    city: hqOffices.apac.city,
    country: hqOffices.apac.country,
    role: hqOffices.apac.role,
    address: hqOffices.apac.address,
  },
] as const;

export const brandAssets = {
  logo: "/logo.png",
  logoIcon: "/logo-icon.png",
  logoSquare: "/logo-square.png",
  /** Default Open Graph / Twitter card (1200×630). */
  ogDefault: "/default.png",
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

export function officePostalAddressJsonLd(office: HqOffice) {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: office.streetAddress,
    addressLocality: office.city,
    ...(office.region ? { addressRegion: office.region } : {}),
    ...(office.postalCode ? { postalCode: office.postalCode } : {}),
    addressCountry: office.countryCode,
  };
}
