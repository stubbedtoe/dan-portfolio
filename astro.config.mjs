import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import compressor from 'astro-compressor';
import opengraphImages, { presets } from 'astro-opengraph-images';

// https://astro.build/config
export default defineConfig({
    integrations: [
        AstroPWA(),
        (await import('@playform/inline')).default(),
        tailwindcss(),
        sitemap(),
        opengraphImages({
            options: {
                fonts: [
                    {
                        name: 'DM Sans',
                        weight: 400,
                        style: 'normal',
                        data: fs.readFileSync('node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff'),
                    },
                ],
            },
            render: presets.blackAndWhite,
        }),
        compressor(),
    ],

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
