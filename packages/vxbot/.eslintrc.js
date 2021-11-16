module.exports = {
    "env": {
      "browser": true,
      "es2020": true,
      "node": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": [
      "@typescript-eslint"
    ],
    "rules": {
      'no-console': 'error',
      'no-plusplus': 'off',
      'linebreak-style': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      'indent': [2, 2, {
        'SwitchCase': 1
      }],
    }
  };
  