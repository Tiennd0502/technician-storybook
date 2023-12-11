module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint", "react", 'react-refresh'],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
      	"allowConstantExport": true
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "semi": ["error"],
    "quotes": ["error", "single"],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-useless-escape": "off",
    "arrow-body-style": ["error", "as-needed"],
    "react/no-array-index-key": "error",
    "react/display-name": "error"
  }
}
