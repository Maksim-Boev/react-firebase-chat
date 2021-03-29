module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	extends: "airbnb-typescript-prettier",
	rules: {
		"import/prefer-default-export": "off",
		"react-hooks/exhaustive-deps": 0,
		"import/no-extraneous-dependencies": ["error", { devDependencies: true }],

	},
};
