import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://coollabs.io",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  redirects: {
    "/projects": "/",
    "/s": "/sponsorships",
  },

  server: {
    host: '0.0.0.0'
  },
  integrations: [svelte(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
