import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: false
    }),
    // Use environment variable in builds, but empty string in dev
    paths: {
      base: process.env.BASE_PATH || ''
    }
  },
  preprocess: vitePreprocess()
};

export default config;