// ================= SKILLS =================

export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  ANGULAR = "angular",
  NEXTJS = "nextjs",
  PYTHON = "python",
  DJANGO = "django",
  NESTJS = "nestjs",
  POSTGRES = "postgres",
  SQLITE = "sqlite",
  GIT = "git",
  GITHUB = "github",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Core language for building dynamic web applications.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Typed JavaScript for scalable and maintainable applications.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Markup language for structuring web content.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Styling language for building responsive UI designs.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Library for building modern and interactive user interfaces.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.ANGULAR]: {
    id: 6,
    name: "angular",
    label: "Angular",
    shortDescription: "Framework for building structured and scalable applications.",
    color: "#dd0031",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "React framework for building full-stack web applications.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 8,
    name: "python",
    label: "Python",
    shortDescription: "Versatile language for backend development and scripting.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.DJANGO]: {
    id: 9,
    name: "django",
    label: "Django",
    shortDescription: "Backend framework for building secure and scalable APIs.",
    color: "#092e20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  [SkillNames.NESTJS]: {
    id: 10,
    name: "nestjs",
    label: "NestJS",
    shortDescription: "Structured backend framework for enterprise-grade APIs.",
    color: "#e0234e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Relational database for scalable and reliable data storage.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.SQLITE]: {
    id: 12,
    name: "sqlite",
    label: "SQLite",
    shortDescription: "Lightweight database for local and small-scale applications.",
    color: "#003b57",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Version control system for tracking code changes.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Platform for code hosting and collaboration.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 15,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Platform for deploying modern web applications.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

// ================= EXPERIENCE =================

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2026",
    endDate: "Present",
    title: "Full Stack Developer Intern",
    company: "Techfifo Innovations, Palakkad",
    description: [
      "Developed a Billing Management System that reduced manual invoice processing time by ~40%.",
      "Integrated REST APIs for real-time data synchronization and dynamic UI updates.",
      "Built advanced invoice features including tax calculation and multi-bank transactions.",
      "Improved UI reliability with strong validation and production-level error handling.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.JS,
      SkillNames.CSS,
      SkillNames.HTML,
    ],
  },
  {
    id: 2,
    startDate: "Jul 2025",
    endDate: "Aug 2025",
    title: "Junior Web Developer Intern",
    company: "Telematics Technologies Pvt. Ltd., Coimbatore",
    description: [
      "Developed a full-stack Student Record Manager using Angular and NestJS with complete CRUD functionality.",
      "Designed and integrated REST APIs with PostgreSQL for scalable data management.",
      "Implemented secure authentication with login and registration systems.",
      "Enhanced UI performance and responsiveness for improved user experience.",
    ],
    skills: [
      SkillNames.ANGULAR,
      SkillNames.NESTJS,
      SkillNames.POSTGRES,
      SkillNames.TS,
    ],
  },
];

// ================= THEME DISCLAIMERS =================

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness.",
    "Brace yourself! Light mode is about to shine bright.",
    "Switching to light mode... your eyes might need adjustment.",
  ],
  dark: [
    "Welcome back to the dark side.",
    "Switching to dark mode... much easier on the eyes.",
    "Dark mode activated. Smooth and comfortable.",
    "Back to shadows. This feels right.",
    "Dark mode on. Clean and focused experience.",
  ],
};