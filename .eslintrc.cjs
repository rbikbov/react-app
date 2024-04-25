module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin-import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'react', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'error',
      {},
      {
        fileInfoOptions: {
          withNodeModules: true,
        },
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          { pattern: 'react', group: 'builtin' },
          { pattern: 'vite', group: 'builtin' },
          { pattern: '~shared/**', group: 'internal' },
          { pattern: '~entities/**', group: 'internal' },
          { pattern: '~features/**', group: 'internal' },
          { pattern: '~widgets/**', group: 'internal' },
          { pattern: '~pages/**', group: 'internal' },
          { pattern: '@/**', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: [
              '~shared/*/*/**',
              '~entities/*/**',
              '~features/*/**',
              '~widgets/*/**',
              '~pages/*/**',
              '~app/**',
            ],
            message:
              'Direct access to the internal parts of the module is prohibited',
          },
          {
            group: [
              '../**/5_shared',
              '../**/4_entities',
              '../**/3_features',
              '../**/2_widgets',
              '../**/1_pages',
              '../**/0_app',
            ],
            message: 'Prefer absolute imports instead of relatives',
          },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
