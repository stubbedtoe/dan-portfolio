// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { file } from 'astro/loaders';

// 3. Define your collection(s)
const portfolio = defineCollection({
    loader: file('src/content/portfolio.json'),
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
        }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { portfolio };
