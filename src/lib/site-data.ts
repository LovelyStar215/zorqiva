export const companyValues = [
  {
    icon: "solar:stars-bold",
    title: "Craft over shortcuts",
    desc: "We ship polished software – thoughtful architecture, clean code, and interfaces people enjoy using.",
  },
  {
    icon: "solar:hand-shake-bold",
    title: "Partners, not vendors",
    desc: "We embed with your team, communicate clearly, and own outcomes from discovery through launch.",
  },
  {
    icon: "solar:earth-bold",
    title: "Built to last",
    desc: "We design systems that scale with your business – maintainable, documented, and ready for what's next.",
  },
  {
    icon: "solar:shield-star-bold",
    title: "Security by default",
    desc: "Every engagement follows secure SDLC practices, least-privilege access, and production-grade ops.",
  },
] as const;

export const benefits = [
  {
    icon: "solar:heart-pulse-bold",
    title: "Comprehensive health coverage",
    desc: "Medical, dental, vision, and mental health – 100% covered for you and dependents.",
  },
  {
    icon: "solar:chart-2-bold",
    title: "Competitive pay",
    desc: "Top-of-market salaries with performance bonuses and transparent career frameworks.",
  },
  {
    icon: "solar:home-2-bold",
    title: "Flexible work",
    desc: "Hybrid flexibility across our Colorado and Hong Kong offices. Core collaboration hours, async-friendly culture.",
  },
  {
    icon: "solar:book-2-bold",
    title: "Learning budget",
    desc: "$3,000 annual stipend for courses, conferences, and certifications.",
  },
  {
    icon: "solar:calendar-bold",
    title: "Generous time off",
    desc: "Unlimited PTO with a 15-day minimum. Parental leave for all caregivers.",
  },
  {
    icon: "solar:cup-hot-bold",
    title: "Team rituals",
    desc: "Quarterly offsites, weekly demos, and a team kitchen stocked for long build days.",
  },
] as const;

export type JobDepartment = "Engineering" | "Design" | "Delivery" | "Sales" | "Operations";
export type JobLocation = "Colorado" | "Hong Kong" | "Hybrid (US)" | "Remote (US)";

export type Job = {
  id: string;
  title: string;
  department: JobDepartment;
  location: JobLocation;
  type: "Full-time" | "Contract";
  level: "Junior" | "Mid" | "Senior" | "Lead" | "Director";
  description: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
};

export function getJobById(id: string): Job | undefined {
  return openRoles.find((job) => job.id === id);
}

