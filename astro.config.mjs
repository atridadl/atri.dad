import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  site: "https://atri.dad/",
  output: "hybrid",
  compressHTML: true,
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    compress({
      logger: 0,
    }),
    preact({
      compat: true,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
