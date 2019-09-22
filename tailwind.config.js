/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

let colors = {
	transparent: 'transparent',

	// Gray Scale
	black: '#111111',
	'grey-darkest': '#2a2f35',
	'grey-darker': '#4a4d53',
	'grey-dark': '#6d6d6d',
	grey: '#898989',
	'grey-light': '#bcbcbc',
	'grey-lighter': '#dedede',
	'grey-lightest': '#f2f2f2',
	white: '#ffffff',

	// Rivalry Core Brand
	'navy-light': '#15435b',
	navy: '#06283b',
	'navy-dark': '#0e142e',
	orange: '#fa8b11',
	bloodorange: '#ff5a00',
	yellow: '#f6be23',
	'teal-light': '#01c8d0',
	teal: '#008080',

	// Rivalry System / UI
	'red-light': '#ff4747',
	red: '#cb3333',
	'green-light': '#b6d857',
	green: '#8da23a',

	// Game Colors for UI
	csgo: '#8DA23A',
	'csgo-tint': '#A0B757',
	'csgo-shade': '#6C7C2D',
	'dota-2': '#CB3333',
	'dota-2-tint': '#E1575E',
	'dota-2-shade': '#A22020',
	'call-of-duty': '#008080',
	'call-of-duty-tint': '#1AA3A1',
	'call-of-duty-shade': '#006363',
	hearthstone: '#BC227C',
	'hearthstone-tint': '#DB55A5',
	'hearthstone-shade': '#91165E',
	'league-of-legends': '#01C8D0',
	'league-of-legends-tint': '#42E0E4',
	'league-of-legends-shade': '#009E9E',
	overwatch: '#FF5A00',
	'overwatch-tint': '#FF8C48',
	'overwatch-shade': '#D14900',
	starcraft: '#0579D0',
	'starcraft-tint': '#1E94DF',
	'starcraft-shade': '#005B9E',
	rivalry: '#ff5a00',
	'rivalry-tint': '#fa8b11',
	'rivalry-shade': '#f6be23'
};

// linearGradients
// name: [direction, start, end]
// prettier-ignore
const gradients = {
	// core gradients
	navy: {
		base: `linear-gradient(137deg, ${colors['navy-light']} 42%, ${colors['navy-dark']} 100%)`,
		hover: `linear-gradient(137deg, ${colors['navy-light']} 62%, ${colors['navy-dark']} 100%)`
	},
	orange: {
		base: `linear-gradient(180deg, ${colors['yellow']} 0%, ${colors['bloodorange']} 100%)`,
		hover: `linear-gradient(180deg, ${colors['yellow']} 30%, ${colors['bloodorange']} 100%)`
	},
	'orange-horizontal': {
		base: `linear-gradient(90deg, ${colors['yellow']} 0%, ${colors['bloodorange']} 100%)`,
		hover: `linear-gradient(90deg, ${colors['yellow']} 30%, ${colors['bloodorange']} 100%)`
	},
	grey: {
		base: `linear-gradient(180deg, ${colors['grey-light']} 0%, ${colors['grey-dark']} 100%)`,
		hover: `linear-gradient(180deg, ${colors['grey-light']} 30%, ${colors['grey-dark']} 100%)`
	},
	// game specific gradients
	'csgo': {
		base: `linear-gradient(180deg, ${colors['csgo']} 0%, ${colors['navy-light']} 100%)`,
		hover: `linear-gradient(180deg, ${colors['csgo']} 30%, ${colors['navy-light']} 100%)`
	},
	'dota-2': {
		base: `linear-gradient(180deg, ${colors['dota-2']} 0%, ${colors['navy-light']} 100%)`,
		hover: `linear-gradient(180deg, ${colors['dota-2']} 30%, ${colors['navy-light']} 100%)`
	},
	'call-of-duty': {
		base: `linear-gradient(180deg, ${colors['call-of-duty']} 0%, ${colors['navy-light']} 100%)`,
		hover: `linear-gradient(180deg, ${colors['call-of-duty']} 30%, ${colors['navy-light']} 100%)`
	},
	'hearthstone': {
		base: `linear-gradient(180deg, ${colors['hearthstone']} 0%, ${colors['navy-light']} 100%)`,
		hover: `linear-gradient(180deg, ${colors['hearthstone']} 30%, ${colors['navy-light']} 100%)`
	},
	'league-of-legends': {
		base: `linear-gradient(180deg, ${colors['league-of-legends']} 0%, ${colors['navy-light']} 100%)`,
		hover: `linear-gradient(180deg, ${colors['league-of-legends']} 30%, ${colors['navy-light']} 100%)`
	},
	'overwatch': {
		base: `linear-gradient(180deg, ${colors['overwatch']} 0%, ${colors['navy-light']} 100%)`,
		hover: `linear-gradient(180deg, ${colors['overwatch']} 30%, ${colors['navy-light']} 100%)`
	},
	'starcraft': {
		base: `linear-gradient(180deg, ${colors['starcraft']} 0%, ${colors['navy-light']} 100%)`,
		hover: `linear-gradient(180deg, ${colors['starcraft']} 30%, ${colors['navy-light']} 100%)`
	},
	'rivalry': {
		base: `linear-gradient(180deg, ${colors['rivalry']} 0%, ${colors['navy-light']} 100%)`,
		hover: `linear-gradient(180deg, ${colors['rivalry']} 30%, ${colors['navy-light']} 100%)`
	}
};

