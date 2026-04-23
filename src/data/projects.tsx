import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiAngular,
  SiDjango,
  SiJavascript,
  SiNestjs,
  SiPostgresql,
  SiPython,
  SiTypescript,
} from "react-icons/si";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 my-3 mb-8">
      <Link target="_new" href={live}>
        <Button size="sm">
          Visit Website <ArrowUpRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
      {repo && (
        <Link target="_new" href={repo}>
          <Button size="sm">
            Github <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  react: { title: "React", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  angular: { title: "Angular", bg: "black", fg: "white", icon: <SiAngular /> },
  nestjs: { title: "NestJS", bg: "black", fg: "white", icon: <SiNestjs /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  django: { title: "Django", bg: "black", fg: "white", icon: <SiDjango /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};

const projects: Project[] = [
  // 🔥 BILLING SYSTEM
  {
    id: "billing-management-system",
    category: "Web Application",
    title: "Billing Management System",
    src: "/assets/projects-screenshots/billing/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.django, PROJECT_SKILLS.postgres],
    },
    live: "https://suryakiranportfolio.vercel.app",
    github: "https://github.com/devpytech",
    content: (
      <div>
        <TypographyP className="font-mono">
          A production-ready Billing Management System developed during my internship at Techfifo Innovations, designed to reduce manual invoice processing time and streamline business operations.
        </TypographyP>

        <ProjectsLinks live="https://suryakiranportfolio.vercel.app" repo="https://github.com/devpytech" />

        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <ul className="list-disc ml-6">
          <li className="font-mono">Reduced manual invoice processing time by ~40%</li>
          <li className="font-mono">Multi-page A4 invoice generation with PDF export</li>
          <li className="font-mono">GST calculation and multi-bank transaction handling</li>
          <li className="font-mono">Real-time API integration</li>
          <li className="font-mono">Robust validation and production-level error handling</li>
        </ul>
      </div>
    ),
  },

  // 🔥 STUDENT RECORD
  {
    id: "student-record-manager",
    category: "Web Application",
    title: "Student Record Manager",
    src: "/assets/projects-screenshots/student-record/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.angular, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.nestjs, PROJECT_SKILLS.postgres],
    },
    live: "https://suryakiranportfolio.vercel.app",
    github: "https://github.com/devpytech",
    content: (
      <div>
        <TypographyP className="font-mono">
          A full-stack Student Record Manager built using Angular and NestJS, designed for secure and scalable student data management.
        </TypographyP>

        <ProjectsLinks live="https://suryakiranportfolio.vercel.app" repo="https://github.com/devpytech" />

        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <ul className="list-disc ml-6">
          <li className="font-mono">Full CRUD operations with REST API architecture</li>
          <li className="font-mono">Secure authentication with PostgreSQL integration</li>
          <li className="font-mono">Type-safe development using TypeScript</li>
          <li className="font-mono">Optimized UI performance and responsiveness</li>
          <li className="font-mono">Scalable and maintainable structure</li>
        </ul>
      </div>
    ),
  },

  

  // 🔥 GYM SYSTEM (NEW - IMPORTANT)
  {
    id: "gym-management-system",
    category: "Web Application",
    title: "Gym Management System",
    src: "/assets/projects-screenshots/gym/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.django, PROJECT_SKILLS.postgres],
    },
    live: "https://your-live-link",
    github: "https://github.com/devpytech",
    content: (
      <div>
        <TypographyP className="font-mono">
          A dual-panel Gym Management System designed for managing members, subscriptions, and transactions with role-based access.
        </TypographyP>

        <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
        <ul className="list-disc ml-6">
          <li className="font-mono">JWT-based role-based authentication</li>
          <li className="font-mono">Member and subscription tracking system</li>
          <li className="font-mono">Real-time notifications using Firebase</li>
          <li className="font-mono">Modular API integration</li>
          <li className="font-mono">Admin and superadmin dashboards</li>
        </ul>
      </div>
    ),
  },

  {
  id: "palakkad-trip-planner",
  category: "Web Application",
  title: "Palakkad Trip Planner",
  src: "/assets/projects-screenshots/palakkad/landing.png",
  screenshots: ["landing.png"],
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
    backend: [],
  },
  live: "https://your-live-link",
  github: "https://github.com/devpytech",
  content: (
    <div>
      <TypographyP className="font-mono">
        A modern tourism web application designed to help users explore and plan trips across Palakkad. Focused on clean UI, smooth user experience, and intelligent itinerary generation.
      </TypographyP>

      <ProjectsLinks live="https://your-live-link" repo="https://github.com/devpytech" />

      <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
      <ul className="list-disc ml-6">
        <li className="font-mono">Interactive itinerary generator based on user interests</li>
        <li className="font-mono">Modern glassmorphism UI with dark theme</li>
        <li className="font-mono">Destination cards with filters and categories</li>
        <li className="font-mono">Responsive and mobile-friendly design</li>
        <li className="font-mono">Smooth animations and clean UX</li>
      </ul>
    </div>
  ),
}
];

export default projects;