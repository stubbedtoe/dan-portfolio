// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { file, glob } from 'astro/loaders';

// 3. Define your collection(s)
const portfolio = defineCollection({
    loader: glob({ pattern: '*.json', base: './src/content/_portfolio/' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            alt: z.string(),
            id: z.string(),
            image: image(),
            Dimensions: z.object({
                width: z.number(),
                height: z.number(),
            }),
            year: z.string(),
            medium: z.string(),
            active: z.boolean(),
            areaOfInterest: z.enum(['top', 'centre', 'bottom']),
            category: z.array(z.string()),
            order: z.number(),
        }),
});

const aboutImages = defineCollection({
    loader: file('src/content/about.json', { parser: (text) => JSON.parse(text).images }),
    schema: ({ image }) =>
        z.object({
            id: z.string(),
            image: image(),
            alt: z.string(),
        }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { portfolio, aboutImages };
