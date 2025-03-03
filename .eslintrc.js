module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    'prettier/prettier': 'error',
    'linebreak-style': [0, 'unix'],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.js'] }],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
      },
    ],
    'react/sort-comp': [
      2,
      {
        order: ['type-annotations', 'everything-else', 'render'],
      },
    ],
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'default-param-last': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'react/function-component-definition': 'off',
    'no-undef': 'off',
    'prefer-template': 'off',
  },
  ignorePatterns: ['node_modules', 'build'],
};
