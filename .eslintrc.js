const prettierConfig = require('./.prettierrc');

module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    jest: true,
  },
  plugins: ['fp'],
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
    'fp/no-mutation': [
      'error',
      {
        commonjs: true,
        allowThis: true,
        exceptions: [
          { property: 'propTypes' },
          { property: 'defaultProps' },
          { property: 'getInitialProps' },
          { object: 'window' },
        ],
      },
    ],
    'fp/no-mutating-assign': 'error',
    curly: [1, 'all'],
  },
};
