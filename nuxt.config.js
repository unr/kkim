const join = require('path').join;
const tailwindJS = join(__dirname, 'tailwind.js');

// Only purge the additional css in production, as this takes extra time.
let purgecssConfig = false;
if (process.env.NODE_ENV === 'production') {
	purgecssConfig = {
		// Specify the paths to all of the template files in your project
		content: [
			'./pages/**/*.vue',
			'./layouts/**/*.vue',
			'./components/**/*.vue'
		],
		// Include any special characters you're using in this regular expression
		defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
	};
}

export default {
	mode: 'universal',

	/*
	 ** Headers of the page
	 */
	head: {
		title: 'kkim',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'comin soon yall'
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },

	/*
	 ** Global CSS
	 */
	// css: ['~/assets/css/tailwind.css'],

	plugins: [],

	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/tailwindcss'
	],

	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	}
};