export const openRoles: Job[] = [
  {
    id: "junior-frontend-react",
    title: "Junior Frontend Developer (React)",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    level: "Junior",
    description:
      "Build responsive, modern web interfaces in React while learning directly from senior engineers on real client projects. Open only to candidates based in the United States.",
    overview:
      "Tek4Real is a technology consulting and software engineering company with headquarters in Hong Kong and Denver, Colorado. We partner with startups, scale-ups, and enterprise clients to build modern web applications, cloud solutions, AI-powered products, and custom software, with distributed teams collaborating across time zones to deliver for clients worldwide. We're looking for a motivated Junior Frontend Developer to join our growing engineering team – a great fit for someone early in their software engineering career who wants to learn from experienced developers while working on real client projects. You'll collaborate directly with our U.S.-based clients and work closely with our engineering team in Hong Kong in a flexible, remote environment. We value curiosity, creativity, and a strong desire to learn more than years of professional experience. This role is open only to candidates currently residing in the United States, since it requires direct collaboration with U.S.-based clients.",
    responsibilities: [
      "Develop responsive and modern web applications using React",
      "Collaborate with senior engineers on feature implementation and bug fixes",
      "Build clean, reusable, and maintainable frontend components",
      "Translate UI/UX designs into high-quality user interfaces",
      "Debug and resolve frontend issues across different browsers and devices",
      "Participate in code reviews and team discussions",
      "Work closely with product managers, designers, and backend engineers",
    ],
    requirements: [
      "Currently residing in the United States",
      "Good understanding of HTML5, CSS3, and JavaScript (ES6+)",
      "Basic knowledge of React",
      "Familiarity with Git or other version control systems",
      "Strong problem-solving and analytical thinking skills",
      "Excellent written and verbal English communication skills",
      "Curious, proactive, and eager to receive feedback",
      "Comfortable collaborating in a remote team environment",
    ],
    niceToHave: [
      "Experience with TypeScript or Next.js",
      "Basic understanding of REST APIs",
      "Experience with Tailwind CSS, Bootstrap, or other modern CSS frameworks",
      "Personal projects, internships, or a GitHub portfolio showing frontend development skills",
      "Basic knowledge of responsive web design and accessibility principles",
    ],
  },
  {
    id: "junior-backend-node",
    title: "Junior Backend Developer (Node.js)",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    level: "Junior",
    description:
      "Build and maintain server-side services and APIs in Node.js while learning directly from senior engineers on real client projects. Open only to candidates based in the United States.",
    overview:
      "Tek4Real is a technology consulting and software engineering company with headquarters in Hong Kong and Denver, Colorado. We partner with startups, scale-ups, and enterprise clients to build modern web applications, cloud solutions, AI-powered products, and custom software, with distributed teams collaborating across time zones to deliver for clients worldwide. We're looking for a motivated Junior Backend Developer to join our growing engineering team – a great fit for someone early in their software engineering career who wants to learn from experienced developers while working on real client projects. You'll collaborate directly with our U.S.-based clients and work closely with our engineering team in Hong Kong in a flexible, remote environment. We value curiosity, creativity, and a strong desire to learn more than years of professional experience. This role is open only to candidates currently residing in the United States, since it requires direct collaboration with U.S.-based clients.",
    responsibilities: [
      "Build and maintain RESTful APIs and backend services using Node.js",
      "Collaborate with senior engineers on database design, integrations, and bug fixes",
      "Write clean, tested, and maintainable server-side code",
      "Assist with deploying and monitoring services in cloud environments",
      "Debug and resolve backend issues across staging and production",
      "Participate in code reviews and team discussions",
      "Work closely with frontend engineers, product managers, and QA",
    ],
    requirements: [
      "Currently residing in the United States",
      "Good understanding of JavaScript (ES6+) and asynchronous programming",
      "Basic knowledge of Node.js and Express or a similar framework",
      "Familiarity with SQL or NoSQL databases",
      "Familiarity with Git or other version control systems",
      "Strong problem-solving and analytical thinking skills",
      "Excellent written and verbal English communication skills",
      "Comfortable collaborating in a remote team environment",
    ],
    niceToHave: [
      "Experience with TypeScript",
      "Basic understanding of REST or GraphQL API design",
      "Familiarity with AWS, Azure, or another cloud platform",
      "Personal projects, internships, or a GitHub portfolio showing backend development skills",
      "Basic knowledge of Docker or containerized environments",
    ],
  },
  {
    id: "junior-ux-ui-designer",
    title: "Junior UX/UI Designer",
    department: "Design",
    location: "Remote (US)",
    type: "Full-time",
    level: "Junior",
    description:
      "Support research, wireframes, and UI design for client products while learning directly from senior designers on real client work. Open only to candidates based in the United States.",
    overview:
      "Tek4Real is a technology consulting and software engineering company with headquarters in Hong Kong and Denver, Colorado. We partner with startups, scale-ups, and enterprise clients to build modern web applications, cloud solutions, AI-powered products, and custom software, with distributed teams collaborating across time zones to deliver for clients worldwide. We're looking for a motivated Junior UX/UI Designer to join our growing design team – a great fit for someone early in their design career who wants to learn from experienced designers while working on real client projects. You'll collaborate directly with our U.S.-based clients and work closely with our team in Hong Kong in a flexible, remote environment. We value curiosity, creativity, and a strong desire to learn more than years of professional experience. This role is open only to candidates currently residing in the United States, since it requires direct collaboration with U.S.-based clients.",
    responsibilities: [
      "Support user research, user flows, and wireframes for client products",
      "Create clean, accessible UI designs in Figma under senior designer guidance",
      "Help build and maintain design systems shared across client engagements",
      "Partner with engineers on feasibility, edge cases, and design QA",
      "Participate in design reviews, critiques, and sprint demos",
    ],
    requirements: [
      "Currently residing in the United States",
      "Basic to intermediate Figma skills",
      "Foundational understanding of UX/UI principles and visual design",
      "Strong problem-solving and analytical thinking skills",
      "Excellent written and verbal English communication skills",
      "Curious, proactive, and eager to receive feedback",
      "Comfortable collaborating in a remote team environment",
    ],
    niceToHave: [
      "A portfolio of personal, school, or internship design projects",
      "Basic front-end knowledge (HTML/CSS)",
      "Familiarity with accessibility and responsive design principles",
      "Exposure to user research or usability testing",
    ],
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Azure",
  "Google Cloud",
  "Kubernetes",
  "PostgreSQL",
  "Figma",
  "Terraform",
] as const;

export const trustBadges = [
  "AWS · Azure · GCP",
  "TypeScript & React",
  "Secure SDLC",
  "HIPAA-aligned delivery",
] as const;

export const agencyComparison = {
  before: [
    "Freelancer coordination overhead",
    "Inconsistent code quality",
    "No long-term maintenance plan",
    "Slow hiring cycles",
    "Siloed design & engineering",
  ],
  after: [
    "Dedicated cross-functional squad",
    "Senior engineers & designers",
    "Ongoing support retainers",
    "Team ready in 2 weeks",
    "Unified design-to-dev workflow",
  ],
} as const;

export const socialLinks = {
  twitter: "https://twitter.com/tek4real",
  linkedin: "https://linkedin.com/company/tek4real",
  github: "https://github.com/tek4real",
  youtube: "https://youtube.com/@tek4real",
} as const;
