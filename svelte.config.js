import adapterStatic from '@sveltejs/adapter-static';
import adapterAuto from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

const config = {
  kit: {
    // Use adapter-auto in development; in production, use adapter-static with a fallback.
    adapter: dev
      ? adapterAuto()
      : adapterStatic({
          // Output folder for production
          pages: 'build',
          assets: 'build',
          // Use a fallback file so that dynamic routes load the SPA entrypoint.
          fallback: 'index.html',
          precompress: false,
          // Set strict to false to allow dynamic routes even if they are not fully prerenderable.
          strict: false
        }),
    // Enable prerendering of static routes.
    // This will attempt to prerender all pages that export `export const prerender = true`
    prerender: {
      entries: dev ? [] : ['*']
    },
    // If deploying under a subpath (e.g., GitHub Pages), uncomment and adjust the base:
    paths: {
      base: dev ? '' : '/sinspire_svelte_updated'
    }
  },
  preprocess: vitePreprocess()
};

export default config;