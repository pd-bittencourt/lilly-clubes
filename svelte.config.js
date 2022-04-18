import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: '.svelte-kit/static/build',
      assets: '.svelte-kit/static/build',
      fallback: null
    }),
    prerender: { default: true }
  }
};

export default config;
