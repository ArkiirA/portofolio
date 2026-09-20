import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ArkiirA.github.io/portofolio',
  base: '/portofolio/',
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
