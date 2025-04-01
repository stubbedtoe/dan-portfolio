import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
    integrations: [AstroPWA(), (await import('@playform/inline')).default(), tailwindcss(), sitemap(), compressor()],

    experimental: {
        responsiveImages: true,
        svg: true,
    },

    vite: {
        plugins: [tailwindcss()],
    },

    site: 'https://dan-murray-portfolio.netlify.app',

    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
    },
});
