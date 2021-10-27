module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'no-console': 'error',
    'vue/no-v-html': 'off',
    'comma-dangle': [2, 'never'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-plusplus': 'off',
    indent: [2, 2, {
      SwitchCase: 1
    }]
  }
};
