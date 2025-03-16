import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import tailwindcss from '@tailwindcss/vite';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  integrations: [AstroPWA(), playformCompress(), tailwindcss()],

  experimental: {
      responsiveImages: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});