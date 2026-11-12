// @ts-check
import { defineConfig } from 'astro/config';

// `site` is used for canonical URLs and social meta tags.
// Change it once you know the final domain (see README → Deploy).
export default defineConfig({
  site: 'https://luthfiarief-code.github.io',
  output: 'static',
  trailingSlash: 'ignore',
  prefetch: true,
});
