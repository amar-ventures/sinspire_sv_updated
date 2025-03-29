import adapter from '@sveltejs/adapter-static';
// Fix: Change import source
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false
    }),
    paths: {
      base: process.env.BASE_PATH || '',
    }
  },
  preprocess: vitePreprocess()
};

export default config;
