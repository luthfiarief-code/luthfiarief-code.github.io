# Portfolio — Muhammad Luthfi Arief

Personal portfolio built with Astro + TypeScript, plain CSS, and no UI framework.
Design direction: "Engineer's Notebook".

## Commands

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm install`     | Install dependencies (Node 22.23+ needed) |
| `npm run dev`     | Dev server at http://localhost:4321       |
| `npm run build`   | Production build into `dist/`             |
| `npm run preview` | Serve the built `dist/` locally           |
| `npm run check`   | Type-check `.astro` and `.ts` files       |

## Where to edit content

| What                                                    | File                                    |
| ------------------------------------------------------- | --------------------------------------- |
| Name, tagline, status line, email, socials, nav         | `src/data/site.ts` → `site`             |
| Section headings & intros (Work, Experience, …)         | `src/data/site.ts` → `sections`         |
| Experience timeline                                     | `src/data/site.ts` → `experience`       |
| About story, education, skills line, photo              | `src/data/site.ts` → `about`            |
| Footer note                                             | `src/data/site.ts` → `footer`           |
| Projects / case studies (one file each)                 | `src/content/projects/*.md`             |
| Project images                                          | `src/assets/projects/`                  |
| CV                                                      | `public/cv.pdf` (keep the file name)    |
| Profile photo                                           | `src/assets/` + import it in `site.ts`  |
| Colors, fonts, spacing, motion                          | `src/styles/tokens.css`                 |

Search the project for `PLACEHOLDER` to find every invented value that still needs real data.

### Adding a project

1. Put a cover image (3:2, at least 1200×800) in `src/assets/projects/`.
2. Copy an existing file in `src/content/projects/` and rename it. The file name becomes the URL
   (`my-project.md` → `/projects/my-project/`).
3. Fill in the frontmatter. The schema lives in `src/content.config.ts`, and the build fails with a
   clear message if a field is missing.
4. Write the body using these `##` sections: Summary, Role & Context, Problem,
   Approach & Technical Decisions, Results, Media & Links.
5. `order` controls position on the homepage. `draft: true` hides it.

## Deploy

Static output, so any static host works. The recommended setup is GitHub Pages:

1. Create a repo named `luthfiarief-code.github.io` and push this project to `main`.
2. In the repo, go to Settings → Pages → Source and choose **GitHub Actions**.
3. `.github/workflows/deploy.yml` builds and publishes on every push.

If you later buy a custom domain, set `site` in `astro.config.mjs` to it and add the domain in
the Pages settings. If you deploy to Vercel or Netlify instead, import the repo, keep the default
Astro settings, and update `site`.
