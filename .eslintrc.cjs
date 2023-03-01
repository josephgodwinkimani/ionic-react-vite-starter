module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"airbnb",
		"airbnb/hooks",
		"plugin:prettier/recommended",
	],
	overrides: [
		{
			files: ["*.js", "*.jsx"],
			extends: [
				"plugin:react/recommended",
				"plugin:react-hooks/recommended",
				"airbnb",
				"airbnb/hooks",
				"plugin:prettier/recommended",
			],
			rules: {
				"react/no-children-prop": "off",
				"react/react-in-jsx-scope": "off",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"react/no-children-prop": "off",
		"react/react-in-jsx-scope": "off",
	},
};
