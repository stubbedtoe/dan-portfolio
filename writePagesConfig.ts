import { parse, stringify } from 'yaml';
import fs from 'fs';
const importedJson = import.meta.glob('./src/content/_portfolio/*.json', { eager: true });
const works = Object.values(importedJson).map((item: any) => item.default.category);
const allcategories = works.reduce((acc, curr) => {
    return curr.reduce((found, category) => {
        if (found.includes(category)) {
            return found;
        }
        return [...found, category];
    }, acc);
}, []);

const file = fs.readFileSync('.pages.yml', 'utf8');
const config = parse(file);
const portfolioPage = config.content.find((item) => item.name === 'Portfolio');
const others = config.content.filter((item) => item.name !== 'Portfolio');

if (portfolioPage) {
    const categoryField = portfolioPage.fields.find((field) => field.name === 'category');
    const otherFields = portfolioPage.fields.filter((field) => field.name !== 'category');

    const updates = {
        ...config,
        content: [
            {
                ...portfolioPage,
                fields: [
                    ...otherFields,
                    {
                        ...categoryField,
                        options: {
                            ...categoryField.options,
                            values: allcategories,
                        },
                    },
                ],
            },
            ...others,
        ],
    };

    fs.writeFileSync('.pages.yml', stringify(updates));
}
