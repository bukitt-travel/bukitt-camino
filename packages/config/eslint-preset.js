module.exports = {
	plugins: ["@typescript-eslint"],
	parser: "@typescript-eslint/parser",
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "next/core-web-vitals"],
	rules: {
		"@typescript-eslint/no-var-requires": 0,
	},
};
