import js from "@eslint/js";
import ts from "typescript-eslint";
import vue from "eslint-plugin-vue";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import storybook from "eslint-plugin-storybook";

const rules = {
  indent: ["error", 2, { SwitchCase: 1 }],
  "linebreak-style": ["error", "unix"],
  quotes: ["error", "double"],
  semi: ["error", "always"],
  "eol-last": ["error", "never"],
  "no-multiple-empty-lines": [
    "error",
    {
      max: 2,
      maxEOF: 1,
    },
  ],
  "no-constructor-return": "error",
  "no-duplicate-imports": "error",
  "no-eval": "error",
  "no-tabs": "error",
  "no-trailing-spaces": "error",
  "no-shadow": "error",
  "object-curly-spacing": [
    "error",
    "always",
    {
      objectsInObjects: false,
      arraysInObjects: false,
    },
  ],
  "key-spacing": "error",
  "space-before-blocks": "error",
  "computed-property-spacing": ["error", "never"],
  "comma-spacing": [
    "error",
    {
      before: false,
      after: true,
    },
  ],
  "array-bracket-spacing": ["error", "never"],
  "comma-dangle": ["error", "always-multiline"],
  "comma-style": [
    "error",
    "last",
    {
      exceptions: {
        ImportDeclaration: false,
      },
    },
  ],
  "space-in-parens": ["error", "never"],
  "space-unary-ops": "error",
  "keyword-spacing": "error",
  "space-before-function-paren": ["error", "always"],
  "arrow-spacing": "error",
  "space-infix-ops": [
    "error",
    {
      int32Hint: false,
    },
  ],
  "brace-style": ["error", "1tbs"],
  "rest-spread-spacing": ["error", "never"],
  "no-multi-spaces": "error",
  "no-useless-rename": "error",
  "prefer-const": "error",
  "no-use-before-define": "error",
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
    },
  ],
};

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs["flat/recommended"],
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        parser: tsParser,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules,
    files: ["**/*/*.{ts,js,vue,tsx}", "*.{ts,js,vue,tsx}"],
    ignores: ["**/node_modules/**/*", "**/dist/**/*"],
  },
  ...storybook.configs["flat/recommended"],
];