import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rifkirabbani.example',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
