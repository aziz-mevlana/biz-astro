import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tubit.org.tr",
  integrations: [tailwind(), react(), sitemap()],
  devToolbar: {
    enabled: false
  },
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  build: {
    format: 'directory',
    assets: '_assets',
    inlineStylesheets: 'never'
  },
  redirects: {
    '/kayit-ol': {
      status: 301,
      destination: 'http://157.230.113.112:8000/kayit-ol'
    }
  }
});
