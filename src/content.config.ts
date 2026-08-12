import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      date: z.coerce.date(),
      order: z.number(),
      image: image(),
      imageAlt: z.string(),
    }),
});

const faqs = defineCollection({
  loader: glob({ base: './src/content/faqs', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    question: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects, faqs };
