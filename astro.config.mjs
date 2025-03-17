import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    integrations: [
        AstroPWA(),
        (await import('@playform/compress')).default({
            Image: false,
        }),
        (await import('@playform/inline')).default(),
        tailwindcss(),
        sitemap(),
    ],

    experimental: {
        responsiveImages: true,
    },

    vite: {
        plugins: [tailwindcss()],
    },

    site: 'https://dan-murray-portfolio.netlify.app',
});
