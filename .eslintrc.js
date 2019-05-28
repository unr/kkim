module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		sourceType: 'module',
		parser: 'babel-eslint'
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/recommended',
		'plugin:prettier/recommended'
	],
	// required to lint *.vue files
	plugins: ['vue'],
	rules: {
		// disable prettier linting for now
		// this should be on, but requires us to format every file first....
		'prettier/prettier': 0,

		// our defaults
		'global-require': 0,
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'no-console': 'off',
		'func-names': ['error', 'always'],
		'import/no-unresolved': 0,
		'import/extensions': 0,
		'no-param-reassign': ['error', { props: false }],
		camelcase: 0, // we use this for api stuff

		// vue-lint settings
		'vue/html-quotes': [2, 'single'],
		'vue/no-v-html': 0, // we use this for translations
		'vue/html-indent': [
			// turning this silent, in order to shut up eslint / not change every file
			0,
			'tab',
			{
				attribute: 1,
				closeBracket: 0
			}
		],
		'vue/max-attributes-per-line': [
			2,
			{
				// allows 20-per-line, but max-line-length will handle it
				singleline: 20,
				multiline: {
					max: 1,
					allowFirstLine: false
				}
			}
		],
		// Prettier / prettyhtml will handle these for now
		// Should likely be linted, but conflicts with prettyhtml right now.
		'vue/html-closing-bracket-spacing': 0,
		'vue/html-closing-bracket-newline': 0,
		'vue/singleline-html-element-content-newline': 0,
		'vue/multiline-html-element-content-newline': 0
		// currently allows Pascal or kebab, should be Pascal only going forward.
		// 'vue/component-name-in-template-casing': [
		// 	'error',
		// 	'PascalCase' | 'kebab-case',
		// 	{
		// 		registeredComponentsOnly: true,
		// 		ignores: []
		// 	}
		// ]
	}
};
