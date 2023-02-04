module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    'multiline-ternary': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'internal',
          'type',
          'object'
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'src/components/**',
            group: 'internal'
          },
          {
            pattern: 'src/types.tsx',
            group: 'internal'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'type']
      }
    ],
    'react/no-unescaped-entities': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      alias: [['src/components', './src/components']]
    }
  }
}
