// svelte.config.js
import preprocess from 'svelte-preprocess';

/** 
 * This will add autocompletion if you're working with SvelteKit
 * 
 * @type {import('@sveltejs/kit').Config} 
 */
const config = {
  preprocess: preprocess({
    typescript: true,
  }),
  // ...other svelte options
};

export default config;