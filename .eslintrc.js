const prettierConfig = require('./.prettierrc.json');

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'import/prefer-default-export': 0,
  },
};
