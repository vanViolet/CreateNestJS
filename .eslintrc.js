module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['prettier', '@typescript-eslint', '@typescript-eslint/eslint-plugin', 'unused-imports'],
  rules: {
    'object-shorthand': 1,
    'no-useless-rename': 1,
    'prefer-template': 1,
    'unused-imports/no-unused-imports': 1,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'prettier/prettier': [
      2,
      {
        bracketSpacing: true,
        printWidth: 140,
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto',
        semi: false,
      },
    ],
  },
}