// border sizing on site
const borderRadius = {
	none: '0',
	sm: '3px',
	default: '6px',
	lg: '12px',
	full: '9999px'
};

const fonts = {
	body:
		'Roboto, system-ui, BlinkMacSystemFont, -apple-system, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
	display:
		'Chivo, system-ui, BlinkMacSystemFont, -apple-system, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
};

const boxShadow = {
	default: '0 2px 4px 0 rgba(0, 0, 0, 0.20)',
	md: '0 3px 7px 0 rgba(0, 0, 0, 0.15)',
	lg: '0 4px 11px 3px rgba(0,0,0,0.15)',
	xl: '0 10px 26px 3px rgba(0,0,0,0.15)',
	// for on top of dark bgs
	dark: '0 7px 9px 0 rgba(0,0,0,0.30)',
	// shadow specifically for FAB buttons
	fab: '0 8px 27px 0 rgba(0,0,0,0.50)',
	none: 'none'
};

// TODO
// add some variables here? I'm thinking for lighten/darken values
// then when creating gradients w/ hovers, or button hovers, we can use
// the Colors.js thing to do like Color(#fff).darken(lightenValue);

module.exports = {
	backgroundColors: colors,
	borderColors: global.Object.assign(colors, {
		default: colors['grey-light']
	}),
	borderRadius,
	boxShadow,
	colors,
	fonts,
	gradients,
	textColors: colors,

	// chips are mini buttons, with no hover states.
	chips: {
		fontFamily: fonts.body,
		defaultBackgroundColor: colors['grey-lighter'],
		defaultColor: colors['black'],
		colors: {
			teal: {
				background: colors['teal'],
				text: colors['white']
			},
			orange: {
				background: colors['orange'],
				text: colors['white']
			},
			red: {
				background: colors['red'],
				text: colors['white']
			},
			'red-light': {
				background: colors['red-light'],
				text: colors['white']
			},
			green: {
				background: colors['green'],
				text: colors['white']
			},
			'green-light': {
				background: colors['green-light'],
				text: colors['white']
			}
		}
	},

	// config our button styles
	// default settings found in tailwind/buttons.js
	buttons: {
		fontFamily: fonts.body,
		fontSize: '14px',
		fontWeight: '500',
		padding: '10px 20px',
		borderRadius: borderRadius.default,
		// alternative button sizes
		sizes: {
			// btn-sm (a small button)
			sm: {
				fontSize: '12px',
				padding: '7px 15px'
			},
			// btn-lg (not quite a fab)
			lg: {
				fontSize: '16px',
				padding: '12px 20px'
			},
			// btn-fab (floating action buttons)
			fab: {
				borderRadius: borderRadius.small,
				boxShadow: boxShadow.fab,
				fontFamily: fonts.display,
				fontSize: '20px',
				fontStyle: 'italic',
				fontWeight: '700',
				padding: '12px 20px'
			}
		},
		// each button has a background and text color
		colors: {
			white: {
				background: colors['white'],
				text: colors['black']
			},
			black: {
				background: colors['black'],
				text: colors['white']
			},
			// core brand buttons
			'navy-light': {
				background: colors['navy-light'],
				text: colors['white']
			},
			navy: {
				background: colors['navy'],
				text: colors['white']
			},
			'navy-dark': {
				background: colors['navy-dark'],
				text: colors['white']
			},
			orange: {
				background: colors['orange'],
				text: colors['white']
			},
			bloodorange: {
				background: colors['bloodorange'],
				text: colors['white']
			},
			yellow: {
				background: colors['yellow'],
				text: colors['white']
			},
			'teal-light': {
				background: colors['teal-light'],
				text: colors['white']
			},
			teal: {
				background: colors['teal'],
				text: colors['white']
			},
			// system ui color buttons
			red: {
				background: colors['red'],
				text: colors['white']
			},
			'red-light': {
				background: colors['red-light'],
				text: colors['white']
			},
			green: {
				background: colors['green'],
				text: colors['white']
			},
			'green-light': {
				background: colors['green-light'],
				text: colors['white']
			}
		},
		// gradient background buttons.
		gradients: {
			navy: {
				background: gradients.navy.base,
				hoverBackground: gradients.navy.hover,
				mainColor: colors['navy'],
				text: colors['white']
			},
			orange: {
				background: gradients.orange.base,
				hoverBackground: gradients.orange.hover,
				mainColor: colors['bloodorange'],
				text: colors['white']
			},
			'orange-horizontal': {
				background: gradients['orange-horizontal'].base,
				hoverBackground: gradients['orange-horizontal'].hover,
				mainColor: colors['bloodorange'],
				text: colors['white']
			},
			grey: {
				background: gradients.grey.base,
				hoverBackground: gradients.grey.hover,
				mainColor: colors['grey'],
				text: colors['white']
			},
			csgo: {
				background: gradients.csgo.base,
				hoverBackground: gradients.csgo.hover,
				mainColor: colors['csgo'],
				text: colors['white']
			},
			'dota-2': {
				background: gradients['dota-2'].base,
				hoverBackground: gradients['dota-2'].hover,
				mainColor: colors['dota-2'],
				text: colors['white']
			},
			'call-of-duty': {
				background: gradients['call-of-duty'].base,
				hoverBackground: gradients['call-of-duty'].hover,
				mainColor: colors['call-of-duty'],
				text: colors['white']
			},
			hearthstone: {
				background: gradients.hearthstone.base,
				hoverBackground: gradients.hearthstone.hover,
				mainColor: colors['hearthstone'],
				text: colors['white']
			},
			'league-of-legends': {
				background: gradients['league-of-legends'].base,
				hoverBackground: gradients['league-of-legends'].hover,
				mainColor: colors['league-of-legends'],
				text: colors['white']
			},
			overwatch: {
				background: gradients['overwatch'].base,
				hoverBackground: gradients['overwatch'].hover,
				mainColor: colors['overwatch'],
				text: colors['white']
			},
			starcraft: {
				background: gradients['starcraft'].base,
				hoverBackground: gradients['starcraft'].hover,
				mainColor: colors['starcraft'],
				text: colors['white']
			},
			rivalry: {
				background: gradients['rivalry'].base,
				hoverBackground: gradients['rivalry'].hover,
				mainColor: colors['rivalry'],
				text: colors['white']
			}
		}
	},

	variants: {
		gradients: ['hover'],
		boxShadow: ['hover', 'responsive', 'focus']
	},
	plugins: [
		require('tailwindcss/plugins/container')({
			center: true,
			padding: '1rem'
		}),
		// custom plugins just for us
		require('./tailwind/buttons'),
		require('./tailwind/boxShadow'),
		require('./tailwind/chips'),
		require('./tailwind/gradients')
	],
	corePlugins: {
		boxShadow: false
	}
};
