# :shirt: TransferWise ESLint config with Prettier

[![npm](https://img.shields.io/npm/v/@transferwise/eslint-config.svg)](https://www.npmjs.com/package/@transferwise/eslint-config)
[![GitHub release](https://img.shields.io/github/release/transferwise/eslint-config.svg)](https://github.com/transferwise/eslint-config/releases)
[![CircleCI](https://img.shields.io/circleci/project/github/transferwise/eslint-config/master.svg)](https://circleci.com/gh/transferwise/eslint-config)
[![npm](https://img.shields.io/npm/l/@transferwise/eslint-config.svg)](https://github.com/transferwise/eslint-config/blob/master/LICENSE)

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

### 3. Set up Prettier to use our base configuration

As of version `1.17` Prettier supports shared config files. :tada:

To use the configuration provided by this package, add the following line to your `package.json`:

`package.json`
```json
{
  ...,
  "prettier": "@transferwise/eslint-config/.prettierrc.json"
}
```

Read more about [shared configs](https://prettier.io/blog/2019/04/12/1.17.0.html#config) especially, if you need to extend/override the default configuration. 

### 4. Lint and format

It's recommended to:
* lint as part of the `npm test` script (f.e. `eslint src/`)
* auto-format on save in your editor/IDE (nothing specific to this config, just install ESLint for your tool)
* add auto-formatting before committing:

`package.json`
```json
{
  ...,
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```
[`lint-staged`](https://www.npmjs.com/package/lint-staged) and [`husky`](https://www.npmjs.com/package/husky) are already installed for you as part of this package's peer dependencies :ok_hand:

## Contributing

If you think a rule should be added or changed, create a pull request.
The change will be discussed, and if people agree, it can be merged.
Every merge automatically releases to [GitHub](https://github.com/transferwise/eslint-config/releases) and [npm](https://www.npmjs.com/package/@transferwise/eslint-config).

Bear in mind that you'll need to bump the version in `package.json` (major for breaking rules, minor for additions, patch for bugfixes) and add a `CHANGELOG.md` entry.
