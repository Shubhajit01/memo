import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import fonts from 'unplugin-fonts/vite';
import icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		fonts({
			fontsource: {
				families: [
					{
						subset: 'latin',
						name: 'Inter Variable',
						variable: { wght: true }
					}
				]
			}
		}),
		icons({
			compiler: 'svelte',
			autoInstall: true
		})
	]
});
