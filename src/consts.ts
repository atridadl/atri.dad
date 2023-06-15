// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import {
  SiGithub,
  SiLinkedin,
  SiNextdotjs,
  SiPrisma,
  SiApplemusic,
  SiTwitch,
  SiYoutube,
  SiAstro,
  SiPostgresql,
  SiRedis,
  SiRailway,
  SiTypescript,
  SiMastodon,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import type { LinkList } from "./types";

// Meta Info
export const SITE_TITLE = "Atridad Lahiji";
export const SITE_DESCRIPTION = "I'm just here for the vibes...";

// Files
export const STATIC_FILES_ROOT = "https://srv.atri.dad";
export const RESUME_URL = `${STATIC_FILES_ROOT}/Atridad_Lahiji_Resume_Public.pdf`;

// Protected routes
export const PROTECTED_ROUTES = ["/api/count"];

// Nav
export const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

// Social
export const DISCORD_INVITE = "https://discord.gg/ksKsZ2RGnh";

export const SOCIALS: LinkList[] = [
  {
    name: "Email",
    href: "mailto:me@atri.dad",
    icon: MdEmail,
    excludeFromApi: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/atridad/",
    icon: SiLinkedin,
    excludeFromApi: true,
  },
  {
    name: "Mastodon",
    href: "https://hachyderm.io/@atridad",
    icon: SiMastodon,
  },
  {
    name: "GitHub",
    href: "https://github.com/atridadl",
    icon: SiGithub,
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/profile/atridad",
    icon: SiApplemusic,
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/himbothyswaggins",
    icon: SiTwitch,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@himbothyswaggins",
    icon: SiYoutube,
  },
];

// Skills
export const TECHNOLOGIES: LinkList[] = [
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: SiNextdotjs,
  },
  {
    name: "Astro",
    href: "https://astro.build/",
    icon: SiAstro,
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: SiTypescript,
  },
  {
    name: "Prisma",
    href: "https://www.prisma.io/",
    icon: SiPrisma,
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: SiPostgresql,
  },
  {
    name: "Redis",
    href: "https://redis.io/",
    icon: SiRedis,
  },
  {
    name: "Railway",
    href: "https://railway.app?referralCode=iSHiw9",
    icon: SiRailway,
  },
];

// Projects
export const PROJECTS: LinkList[] = [
  {
    name: "Sprint Padawan",
    description:
      "A scrum poker tool that helps agile teams plan their sprints in real-time.",
    href: "https://github.com/atridadl/sprintpadawan",
    external: true,
  },
  {
    name: "HimBot",
    description:
      "A discord bot written in Typescript. Loosly named after my username online (HimbothySwaggins).",
    href: "https://github.com/atridadl/HimBot",
    external: true,
  },
  {
    name: "Chateau",
    description: "Every dev builds basic chat demo... why can't I?",
    href: "https://github.com/atridadl/chateau",
    external: true,
  },
  {
    name: "redicache-ts",
    description:
      "A tiny TypeScript library that makes using redis for API caching easier.",
    href: "https://github.com/atridadl/redicache-ts",
    external: true,
  },
];
