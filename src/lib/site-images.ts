/**
 * Unique background image per section – no image is reused across pages.
 * Drop files into public/images/ using the exact filenames below.
 */
export const siteImages = {
  /** Homepage – "What we do" section */
  homeServices: "/images/home-services.jpg",
  /** Homepage – "How we build" section */
  homeDevelopment: "/images/home-development.jpg",

  /** Services page – service areas overview */
  servicesOverview: "/images/services-overview.jpg",
  /** Services page – engineering process section */
  servicesProcess: "/images/services-process.jpg",

  /** About page – "Our studio" section */
  aboutStudio: "/images/about-studio.jpg",
  /** About page – "The team" section */
  aboutTeam: "/images/about-team.jpg",

  /** Contact page – global headquarters */
  contactHeadquarters: "/images/contact-headquarters.jpg",

  /** Careers page – "Life at Zorqiva" culture */
  careersCulture: "/images/careers-culture.jpg",

  /** Industries page – cross-sector client work */
  solutionsIndustries: "/images/solutions-industries.jpg",

  /** Pricing page – client partnership / engagement */
  pricingPartnership: "/images/pricing-partnership.jpg",
} as const;

export type SiteImageKey = keyof typeof siteImages;

/** Human-readable brief for each asset (for content/photo briefs). */
export const siteImageBriefs: Record<SiteImageKey, string> = {
  homeServices:
    "Cross-functional agency team showcasing development, cloud, design, and AI – collaborative, premium, global studio feel.",
  homeDevelopment:
    "Engineers shipping software – sprint demo, pair programming, or modern delivery workflow in action.",
  servicesOverview:
    "Wide shot of Zorqiva service delivery – planning session, multi-discipline team, client-ready professionalism.",
  servicesProcess:
    "Hands-on engineering and QA – code review, testing, or launch-ready product work (real, not fake UI).",
  aboutStudio:
    "Zorqiva workspace or headquarters – polished office/studio interior representing Alaska & Hong Kong presence.",
  aboutTeam:
    "Team culture moment – builders collaborating authentically; warm, diverse, craft-focused.",
  contactHeadquarters:
    "Welcoming headquarters visual – office exterior/interior or reception; establishes real-world presence.",
  careersCulture:
    "Life at Zorqiva – candid team energy, workshop or social moment that appeals to candidates.",
  solutionsIndustries:
    "Client work across sectors – healthcare, fintech, retail, or enterprise context; compliance-ready professionalism.",
  pricingPartnership:
    "Client partnership – discovery call, handshake, or strategy session; trust and long-term engagement.",
};
