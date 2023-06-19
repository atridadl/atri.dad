import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import compress from "astro-compress";
import preact from "@astrojs/preact";
import prefetch from "@astrojs/prefetch";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://atri.dad/",
  output: "hybrid",
  compressHTML: true,
  adapter: vercel(),
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000
  },
  integrations: [mdx(), sitemap(), tailwind(), compress({
    logger: 0
  }), preact({
    compat: true
  }), prefetch()],
  vite: {
    ssr: {
      noExternal: ["react-icons"]
    }
  },
  experimental: {
    assets: true
  }
});