import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
    integrations: [AstroPWA(), playformCompress()],
    experimental: {
        responsiveImages: true,
    },
});
