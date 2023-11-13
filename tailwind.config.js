/** @type {import('tailwindcss').Config & {daisyui: import('daisyui').Config}} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ['dracula']
	},
	theme: {
		extend: {}
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')]
};
