import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
    integrations: [(await import('@playform/inline')).default(), tailwindcss(), sitemap(), compressor()],

    vite: {
        plugins: [tailwindcss()],
    },

    site: 'https://danmurrayartist.com',

    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
    },
});
