// Generate buttons for the app
// the goal here is to generate all the necessary types based off
// of configs in our tailwind.config file
// Stolen directly from https://github.com/tailwindcss/plugin-examples/blob/master/plugins/simple-buttons/index.js

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
	boxShadow: 'none',
	borderRadius: '.25rem',
	fontWeight: '600',
	lineHeight: '1',
	fontSize: '1rem',
	fontFamily: 'sans-serif',
	padding: '.5rem 1rem',
	textTransform: 'uppercase',
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
	},
	sizes: {
		sm: {
			fontSize: '.875rem',
			padding: '.5rem .75rem'
		},
		lg: {
			fontSize: '1.25rem',
			padding: '.75rem 1.5rem'
		}
	}
};

module.exports = function({ addComponents, config, e }) {
	// takes tailwindconfig.buttons and merges them with defaults
	const buttonConfig = config('buttons');
	// console.log(buttonConfig);
	const options = defaults(buttonConfig, defaultOptions);
	// console.log('v MERGED v');
	// console.log(options);
	addComponents([
		{
			// basic button template
			'.btn': {
				display: 'inline-block',
				padding: options.padding,
				fontFamily: options.fontFamily,
				fontSize: options.fontSize,
				fontWeight: options.fontWeight,
				lineHeight: options.lineHeight,
				borderRadius: options.borderRadius,
				textDecoration: 'none',
				textTransform: options.textTransform
			},
			// btn-border adds a light opacity stroke, used for homepage fab buttons mostly
			'.btn-border': {
				position: 'relative',
				'&::after': {
					content: '""',
					position: 'absolute',
					top: '0',
					right: '0',
					bottom: '0',
					left: '0',
					pointerEvents: 'none',
					zIndex: '1',
					borderRadius: options.borderRadius,
					border: 'solid 1px',
					borderColor: Color('#FFFFFF')
						.alpha(0.5)
						.rgb()
						.toString()
				}
			}
		},

		// Generate size utilities
		...map(omit(options.sizes, 'default'), (sizeOptions, name) => {
			return {
				[`.btn-${e(name)}`]: {
					padding: get(sizeOptions, 'padding', options.padding),
					fontFamily: get(
						sizeOptions,
						'fontFamily',
						options.fontFamily
					),
					fontSize: get(sizeOptions, 'fontSize', options.fontSize),
					fontWeight: get(
						sizeOptions,
						'fontWeight',
						options.fontWeight
					),
					fontStyle: get(sizeOptions, 'fontStyle', options.fontStyle),
					lineHeight: get(
						sizeOptions,
						'lineHeight',
						options.lineHeight
					),
					boxShadow: get(sizeOptions, 'boxShadow', options.boxShadow),
					borderRadius: get(
						sizeOptions,
						'borderRadius',
						options.borderRadius
					)
				}
			};
		}),

		...map(options.colors, (colorOptions, name) => {
			return {
				// Basic button colors
				[`.btn-${e(name)}`]: {
					backgroundColor: colorOptions.background,
					color: colorOptions.text,
					'&:focus': {
						outline: 0,
						boxShadow: `0 0 0 .2em ${Color(colorOptions.background)
							.alpha(0.5)
							.rgb()
							.toString()}`
					},
					'&:hover': {
						cursor: 'pointer',
						backgroundColor: get(
							colorOptions,
							'hoverBackground',
							Color(colorOptions.background)
								.darken(0.1)
								.hex()
								.toString()
						),
						color: get(colorOptions, 'hoverText', colorOptions.text)
					},
					'&:active': {
						backgroundColor: get(
							colorOptions,
							'activeBackground',
							Color(colorOptions.background)
								.darken(0.1)
								.hex()
								.toString()
						),
						color: get(
							colorOptions,
							'activeText',
							colorOptions.text
						)
					}
				},

				// Outlined button colors
				[`.btn-${e(name)}-outline`]: {
					backgroundColor: 'transparent',
					borderWidth: '1px',
					borderStyle: 'solid',
					borderColor: colorOptions.background,
					color: colorOptions.background,
					'&:focus': {
						outline: 0,
						boxShadow: `0 0 0 .2em ${Color(colorOptions.background)
							.alpha(0.5)
							.rgb()
							.toString()}`
					},
					'&:hover': {
						cursor: 'pointer',
						backgroundColor: get(
							colorOptions,
							'hoverBackground',
							Color(colorOptions.background)
								.alpha(0.1)
								.rgb()
								.toString()
						),
						borderColor: get(
							colorOptions,
							'hoverBackground',
							Color(colorOptions.background)
								.darken(0.1)
								.hex()
								.toString()
						),
						color: get(
							colorOptions,
							'hoverText',
							colorOptions.background
						)
					},
					'&:active': {
						backgroundColor: get(
							colorOptions,
							'hoverBackground',
							Color(colorOptions.background)
								.alpha(0.1)
								.rgb()
								.toString()
						),
						borderColor: get(
							colorOptions,
							'activeBackground',
							Color(colorOptions.background)
								.darken(0.1)
								.hex()
								.toString()
						),
						color: get(
							colorOptions,
							'activeText',
							colorOptions.background
						)
					}
				},

				// text-only button colors
				[`.btn-${e(name)}-text`]: {
					backgroundColor: 'transparent',
					borderWidth: '1px',
					borderStyle: 'solid',
					borderColor: 'transparent',
					color: colorOptions.background,
					'&:focus': {
						outline: 0,
						boxShadow: `0 0 0 .2em ${Color(colorOptions.background)
							.alpha(0.5)
							.rgb()
							.toString()}`
					},
					'&:hover': {
						cursor: 'pointer',
						backgroundColor: get(
							colorOptions,
							'hoverBackground',
							Color(colorOptions.background)
								.alpha(0.1)
								.rgb()
								.toString()
						),
						color: get(
							colorOptions,
							'hoverText',
							Color(colorOptions.background)
								.darken(0.1)
								.hex()
								.toString()
						)
					},
					'&:active': {
						backgroundColor: get(
							colorOptions,
							'hoverBackground',
							Color(colorOptions.background)
								.alpha(0.1)
								.rgb()
								.toString()
						),
						color: get(
							colorOptions,
							'hoverText',
							Color(colorOptions.background)
								.darken(0.1)
								.hex()
								.toString()
						)
					}
				}
			};
		}),

		...map(options.gradients, (gradientOptions, name) => {
			return {
				// Background gradient buttons
				[`.btn-${e(name)}-gradient`]: {
					backgroundImage: gradientOptions.background,
					color: gradientOptions.text,
					'&:focus': {
						outline: 0,
						boxShadow: `0 0 0 .2em ${Color(
							gradientOptions.mainColor
						)
							.alpha(0.5)
							.rgb()
							.toString()}`
					},
					'&:hover': {
						cursor: 'pointer',
						backgroundImage: get(
							gradientOptions,
							'hoverBackground',
							gradientOptions.background
						),
						color: get(
							gradientOptions,
							'hoverText',
							gradientOptions.text
						)
					}
				}
			};
		})
	]);
};
