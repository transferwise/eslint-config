# :shirt: TransferWise ESLint config with Prettier

[![npm](https://img.shields.io/npm/v/@transferwise/eslint-config.svg)](https://www.npmjs.com/package/@transferwise/eslint-config)
[![GitHub release](https://img.shields.io/github/release/transferwise/eslint-config.svg)](https://github.com/transferwise/eslint-config/releases)
[![CircleCI](https://img.shields.io/circleci/project/github/transferwise/eslint-config/beta.svg)](https://circleci.com/gh/transferwise/eslint-config)
[![npm](https://img.shields.io/npm/l/@transferwise/eslint-config.svg)](https://github.com/transferwise/eslint-config/blob/beta/LICENSE)

This is an extensible ESLint config used at [TransferWise](https://transferwise.com) :money_with_wings:

It uses [Airbnb's](https://www.npmjs.com/package/eslint-config-airbnb) as a base, has [Prettier](https://www.npmjs.com/package/prettier) baked in, and overrides some rules we've seen ourselves having to change often :heart:

## Usage

### 1. Install with peer dependencies

```bash
npx install-peerdeps --dev @transferwise/eslint-config
```
(if it doesn't work, [update npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm))

### 2. Extend your config with `@transferwise`

`.eslintrc`
```json
{
  "extends": "@transferwise"
}
```
Your own config can extend and override it however you want. If you find yourself changing a certain rule often, consider [contributing](#contributing).

### 3. Lint and format

For the best developer experience, all of the following are recommended.

#### Linting and formatting in `package.json` scripts

Example:
```json
  "test": "npm run lint && ...other test commands...",
  "lint": "eslint '**/*.{js,jsx}'", // runs on all js and jsx files, add {ts,tsx} for TypeScript
  "format": "npm run lint -- --fix"
```

#### Auto-formatting in IDE

**VS Code**

1. Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
1. To prevent clashes, turn off the formatter and enable ESLint auto-fix on save:

`settings.json`
```json
  "javascript.format.enable": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    // "typescript",
    // "typescriptreact",
  ],
  "eslint.autoFixOnSave": true,
```

#### Auto-formatting on commit

1. Install required packages:  
`npm install --save-dev lint-staged husky`
1. Add the following config:
`package.json`
```json
  "lint-staged": {
    "*.{js,jsx}": [ // add {ts,tsx} for TypeScript
      "eslint --fix",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
```

### 4. (Optional) Set up Prettier separately to use our configuration

**The ESLint config already auto-formats JS files based on Prettier rules, so you only need this when your editor does not support ESLint auto-fixing or you want to use Prettier with file types other than JS.**

To use the configuration, add the following line to your `package.json`:

`package.json`
```json
  "prettier": "@transferwise/eslint-config/.prettierrc.js"
```

Read more about shared configs [here](https://prettier.io/blog/2019/04/12/1.17.0.html#config), especially if you need to extend/override the default configuration. 

## Contributing

If you think a rule should be added or changed, create a pull request.
The change will be discussed, and if people agree, it can be merged.
Every merge automatically releases to [GitHub](https://github.com/transferwise/eslint-config/releases) and [npm](https://www.npmjs.com/package/@transferwise/eslint-config).

Bear in mind that you'll need to bump the version in `package.json` (major for breaking rules, minor for additions, patch for bugfixes) and add a `CHANGELOG.md` entry.
