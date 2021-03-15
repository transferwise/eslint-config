const prettierConfig = require('./.prettierrc');

module.exports = {
  extends: [
    'eslint:recommended',
    // TODO: Consider more rules from https://eslint.org/docs/rules/
    'react-app',
    'plugin:jsx-a11y/strict',
    'plugin:jest/all',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    // recommended exclusions, explained in https://github.com/prettier/eslint-config-prettier/blob/master/README.md#installation
    'prettier/react',
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
      // Not added in this version to reduce major changes and to look into it further
      // {
      //   name: 'react',
      //   importNames: ['FC', 'FunctionComponent'],
      //   message:
      //     'Type props and return ReactNode instead: https://github.com/facebook/create-react-app/pull/8177',
      // },
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
    'no-console': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/#list-of-supported-rules
    'react/button-has-type': 'error',
    'react/destructuring-assignment': 'error',
    'react/forbid-dom-props': [
      'error',
      {
        forbid: [
          { propName: 'style', message: 'Use classes and stylesheets instead of inline styles' },
        ],
      },
    ],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-stateless-function': 'error',
    'react/self-closing-comp': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    // Not added in this version to reduce major changes, consider adding to own config
    // 'react/jsx-sort-props': [
    //   'error',
    //   {
    //     callbacksLast: true,
    //     shorthandFirst: false,
    //     shorthandLast: false,
    //     ignoreCase: false,
    //     noSortAlphabetically: true,
    //     reservedFirst: true,
    //   },
    // ],
    'react/jsx-boolean-value': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-fragments': 'error',
    // 'react/jsx-handler-names': ['error', { checkLocalVariables: true }], // does not seem to work correctly with destructuring
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-max-depth': ['error', { max: 5 }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    // 'react/jsx-no-useless-fragment': 'error', // Not added, as the commonly used FC requires a wrapper (when returning a string, for example)
    'react/jsx-pascal-case': 'error',
    'react/jsx-uses-react': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {}, // for ESLint to know about tsconfig.json baseUrl and distinguish external and internal imports in import/order
    },
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '*.test.js', '*.test.jsx'],
      rules: {
        'sonarjs/no-duplicate-string': 'off', // tests are better when explicit
        'unicorn/consistent-function-scoping': 'off', // to allow helper functions at the bottom
      },
    },
    {
      files: ['**/*.tsx', '**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
      ],
      rules: {
        '@typescript-eslint/unbound-method': 'off', // false positive with useIntl functions: https://github.com/typescript-eslint/typescript-eslint/issues/2245#issuecomment-648712540
      },
    },
  ],
};
