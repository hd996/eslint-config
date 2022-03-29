module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  ignorePatterns: [
    '*.min.*',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    '*.json',
    '*.md',
    '*.yaml',
    '*.yml',
    '*.lock',
    '__snapshots__',
    '!.*lintrc.js'
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'comma-dangle': 'off',
    'no-use-before-define': 'off',
    'space-before-function-paren': ['error', 'never']
  }
}
