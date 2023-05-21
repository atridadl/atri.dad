// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import {
  SiGithub,
  SiLinkedin,
  SiNextdotjs,
  SiPrisma,
  SiSpotify,
  SiTwitch,
  SiTwitter,
  SiYoutube,
  SiAstro,
  SiSvelte,
  SiPostgresql,
  SiRedis,
  SiRailway,
} from "react-icons/si";
import type { LinkList } from "./types";

export const SITE_TITLE = "Atridad Lahiji";
export const SITE_DESCRIPTION = "Atridad's small corner of the internet.";

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

export const DISCORD_INVITE = "https://discord.gg/ksKsZ2RGnh";

export const SOCIALS: LinkList[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/atridad/",
    icon: SiLinkedin,
    excludeFromApi: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/atridadl/",
    icon: SiTwitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/atridadl",
    icon: SiGithub,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/user/31v3p4oq6im7fvpqhhbju222pbr4?si=d75830b95ed94d4f",
    icon: SiSpotify,
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
    name: "SvelteKit",
    href: "https://kit.svelte.dev/",
    icon: SiSvelte,
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

export const PROJECTS: LinkList[] = [
  {
    name: "Sprint Padawan",
    description:
      "A scrum poker tool that helps agile teams plan their sprints in real-time.",
    href: "https://github.com/atridadl/sprintpadawan",
    external: true,
  },
  {
    name: "fms-ts",
    description:
      "A tiny TypeScript library that sends mail using Fastmail's JMAP API.",
    href: "https://github.com/atridadl/fms-ts",
    external: true,
  },
];
