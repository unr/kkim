// Generate chips for the app
// a chip is a thin, extra wide, pill button without hover/active states.

// Color will be used to manipulate dark/lighten values.
// The defaults for them should be set in tailwind.config.js
const Color = require('color');

// used to fill in defaults we overwrite
const defaultConfig = require('tailwindcss/defaultConfig')();

// need lodash cuz we're js scrubs
const map = require('lodash/map');
const omit = require('lodash/omit');
const get = require('lodash/get');
const defaults = require('lodash/defaults');

const defaultOptions = {
	borderRadius: '9999px',
	fontWeight: '500',
	lineHeight: '1',
	fontSize: '11px',
	fontFamily: 'sans-serif',
	padding: '4px 12px',
	minWidth: '86px',
	textAlign: 'center',
	textTransform: 'uppercase',
	defaultBackgroundColor: 'gray',
	defaultColor: 'black',
	colors: {
		white: {
			background: defaultConfig.colors['white'],
			text: defaultConfig.colors['black']
		},
		black: {
			background: defaultConfig.colors['black'],
			text: defaultConfig.colors['white']
		},
		orange: {
			background: defaultConfig.colors['orange'],
			text: defaultConfig.colors['white']
		}
	}
};

module.exports = function({ addComponents, config, e }) {
	// takes tailwindconfig.chips and merges them with defaults
	const chipConfig = config('chips');
	const options = defaults(chipConfig, defaultOptions);
	addComponents([
		{
			'.chip': {
				display: 'inline-block',
				padding: options.padding,
				fontFamily: options.fontFamily,
				fontSize: options.fontSize,
				fontWeight: options.fontWeight,
				lineHeight: options.lineHeight,
				borderRadius: options.borderRadius,
				color: options.defaultColor,
				backgroundColor: options.defaultBackgroundColor,
				textAlign: options.textAlign,
				textDecoration: 'none',
				textTransform: options.textTransform,
				minWidth: options.minWidth
			}
		},
		...map(options.colors, (colorOptions, name) => {
			return {
				// Basic chip colors
				[`.chip-${e(name)}`]: {
					backgroundColor: colorOptions.background,
					color: colorOptions.text
				}
			};
		})
	]);
};
