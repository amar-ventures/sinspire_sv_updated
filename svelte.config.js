import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Output the static files to the "docs" folder (GitHub Pages default)
      pages: 'docs',
      assets: 'docs',
      // Use a fallback page for non-prerendered routes (e.g. a 404 page)
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    // When deploying to GitHub Pages, ensure the base matches your repository name.
    paths: {
      base: '/sinspire_svelte_updated'   // replace 'your-repo-name' with your actual repository name
    },
    // Optionally, use trailingSlash if your host requires an index.html per route:
    // trailingSlash: 'always'
  },
  preprocess: vitePreprocess()
};

export default config;