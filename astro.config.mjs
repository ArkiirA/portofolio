import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: replace YOUR-USERNAME with your actual GitHub username
  site: 'https://arkiira.github.io/rifki-portfolio',
  base: '/rifki-portfolio/',
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
