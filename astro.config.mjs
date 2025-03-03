import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import { imageService } from '@unpic/astro/service';

// https://astro.build/config
export default defineConfig({
    integrations: [AstroPWA()],
    image: {
        service: imageService({
            // This can usually be auto-detected
            fallbackService: 'netlify',
            placeholder: 'blurhash',
            // This is the default
            layout: 'constrained',
        }),
    },
});
