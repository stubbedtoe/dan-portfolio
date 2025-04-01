import { getCollection } from 'astro:content';

const unsortedWorks = await getCollection('portfolio', ({ data }) => data.active);
export const works = unsortedWorks.sort((a, b) => a.data.order - b.data.order);

export const getCategoryWorks = (category: string) => works.filter(({ data }) => data.category.includes(category));

export const allCategories = works.reduce(
    (acc, curr) =>
        curr.data.category.reduce((found, category) => (found.includes(category) ? found : [...found, category]), acc),
    [] as string[]
);

export type Painting = (typeof works)[0];
