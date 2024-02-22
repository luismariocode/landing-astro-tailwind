/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'black': {
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#888888',
					'500': '#6d6d6d',
					'600': '#5d5d5d',
					'700': '#4f4f4f',
					'800': '#454545',
					'900': '#3d3d3d',
					'950': '#000000',
				},
				'governor-bay': {
					'50': '#eef1ff',
					'100': '#e1e6fe',
					'200': '#c8d1fd',
					'300': '#a7b1fa',
					'400': '#8389f6',
					'500': '#6966ee',
					'600': '#5949e2',
					'700': '#4c3bc7',
					'800': '#3e32a1',
					'900': '#37307f',
					'950': '#211c4a',
				},

				
			}
		},
	},
	plugins: [],
}
