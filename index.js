module.exports = {
    "parser": "@typescript-eslint/parser",
	"parserOptions": {
		"jsx": true,
		"useJSXTextNode": true,
		"ecmaVersion": 2018,
		"sourceType": "module",
		"project": "./tsconfig.json"
	},
	"ignorePatterns": [
		"/out"
	],
    "plugins": [
		"@typescript-eslint",
		"roblox-ts",
		"@stylistic/js"
    ],
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:roblox-ts/recommended"
	],
    "env": {
        "node": true
    },
    "overrides": [
        {
        "files": ["tests/**/*.js"],
        "env": { "mocha": true }
        }
    ],
    "rules": {
		"@stylistic/js/array-bracket-spacing": [
			"error",
			"always"
		],
		"@stylistic/js/object-curly-spacing": [
			"error",
			"always"
		],
		"@stylistic/js/brace-style": [
			"error",
			"1tbs"
		],
		"@stylistic/js/space-before-blocks": [
			"error",
			"always"
		],
		"@stylistic/js/semi-spacing": [
			"error",
			{
				"before": false,
				"after": true
			}
		],
		"@stylistic/js/no-trailing-spaces": "error",
		"@stylistic/js/key-spacing": "error",
		"@stylistic/js/keyword-spacing": "error",
		"@stylistic/js/semi": "error",
		"@stylistic/js/no-multi-spaces": "error",
		"@stylistic/js/no-multiple-empty-lines": [
			"error",
			{
				"max": 1,
				"maxEOF": 0,
				"maxBOF": 0
			}
		],
		"@stylistic/js/eol-last": "error",
		"@stylistic/js/space-in-parens": "error",
		"@stylistic/js/padded-blocks": [
			"error",
			"never"
		],
		"@stylistic/js/padding-line-between-statements": [
			"error",
			{
				"blankLine": "always",
				"prev": [
					"const",
					"let",
					"var"
				],
				"next": "*"
			},
			{
				"blankLine": "always",
				"prev": "*",
				"next": [
					"const",
					"let",
					"var"
				]
			},
			{
				"blankLine": "any",
				"prev": [
					"const",
					"let",
					"var"
				],
				"next": [
					"const",
					"let",
					"var"
				]
			},
			{
				"blankLine": "always",
				"prev": "*",
				"next": "return"
			}
		],
		"@stylistic/js/indent": "error",
		"@stylistic/js/space-infix-ops": "error",
		"@stylistic/js/max-statements-per-line": [
			"error",
			{
				"max": 1
			}
		],
		"@stylistic/js/array-bracket-newline": [
			"error",
			"consistent"
		],
		"@stylistic/js/arrow-parens": "error",
		"@stylistic/js/arrow-spacing": "error",
		"@stylistic/js/block-spacing": "error",
		"@stylistic/js/comma-dangle": [
			"error",
			"always-multiline"
		],
		"@stylistic/js/comma-spacing": "error",
		"@stylistic/js/comma-style": "error",
		"@stylistic/js/computed-property-spacing": "error",
		"@stylistic/js/dot-location": [
			"error",
			"property"
		]
    }
}