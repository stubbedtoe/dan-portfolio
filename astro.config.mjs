import { defineConfig } from 'astro/config';
// import { imageService } from '@unpic/astro/service';
import AstroPWA from '@vite-pwa/astro';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
    integrations: [AstroPWA(), playformCompress()],
    // image: {
    //     service: imageService(),
    //     // This can usually be auto-detected
    //     fallbackService: 'sharp',
    //     placeholder: 'blurhash',
    //     // This is the default
    //     layout: 'constrained',
    // },
});