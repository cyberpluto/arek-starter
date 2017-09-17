module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	plugins: ['react'],
	rules: {
		indent: 0,
		semi: 0,
		quotes: 0,
	},
}
