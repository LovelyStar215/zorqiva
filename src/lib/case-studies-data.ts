/** Drop final assets at public/images/case-studies/{id}.jpg (1600×1000+ recommended). */
export function caseStudyImagePath(id: string) {
  return `/images/case-studies/${id}.jpg`;
}

export type CaseStudy = {
  id: string;
  company: string;
  industry: string;
  services: string[];
  projectUrl: string;
  image: string;
  metric: string;
  metricLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  highlights: string[];
  quote?: string;
  author?: string;
  role?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "homedesigns-ai",
    company: "HomeDesigns AI",
    industry: "PropTech / AI",
    services: ["Custom Development", "AI & Data", "Cloud & DevOps", "UI/UX Design"],
    projectUrl: "https://homedesigns.ai",
    image: caseStudyImagePath("homedesigns-ai"),
    metric: "2.68M+",
    metricLabel: "Users worldwide",
    summary:
      "AI-powered home design platform that redesigns interiors, exteriors, gardens, and listings in under 30 seconds while keeping room structure locked.",
    challenge:
      "HomeDesigns AI needed a consumer-grade product that could turn a single photo into photorealistic redesigns across dozens of room types and styles — without distorting walls, windows, or layout. The experience had to feel instant, support virtual staging and video walkthroughs, and scale to millions of users with credit-based monetization.",
    solution:
      "Zorqiva built the full product stack: upload-and-generate flows, style preference engines, structure-lock rendering pipelines, and outputs for staging, 3D floor plans, and shoppable furniture links. We hardened the AI workflow for speed and reliability, integrated subscription billing, and designed a conversion funnel that turns first redesigns into paid plans.",
    highlights: [
      "Structure-lock AI keeps real room geometry intact",
      "160+ styles across interiors, exteriors, and gardens",
      "Virtual staging, video tours, and 2D-to-3D floor plans",
      "Shop-the-look commerce integrations",
      "Credit-based SaaS with 2.68M+ user scale",
    ],
  },
  {
    id: "sofi-health",
    company: "Sofi Health",
    industry: "Health & Wellness",
    services: ["Mobile Development", "Custom Development", "AI & Data", "Product Strategy"],
    projectUrl: "https://sofihealth.com",
    image: caseStudyImagePath("sofi-health"),
    metric: "2.12×",
    metricLabel: "Sleep quality improvement",
    summary:
      "Connected wellness platform pairing a Bluetooth sofi pod, plant-based capsules, and a mobile app that learns individual responses to natural sleep and calm formulations.",
    challenge:
      "Sofi set out to prove plant-based remedies with data, not marketing claims. They needed hardware-to-app sync on every spray, longitudinal journaling for mood and sleep, and analytics that surface personalized plant recommendations — all while meeting consumer health product expectations on iOS and Android.",
    solution:
      "Zorqiva delivered the mobile app and backend intelligence layer: Bluetooth pod pairing, usage journaling, pioneer program onboarding, and Atlas™ analytics that correlate capsule use with reported outcomes. The platform tracks millions of data points to identify what works for each user and powers Sofi's evidence-backed plant roadmap.",
    highlights: [
      "Bluetooth-connected sofi pod + iOS/Android apps",
      "Personal plant playlists from individual response data",
      "1.45M+ pioneer data points validating outcomes",
      "Mood, sleep, and capsule journaling dashboard",
      "Community and pioneer program support flows",
    ],
  },
  {
    id: "narratize",
    company: "Narratize",
    industry: "Enterprise / Manufacturing",
    services: ["Custom Development", "AI & Data", "Product Strategy", "Consulting"],
    projectUrl: "https://narratize.com",
    image: caseStudyImagePath("narratize"),
    metric: "46%",
    metricLabel: "Faster product development",
    summary:
      "Innovation intelligence platform for advanced manufacturing — unifying product knowledge, AI-assisted documentation, and portfolio management for R&D and innovation teams.",
    challenge:
      "Manufacturing innovators spend up to 70% of their time on documentation instead of building products. Narratize needed a system of intelligence that centralizes product knowledge, automates NPD documentation with AI, aligns cross-functional teams, and gives executives portfolio-wide visibility — trusted by leaders at Boeing, Kao, and similar enterprises.",
    solution:
      "Zorqiva helped architect and build Narratize's three-layer platform: Individual Hubs for ideation, Team Knowledge Hubs for searchable product documentation, and Portfolio Management for strategic alignment. AI understands product development context to auto-draft requirements, route approvals, and preserve institutional memory when team members change.",
    highlights: [
      "Individual, team, and portfolio intelligence layers",
      "AI documentation tied to product development workflows",
      "Cross-functional alignment for R&D, engineering, and marketing",
      "Enterprise customers including Boeing and Kao",
      "Measurable gains: 46% faster stages, 9 hrs saved per person weekly",
    ],
  },
  {
    id: "pitchem",
    company: "Pitch'em",
    industry: "Creator / MarTech",
    services: ["Mobile Development", "Custom Development", "AI & Data", "UI/UX Design"],
    projectUrl: "https://www.pitchem.co",
    image: caseStudyImagePath("pitchem"),
    metric: "3 clicks",
    metricLabel: "From scan to deal",
    summary:
      "Mobile-first platform that lets creators scan everyday products, unlock verified brand decision-maker contacts, and send AI-generated partnership pitches — all in one workflow.",
    challenge:
      "Creators and influencers waste hours hunting for the right brand contacts and drafting cold outreach. Pitch'em needed a product that turns any product scan into a warm path to partnership — with verified emails, one-click AI pitches, conversation tracking, and follow-up reminders — on web and iOS for creators at every level.",
    solution:
      "Zorqiva built Pitch'em end to end: product and brand scan/search, verified contact unlocking across categories from health and wellness to fashion, AI pitch generation tuned for brand partnerships, unified inbox for brand conversations, Gmail integration for Pro users, and subscription tiers from free starter access to unlimited scans and contacts.",
    highlights: [
      "Scan or search products to surface brand decision makers",
      "Verified contact info across major consumer brands",
      "One-click AI pitch generation for partnership outreach",
      "Centralized brand conversation and follow-up management",
      "iOS app with Beginner and Pro subscription plans",
    ],
  },
  {
    id: "boondockers-welcome",
    company: "Boondockers Welcome",
    industry: "Travel / Marketplace",
    services: ["Custom Development", "Mobile Development", "Cloud & DevOps", "Maintenance"],
    projectUrl: "https://www.boondockerswelcome.com",
    image: caseStudyImagePath("boondockers-welcome"),
    metric: "3,675+",
    metricLabel: "Host locations across North America",
    summary:
      "Membership marketplace connecting RV travelers with private hosts offering free overnight parking — part of the Harvest Hosts family with unified mobile app search.",
    challenge:
      "Boondockers Welcome needed a trusted two-sided marketplace where RV guests discover hosts along their route, arrange stays, and leave reviews — while hosts manage availability and hospitality at scale. The product also had to integrate with the broader Harvest Hosts mobile ecosystem for members using both programs.",
    solution:
      "Zorqiva extended the platform with host discovery, membership billing, guest-host messaging, stay coordination, and review flows — optimized for road travelers on mobile. Search, request, and communication features ship inside the Harvest Hosts app so dual members browse Boondockers Welcome and Harvest Hosts locations in one place.",
    highlights: [
      "3,675+ host locations across the US and Canada",
      "70% of hosts offer hookups for added comfort",
      "Guest membership with route-based host search",
      "Integrated Harvest Hosts mobile app experience",
      "Host and guest review system building community trust",
    ],
  },
  {
    id: "mompou-tapas",
    company: "Mompou Tapas Bar",
    industry: "Hospitality",
    services: ["Custom Development", "UI/UX Design", "Maintenance"],
    projectUrl: "https://www.mompoutapas.com",
    image: caseStudyImagePath("mompou-tapas"),
    metric: "Since 2005",
    metricLabel: "Ironbound dining destination",
    summary:
      "Digital presence for Newark's acclaimed Spanish tapas restaurant — online reservations, event booking, menus, flamenco show promotion, and private party inquiries.",
    challenge:
      "Mompou Tapas Bar needed a website that captures the energy of Spain's tapas culture while driving reservations and private events in Newark's Ironbound district. The site had to showcase extensive menus, flamenco performances, gift cards, and multi-room event packages — all mobile-friendly for pre-game crowds near Prudential Center and Penn Station.",
    solution:
      "Zorqiva designed and built a hospitality-focused site with OpenTable/Yelp reservation integration, structured menus for tapas and entrees, event inquiry forms for private parties, flamenco show promotion, eGift card sales, and gallery content — reflecting Mompou's modern take on traditional Spanish cuisine since 2005.",
    highlights: [
      "Online reservations and private event booking flows",
      "Full lunch, tapas, entree, dessert, and drinks menus",
      "Flamenco performance promotion and ticketing",
      "eGift cards and newsletter capture",
      "Location and parking guidance near Newark landmarks",
    ],
  },
  {
    id: "freshbridge",
    company: "FreshBridge",
    industry: "AgTech / Marketplace",
    services: ["Custom Development", "AI & Data", "Cloud & DevOps", "Product Strategy"],
    projectUrl: "https://portal.freshbridge.ca",
    image: caseStudyImagePath("freshbridge"),
    metric: "18%",
    metricLabel: "Food cost reduction reported",
    summary:
      "Farm-direct marketplace portal connecting Ontario food buyers with local farms — AI-powered sourcing, real-time inventory, and managed logistics for fresher produce at lower cost.",
    challenge:
      "Food buyers and restaurateurs struggled with middleman markups, unpredictable supply, and manual sourcing across Ontario farms. FreshBridge needed a buyer portal with real-time farm inventory, AI menu and sourcing assistance (FreshSelect™), order management, and logistics visibility — plus a farmer-facing path to list harvest at full price.",
    solution:
      "Zorqiva built the FreshBridge portal experience: buyer signup and sourcing workflows, FreshSelect™ AI assistant for demand-aligned purchasing, farm-direct catalog with live availability, order tracking through managed logistics, and reporting that helps kitchens forecast demand and cut waste — supporting FreshBridge's no-markup farm partnership model.",
    highlights: [
      "FreshSelect™ AI sourcing and menu planning assistant",
      "Real-time farm inventory and farm-direct pricing",
      "Buyer portal at portal.freshbridge.ca",
      "Managed logistics for food-safe, on-time delivery",
      "Demand forecasting to reduce waste",
    ],
  },
  {
    id: "silo-markets",
    company: "Silo Markets",
    industry: "Fintech",
    services: ["Custom Development", "Cloud & DevOps", "Security & Compliance", "UI/UX Design"],
    projectUrl: "https://www.silomarkets.com",
    image: caseStudyImagePath("silo-markets"),
    metric: "250K",
    metricLabel: "Max points earned annually",
    summary:
      "Modern investing platform where users earn rewards points on stocks, ETFs, and cash balances — custodied through Interactive Brokers with travel redemption partners.",
    challenge:
      "Silo needed a regulated-feeling consumer fintech product that lets investors hold portfolios with IBKR while earning up to 250,000 points per year redeemable for cash and travel. The platform required membership tiers, ACATS transfer flows, multi-account types (individual, IRA), and a polished marketing site that communicates SIPC/FDIC protections clearly.",
    solution:
      "Zorqiva delivered Silo's customer-facing platform and onboarding: account type selection, membership plan presentation (Gold and Platinum), portfolio transfer and cash deposit flows, points-earning logic surfaced in the product, travel portal integration with airline and hotel partners, and compliance-forward disclosures tied to IBKR custody.",
    highlights: [
      "Points on stocks, ETFs, and uninvested cash",
      "Interactive Brokers custody with SIPC + FDIC coverage",
      "Gold and Platinum membership tiers",
      "ACATS transfers with fee reimbursement",
      "Travel portal with 300+ airline and hotel partners",
    ],
  },
];

export function getCaseStudyById(id: string) {
  return caseStudies.find((study) => study.id === id);
}
