// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfig = require('./.prettierrc');

module.exports = {
  extends: [
    'eslint:recommended',
    // TODO: Consider more rules from https://eslint.org/docs/rules/
    'react-app',
    'plugin:jsx-a11y/strict',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:jest/all',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    // recommended exclusions, explained in https://github.com/prettier/eslint-config-prettier/blob/master/README.md#installation
    'prettier/react',
    'prettier/@typescript-eslint',
    'prettier/unicorn',
  ],
  plugins: ['fp'],
  // for plugin:@typescript-eslint/recommended-requiring-type-checking, explained in https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    'jest/valid-title': ['error', { ignoreTypeOfDescribeName: true }], // to support using a function as a title, which prevents titles from getting out of date
    'jest/prefer-expect-assertions': 'off', // too verbose for every test
    'jest/no-hooks': 'off', // we're using them for setup, up for consideration
    'jest/lowercase-name': [
      'error',
      {
        ignore: ['describe', 'test'], // these are valid in sentence case
      },
    ],
    curly: 'error',
    'testing-library/no-manual-cleanup': 'error',
    'testing-library/no-render-in-setup': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/no-wait-for-snapshot': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/prefer-wait-for': 'error',
    'unicorn/no-null': 'off', // a bit too ambitious
    'unicorn/filename-case': 'off', // too many exceptions required, for [] in Next.js etc.
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          req: false,
          res: false,
          env: false,
          props: false,
          param: false,
          params: false,
          pkg: false,
          fn: false,
          i: false,
          args: false,
        },
      },
    ],
    'unicorn/no-fn-reference-in-iterator': 'off', // mitigated by TypeScript and reduces readability, up for consideration
    'unicorn/prefer-number-properties': 'off', // no IE support, up for consideration
    'unicorn/no-reduce': 'off', // using fp/no-mutation means there's sometimes no other way
    'unicorn/no-useless-undefined': 'off', // sometimes useful to be explicit
    'unicorn/better-regex': 'off', // sometimes too smart, resulting in expressions like "Ac{2}ount number"
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'error',
    'no-restricted-imports': [
      'error',
      {
        name: 'enzyme',
        message: 'Use @testing-library/react instead',
      },
      {
        name: 'retranslate',
        message: 'Use react-intl instead',
      },
    ],
    'prefer-object-spread': 'error',
    'fp/no-mutation': [
      'error',
      {
        commonjs: true,
        allowThis: true,
        exceptions: [{ property: 'getInitialProps' }, { object: 'window' }],
      },
    ],
    'no-alert': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {}, // for ESLint to know about tsconfig.json baseUrl and distinguish external and internal imports in import/order
    },
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        'sonarjs/no-duplicate-string': 'off', // tests are better when explicit
        'unicorn/consistent-function-scoping': 'off', // to allow helper functions at the bottom
      },
    },
  ],
};
