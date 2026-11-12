import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Projects: one Markdown file per project in src/content/projects/.
 * The file name becomes the URL: smart-thing.md → /projects/smart-thing/
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One sentence shown on the card and as the case study lede. */
      impact: z.string(),
      /** Short category shown in mono, e.g. "Internship", "Thesis", "Side project". */
      kind: z.string(),
      year: z.string(),
      role: z.string(),
      /** e.g. "Jul — Oct 2026" */
      period: z.string(),
      status: z.string().optional(),
      stack: z.array(z.string()).min(1),
      /** Path relative to this file, e.g. ../../assets/projects/cover.png */
      cover: image(),
      coverAlt: z.string(),
      links: z
        .array(
          z.object({
            label: z.string(),
            href: z.url(),
          }),
        )
        .default([]),
      /** Lower numbers appear first on the homepage. */
      order: z.number(),
      /** Hidden from the site when true. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
