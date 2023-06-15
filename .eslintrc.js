module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project:'./tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    "linebreak-style": 0,
   "react/react-in-jsx-scope": "off",
   "react/jsx-indent": "off",
   "react/jsx-tag-spacing":"off",
   "react/jsx-no-useless-fragment":"off",
   "import/order":"off",
   "object-curly-newline":"off",
   "eol-last":"off",
   "jsx-quotes":"off",
   "react/require-default-props":"off",
   "react/jsx-one-expression-per-line":"off",
   "jsx-a11y/control-has-associated-label":"off",
   "@typescript-eslint/no-explicit-any": "off",
   "@typescript-eslint/quotes":"off",
   "@typescript-eslint/no-unused-vars":"off",
   "@typescript-eslint/keyword-spacing": "off",
   "@typescript-eslint/object-curly-spacing": "off",
   "@typescript-eslint/comma-spacing": "off",
   "no-else-return":"off",
   "no-param-reassign":"off"
  },
};
