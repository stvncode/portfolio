module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      typescript: {
        // use an array
        project: ['apps/*/tsconfig.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    amd: true,
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'unused-imports'],
  extends: [
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        //TODO: align apps and packages to remove overrides below
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-namespace': 'warn',
      },
    },
  ],
  rules: {
    eqeqeq: 'warn',
    'no-console': 'warn',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'testing-library/no-wait-for-multiple-assertions': 'warn',
    'testing-library/no-render-in-setup': 'warn',
    'testing-library/prefer-screen-queries': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'turbo/no-undeclared-env-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    'import/no-unresolved': [2, { caseSensitive: false }],
  },
}
