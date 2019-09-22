// Generate shadows for the app
// For some reason, the corePlugin for boxShadow wasn't working
// Instead, we've recreated it. Based on:
// https://github.com/tailwindcss/tailwindcss/blob/master/src/plugins/boxShadow.js

// need lodash cuz we're mapping an object
const map = require('lodash/map');

module.exports = function({ addUtilities, config, e }) {
	const boxShadow = config('boxShadow');
	const utilities = map(boxShadow, (shadow, name) => {
		const utilityName =
			name === 'default' ? '.shadow' : `.shadow-${e(name)}`;
		return {
			[utilityName]: {
				boxShadow: shadow
			}
		};
	});
	addUtilities(utilities, config('variants.boxShadow'));
};
