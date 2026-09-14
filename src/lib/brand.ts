export const brand = {
  name: "Zorqiva",
  displayName: "Zorqiva",
  legalName: "zorqiva",
  siteUrl: "https://zorqiva.org/",
  emailDomain: "zorqiva.org",
  contactEmail: "contact@zorqiva.org",
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
    city: "Anchorage",
    role: "Americas HQ",
    country: "USA",
    countryCode: "US",
    region: "AK",
    postalCode: "99504",
    streetAddress: "5535 E 43rd Ave",
    address: "5535 E 43rd Ave, Anchorage, AK 99504",
    addressInline: "5535 E 43rd Ave, Anchorage, AK, USA, USA",
  } satisfies HqOffice,
  apac: {
    city: "Hong Kong",
    role: "APAC HQ",
    country: "HK",
    countryCode: "HK",
    streetAddress: "Room 1417, 15/F, Kowloon Commerce Centre 51 Kwai Cheong Road Kwai Chung",
    address: "Room 1417, 15/F, Kowloon Commerce Centre 51 Kwai Cheong Road Kwai Chung",
    addressInline: "Room 1417, 15/F, Kowloon Commerce Centre 51 Kwai Cheong Road Kwai Chung, New Territories HONG KONG",
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
