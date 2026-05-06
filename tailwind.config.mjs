/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				mono: ['Fira Code', 'Inconsolata', 'ui-monospace', 'SFMono-Regular'],
			},
			colors: {
				'neon-green': '#39FF14',
				'neon-blue': '#00F3FF',
				'neon-red': '#FF3131',
				'neon-yellow': '#FFE135',
				'dark-bg': '#0a0a0a',
			},
		},
	},
	plugins: [],
}
