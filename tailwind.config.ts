import type { Config } from 'tailwindcss';

import { fontFamily } from 'tailwindcss/defaultTheme';

import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{ts,svelte,js,html}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1.5rem'
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans]
			}
		}
	},
	plugins: [typography]
} satisfies Config;
