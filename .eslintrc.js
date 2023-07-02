module.exports = {
	extends: [
		"next/core-web-vitals",
		"next",
		"eslint:recommended",
		"prettier",
		"plugin:cypress/recommended",
		"plugin:storybook/recommended",
	],
	plugins: ["cypress"],
	rules: {
		"no-console": "warn",
		"no-unused-vars": "warn",
	},
	env: {
		jest: true,
		"cypress/globals": true,
	},
};
