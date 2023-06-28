// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import {
  SiGithub,
  SiLinkedin,
  SiNextdotjs,
  SiPrisma,
  SiSpotify,
  SiTwitch,
  SiYoutube,
  SiAstro,
  SiPlanetscale,
  SiUpstash,
  SiVercel,
  SiRailway,
  SiTypescript,
  SiMastodon,
  SiMatrix,
  SiLemmy,
  SiOpenai,
  SiPreact,
  SiTrpc,
  SiReact,
  SiSvelte,
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
    external: false,
  },
  {
    name: "Projects",
    href: "/projects",
    external: false,
  },
  {
    name: "Blog",
    href: "/blog",
    external: false,
  },
  {
    name: "Status",
    href: "https://status.atri.dad/status/public",
    external: true,
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
    name: "Mastodon",
    href: "https://hachyderm.io/@atridadl",
    icon: SiMastodon,
  },
  {
    name: "Lemmy",
    href: "https://lemmy.ml/u/himbothy",
    icon: SiLemmy,
  },
  {
    name: "Matrix",
    href: "https://matrix.to/#/@atridadl:matrix.org",
    icon: SiMatrix,
  },
  {
    name: "GitHub",
    href: "https://github.com/atridadl",
    icon: SiGithub,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/user/31v3p4oq6im7fvpqhhbju222pbr4?si=5ff3e1ad04204d2e",
    icon: SiSpotify,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/atridad/",
    icon: SiLinkedin,
    excludeFromApi: true,
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
    name: "Preact",
    href: "https://preactjs.com",
    icon: SiPreact,
  },
  {
    name: "React",
    href: "https://react.dev",
    icon: SiReact,
  },
  {
    name: "Svelte",
    href: "https://svelte.dev",
    icon: SiSvelte,
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
    name: "tRPC",
    href: "https://trpc.io/",
    icon: SiTrpc,
  },
  {
    name: "Planetscale",
    href: "https://planetscale.com/",
    icon: SiPlanetscale,
  },
  {
    name: "Upstash",
    href: "https://upstash.com/",
    icon: SiUpstash,
  },
  {
    name: "OpenAI",
    href: "https://openai.com",
    icon: SiOpenai,
  },
  {
    name: "Vercel",
    href: "https://vercel.com/home",
    icon: SiVercel,
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
    description: "Every dev builds a basic chat demo... why can't I?",
    href: "https://github.com/atridadl/chateau",
    external: true,
  },
  {
    name: "Santa Swap",
    description: "Dead-simple secret santa app.",
    href: "https://github.com/atridadl/santaswap",
    external: true,
  },
];
