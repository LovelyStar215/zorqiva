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
  type: "Full-time" | "Part-time" | "Contract";
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
  {
    id: "junior-cms-developer",
    title: "Junior CMS Developer(WordPress/Drupal/Strapi)",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    level: "Junior",
    description:
      "Build, customize, and maintain WordPress, Drupal, and modern CMS platforms for client websites. Open only to candidates based in the United States.",
    overview:
      "Tek4Real is a technology consulting and software engineering company with headquarters in Hong Kong and Denver, Colorado. We help startups, growing businesses, and enterprises build and improve digital products, websites, and technology solutions, with distributed teams collaborating across time zones. We're looking for a motivated Junior CMS Developer to join our technology team – focused on building, customizing, and maintaining content management systems for client websites and digital platforms. You'll work with WordPress, Drupal, and other modern content platforms to create reliable, easy-to-manage digital experiences, collaborating directly with U.S.-based clients and our engineering team in Hong Kong. Professional experience is valuable, but we care strongly about curiosity, attention to detail, problem-solving, and willingness to grow. This role is open only to candidates currently residing in the United States.",
    responsibilities: [
      "Develop and maintain websites using CMS platforms such as WordPress, Drupal, and similar systems",
      "Customize CMS themes, templates, modules, and plugins based on project requirements",
      "Create and manage content types, pages, categories, and reusable content structures",
      "Configure CMS features and extensions",
      "Troubleshoot CMS-related issues and provide technical solutions",
      "Perform CMS updates, maintenance, and improvements",
      "Support website migrations and content transfers",
      "Work with designers and project teams to implement website requirements",
      "Ensure websites are functional, organized, and easy for clients to manage",
      "Integrate third-party services and improve website performance and usability",
    ],
    requirements: [
      "Currently residing in the United States",
      "Basic experience working with CMS platforms such as WordPress, Drupal, or similar systems",
      "Understanding of website structure and content management workflows",
      "Basic knowledge of HTML and CSS",
      "Familiarity with website customization and configuration",
      "Understanding of web hosting concepts and website deployment basics",
      "Strong attention to detail and problem-solving mindset",
      "Good English communication skills",
      "Ability to learn new platforms and tools quickly",
    ],
    niceToHave: [
      "Experience with headless CMS platforms (Strapi, Contentful, Sanity, Storyblok, Prismic, or similar)",
      "Experience creating custom WordPress themes or developing WordPress plugins",
      "Experience working with Drupal modules",
      "Experience with CMS migrations and integrating CMS platforms with external services",
      "Understanding of REST APIs or GraphQL",
      "Familiarity with SEO optimization, website accessibility, and performance improvements",
      "Basic knowledge of databases",
    ],
  },
  {
    id: "part-time-virtual-assistant",
    title: "Part-Time Virtual Assistant (Client Communication & Team Support)",
    department: "Operations",
    location: "Remote (US)",
    type: "Part-time",
    level: "Junior",
    description:
      "Support client communication, scheduling, documentation, and day-to-day coordination between our U.S. clients and Hong Kong technical team. Open only to candidates based in the United States.",
    overview:
      "Tek4Real is a technology consulting and software engineering company with headquarters in Hong Kong and Denver, Colorado. We work with startups, businesses, and organizations to deliver software development, digital solutions, and technology services across time zones. We're looking for a reliable and proactive Part-Time Virtual Assistant to support our international technology team – acting as a bridge between clients and our Hong Kong-based technical team through communication, scheduling, documentation, and administrative support. This role is ideal for someone who is organized, detail-oriented, comfortable communicating with people, and interested in working with a global technology company. This position is open only to candidates currently residing in the United States.",
    responsibilities: [
      "Assist with communication between clients and the technical team",
      "Organize client requests, updates, and project information",
      "Follow up on project discussions and action items",
      "Help ensure important messages and requirements are clearly communicated",
      "Support scheduling of meetings and coordination across time zones",
      "Organize project documents, notes, and communication records",
      "Prepare summaries of client discussions and meetings",
      "Help maintain project tracking information",
      "Assist with basic research and information gathering",
      "Support daily operational tasks and a smooth, professional client experience",
    ],
    requirements: [
      "Currently residing in the United States",
      "Excellent English communication skills (written and verbal)",
      "Strong organization and time management skills",
      "Ability to communicate professionally with clients",
      "Attention to detail and strong follow-through",
      "Ability to manage multiple tasks and priorities",
      "Comfortable working independently in a remote environment",
      "Reliable internet connection and availability during agreed working hours",
      "Positive attitude and willingness to learn",
    ],
    niceToHave: [
      "Previous virtual assistant, administrative assistant, or customer support experience",
      "Experience supporting software development or technology teams",
      "Familiarity with project management tools such as Jira, Trello, Asana, Notion, or similar",
      "Experience communicating with international clients",
      "Basic understanding of software development processes",
      "Experience preparing meeting notes, reports, or documentation",
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
