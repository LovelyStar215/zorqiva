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
    desc: "Hybrid flexibility across our Alaska and Hong Kong offices. Core collaboration hours, async-friendly culture.",
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
export type JobLocation = "Alaska" | "Hong Kong" | "Hybrid (US)" | "Remote (US)";

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
    id: "junior-frontend",
    title: "Junior Frontend Developer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    level: "Junior",
    description:
      "Build responsive, modern web interfaces in React while learning directly from senior engineers on real client projects. Open only to candidates based in the United States.",
    overview:
      "Zorqiva is a technology consulting and software engineering company with headquarters in Hong Kong and Anchorage, Alaska. We partner with startups, scale-ups, and enterprise clients to build modern web applications, cloud solutions, AI-powered products, and custom software. Our distributed teams collaborate across time zones to deliver high-quality solutions for clients worldwide. We're looking for a Frontend Developer (JavaScript Specialist) to join our growing engineering team. This role is ideal for someone with a strong foundation in JavaScript and modern frontend development who enjoys building responsive, maintainable, and user-focused web applications. You'll work directly with U.S.-based clients and collaborate closely with our engineering team in Hong Kong in a flexible, remote environment. We're looking for someone who is curious, detail-oriented, comfortable solving frontend challenges, and motivated to continuously improve their JavaScript and frontend engineering skills. This role is open only to candidates currently residing in the United States, as it requires regular collaboration with U.S.-based clients.",
    responsibilities: [
      "Develop responsive, modern, and high-quality web applications using JavaScript and React",
      "Build reusable, maintainable, and scalable frontend components",
      "Write clean, efficient, and well-structured JavaScript code",
      "Integrate frontend applications with REST APIs and backend services",
      "Debug and resolve JavaScript, browser compatibility, and performance issues",
      "Improve frontend performance, accessibility, and overall user experience",
      "Collaborate with senior engineers on architecture, feature development, and technical improvements",
      "Participate in code reviews and contribute to frontend development standards",
      "Work closely with designers, product managers, backend engineers, and other stakeholders",
      "Test and troubleshoot applications across different browsers, screen sizes, and devices",
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
    id: "junior-backend",
    title: "Junior Backend Developer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    level: "Junior",
    description:
      "Build and maintain server-side services and APIs in C# and .NET while learning directly from senior engineers on real client projects. Open only to candidates based in the United States.",
    overview:
      "Zorqiva is a technology consulting and software engineering company with headquarters in Hong Kong and Anchorage, Alaska. We partner with startups, scale-ups, and enterprise clients to build modern web applications, cloud solutions, AI-powered products, and custom software. Our distributed teams collaborate across time zones to deliver high-quality solutions for clients worldwide. We're looking for a C# / .NET Developer to join our growing engineering team. This role is ideal for someone with a strong foundation in C#, .NET, and backend development who enjoys building reliable, maintainable, and scalable software solutions. You'll work directly with U.S.-based clients and collaborate closely with our engineering team in Hong Kong in a flexible, remote environment. We're looking for someone who is curious, detail-oriented, comfortable solving technical problems, and motivated to continuously improve their software engineering skills. This role is open only to candidates currently residing in the United States, as it requires regular collaboration with U.S.-based clients.",
    responsibilities: [
      "Develop and maintain backend applications using C# and .NET",
      "Build scalable and reusable services, APIs, and application components",
      "Write clean, efficient, and maintainable C# code",
      "Develop and integrate REST APIs and backend services",
      "Work with relational databases and implement data access using Entity Framework",
      "Debug and resolve application, API, and performance issues",
      "Participate in code reviews and contribute to development standards",
      "Collaborate with senior engineers on architecture, feature development, and technical improvements",
      "Work closely with frontend developers, product managers, designers, and other stakeholders",
      "Write unit tests and help maintain application quality and reliability",
      "Troubleshoot applications across development, testing, and production environments",
    ],
    requirements: [
      "Currently residing in the United States",
      "Good understanding of C# and .NET",
      "Basic knowledge of ASP.NET Core",
      "Understanding of REST APIs and HTTP concepts",
      "Familiarity with relational databases and SQL",
      "Experience using Git or another version control system",
      "Strong problem-solving and analytical thinking skills",
      "Ability to write clean, readable, and maintainable code",
      "Excellent written and verbal English communication skills",
      "Curious, proactive, and eager to receive feedback",
      "Comfortable collaborating in a remote team environment",
    ],
    niceToHave: [
      "Experience with ASP.NET Core Web AP",
      "Experience with Entity Framework Core",
      "Familiarity with SQL Server, PostgreSQL, or MySQL",
      "Basic understanding of dependency injection and software design patterns",
      "Experience with LINQ and asynchronous programming using async / await",
      "Familiarity with unit testing frameworks such as xUnit, NUnit, or MSTest",
      "Basic knowledge of Docker or cloud platforms such as Azure or AWS",
      "Experience with CI/CD pipelines",
      "Familiarity with microservices architecture",
      "Experience with JavaScript, TypeScript, React, or other frontend technologies",
      "Personal projects, internships, or a GitHub portfolio demonstrating C# and .NET development skills"
    ],
  },
  {
    id: "senior-django-developer",
    title: "Senior Django Developer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    level: "Senior",
    description:
      "Design, build, and maintain scalable backend services and APIs using Python and Django while contributing to architecture decisions and delivering production-ready solutions for real client projects. Open only to candidates based in the United States.",
    overview:
      "Zorqiva is a technology consulting and software engineering company with headquarters in Hong Kong and Anchorage, Alaska. We partner with startups, scale-ups, and enterprise clients to build modern web applications, cloud solutions, AI-powered products, and custom software. Our distributed teams collaborate across time zones to deliver high-quality solutions for clients worldwide. We're looking for a Senior Django Developer to join our growing engineering team. This role is ideal for an experienced backend engineer with a strong foundation in Python, Django, Django REST Framework, relational databases, and scalable application architecture. You'll take ownership of backend systems, contribute to technical and architectural decisions, mentor other engineers, and work directly with U.S.-based clients while collaborating closely with our engineering team in Hong Kong. We're looking for someone who is technically strong, detail-oriented, comfortable solving complex engineering problems, and able to balance software quality, performance, maintainability, and business requirements. This role is open only to candidates currently residing in the United States, as it requires regular collaboration with U.S.-based clients.",
    responsibilities: [
      "Design, develop, and maintain backend applications using Python and Django",
      "Build scalable, secure, and reusable services, APIs, and application components",
      "Design and implement REST APIs using Django REST Framework",
      "Write clean, efficient, testable, and maintainable Python code",
      "Design data models and optimize database access using the Django ORM",
      "Work with relational databases such as PostgreSQL and MySQL",
      "Identify and resolve application, API, database, and performance issues",
      "Contribute to system architecture and make technical design decisions",
      "Review code and help establish engineering standards and best practices",
      "Mentor junior and mid-level engineers through code reviews and technical guidance",
      "Collaborate with frontend developers, product managers, designers, and other stakeholders",
      "Write automated tests and maintain application quality, security, and reliability",
      "Troubleshoot applications across development, testing, staging, and production environments",
      "Improve application performance, scalability, observability, and reliability",
      "Contribute to CI/CD workflows, deployment processes, and engineering documentation"
    ],
    requirements: [
      "Currently residing in the United States",
      "Strong professional experience with Python and Django",
      "Strong experience building production applications with Django REST Framework",
      "Strong understanding of REST APIs, HTTP, authentication, and API design principles",
      "Strong knowledge of relational databases, SQL, and database design",
      "Experience with PostgreSQL, MySQL, or similar relational database systems",
      "Strong understanding of the Django ORM and database query optimization",
      "Experience designing and maintaining scalable backend systems",
      "Experience with Git and collaborative software development workflows",
      "Experience writing unit, integration, and API tests",
      "Understanding of software design principles, design patterns, and clean architecture",
      "Ability to diagnose and resolve complex application and performance issues",
      "Ability to independently own features from technical design through production deployment",
      "Experience reviewing code and providing constructive technical feedback",
      "Strong problem-solving and analytical thinking skills",
      "Excellent written and verbal English communication skills",
      "Comfortable collaborating with clients and distributed engineering teams",
      "Ability to mentor engineers and contribute to technical decision-making"
    ],
    niceToHave: [
      "Experience with FastAPI or other Python web frameworks",
      "Experience with Celery and asynchronous/background task processing",
      "Experience with Redis or other caching and messaging technologies",
      "Experience designing and operating microservices or distributed systems",
      "Experience with Docker and containerized application development",
      "Experience with Kubernetes",
      "Experience deploying applications to AWS, Azure, or Google Cloud",
      "Experience building and maintaining CI/CD pipelines",
      "Experience with application monitoring, logging, and observability tools",
      "Experience with message brokers such as RabbitMQ or Kafka",
      "Experience with WebSockets or real-time applications",
      "Knowledge of application security and secure API development practices",
      "Experience improving database and application performance at scale",
      "Familiarity with JavaScript, TypeScript, React, or other frontend technologies",
      "Experience integrating AI/LLM APIs or building AI-powered applications",
      "Experience leading technical initiatives or mentoring software engineers"
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
  twitter: "https://twitter.com/Zorqiva",
  linkedin: "https://linkedin.com/company/Zorqiva",
  github: "https://github.com/Zorqiva",
  youtube: "https://youtube.com/@Zorqiva",
} as const;
