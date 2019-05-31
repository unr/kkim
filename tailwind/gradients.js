// Generate gradients for the app
// If we need new gradient styles, directions, we can add more types here.
// Potentially adding linear + radial versions, for example.

// need lodash cuz we're mapping an object
const map = require('lodash/map');

module.exports = function({ addUtilities, config, e }) {
	const gradients = config('gradients');
	const variants = config('variants.gradients');
	const utilities = map(gradients, ({ base, hover }, name) => ({
		// base version of a gradient
		[`.bg-gradient-${e(name)}`]: {
			backgroundImage: base
		},
		// the 'hover' version of this gradient, usually just a hue shift
		[`.bg-gradient-${e(name)}-hover`]: {
			backgroundImage: hover
		}
	}));
	addUtilities(utilities, variants);
};
