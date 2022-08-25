import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  site: 'https://thp-astro-minimal.vercel.app',
  integrations: [mdx(), sitemap(), tailwind()],
});
