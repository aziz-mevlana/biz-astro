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
    host: true, // tüm IP'lere izin ver
    port: 4321,
  },
  build: {
    format: 'directory',
    assets: '_assets',
    inlineStylesheets: 'never'
  },
  vite: {
    server: {
      host: true, // tüm IP'lere izin ver
      strictPort: true,
    }
  }
});
