import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import react from "@astrojs/react";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://atri.dad/",
  output: "hybrid",
  compressHTML: true,
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    compress({
      logger: 0,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  experimental: {
    hybridOutput: true,
  },
});
