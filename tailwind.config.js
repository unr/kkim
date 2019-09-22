/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const fontFamily = {
	body:
		'Open Sans, system-ui, BlinkMacSystemFont, -apple-system, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
	display:
		'Hind, system-ui, BlinkMacSystemFont, -apple-system, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
};

module.exports = {
	theme: {
		container: {
			center: true
			//   padding: '2rem',
		},
		fontFamily
	}
};
