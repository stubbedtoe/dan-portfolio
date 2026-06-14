import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compressor from 'astro-compressor';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [(await import('@playform/inline')).default(), sitemap(), compressor()],
  site: 'https://danmurrayartist.com',

  prefetch: {
      prefetchAll: true,
      defaultStrategy: 'viewport',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});