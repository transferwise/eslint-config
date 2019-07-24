const prettierConfig = require('./.prettierrc');

module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'react/destructuring-assignment': [2, 'always', { ignoreClassFields: true }],
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either',
      },
    ],
    'import/prefer-default-export': 0,
    'prefer-promise-reject-errors': 0,
    curly: [1, 'all'],
  },
};
