# v7.0.0
## Use TypeScript, add plugins and rules, update ESLint and other dependencies

v7 of this config relies on TypeScript, as it is recommended for new projects in Wise and easy to add to existing ones. Maintaining a non-TypeScript config in addition would come with maintenance cost. If you don't want to add TypeScript support to your project, feel free to keep using v6.

New plugins and rules are added based on ESLint config extensions in the company's GitHub organisation and industry recommendations for the technologies used in Wise. **The beta versions are intended to be strict, so consumers could start using them gradually and challenge the rules, which we'd reevaluate before releasing the stable v7.**

**Changes**

- `eslint` is updated to v7, other dependencies are updated accordingly
- `typescript` is used (parser, plugin, regular configuration, and advanced configuration running type checks)
- `eslint:recommended` is specified as a base
- `eslint-config-react-app` replaces `eslint-config-airbnb`, as Airbnb's was too opinionated, resulting in many overrides, and React app's is maintained better (has rules of hooks, etc.)
- `eslint-plugin-jsx-a11y` is added with strict configuration to enforce stronger accessibility rules
- `eslint-plugin-jest` is added to enforce best test practices
- `eslint-plugin-jest-dom` is added to improve DOM assertions
- `eslint-plugin-testing-library` is added to enforce best React Testing Library practices
- `eslint-plugin-unicorn` is added to enforce general best practices
- `eslint-plugin-sonarjs` is added to detect bug-prone code
- `@next/eslint-plugin-next` is added to introduce Next.js specific rules
- `import/order` rule is added to clean import order
- importing `enzyme` will error with a recommendation to use `@testing-library/react` (disable lines to allow gradual migration)
- importing `retranslate` will error with a recommendation to use `react-intl`
- various compatibility extensions are added for TypeScript and Prettier

Most of the existing rules, e.g. `prettier`'s and `fp/no-mutation`, are kept. The rules that are made redundant by TypeScript (prop types, spreads, etc.) are removed.

**Upgrading from v6 to v7**

The config comes with _many_ peer dependencies, as [plugins cannot be dependencies](https://github.com/eslint/eslint/issues/3458). Therefore, it's easiest to:
1. Remove all dependencies containing `eslint` or `prettier` from `package.json`.
2. `yarn install` or `npm install`.
3. `npx install-peerdeps --dev --yarn @transferwise/eslint-config@beta` or `npx install-peerdeps --dev @transferwise/eslint-config@beta`.

There will likely be issues when upgrading:

- if the configuration fails and the _Troubleshooting_ section does not help, open an issue or PR in this repository with details
- if there are too many errors to fix for a rule you agree with, feel free to turn it off in your ESLint config and migrate gradually
- if there are errors for a rule you do not agree with, open a PR in this repository against the `beta` branch to start a discussion around it

Also, take a look at your ESLint disables and try removing them — you might not need some of them, e.g. `react/jsx-props-no-spreading`.

**Troubleshooting**

**Problem:** `Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.`  
**Solution:** Add the file after `The file does not match your project config:` to your `tsconfig.json` `includes` array.


**Problem:** `@typescript-eslint/no-unused-vars` false positive  
**Solution:** Add this to `package.json`:
```json
  "resolutions": {
    "@typescript-eslint/parser": "^4.4.1"
  },
```


**Problem:** `Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: foo.ts.
The file must be included in at least one of the projects provided.`  
**Solution**: Make sure your `include` glob patterns in `tsconfig.json` are [properly formatted](https://www.typescriptlang.org/tsconfig/#include), e.g `src/**/*` instead of `src`

# v6.2.0
## Add @transferwise/eslint-plugin and ensure forms have a method attribute

# v6.1.0
## Customize react/jsx-props-no-spreading

Allow prop spreading for custom React component and explicit spreading.

# v6.0.1
## Use Yarn

Yarn is used as the package manager instead of npm now.

# v6.0.0
## Update dependencies

Breaking: `prettier` and `eslint-plugin-react-hooks` have had major version number bumps, so there is a good chance that linting and auto-fix behaviours will change due to new / updated rules. Read about changes in Prettier v2.0 on [their blog](https://prettier.io/blog/2020/03/21/2.0.0.html).

# v5.0.3
## Don't apply mutation rules for getInitialProps

# v5.0.2
## Don't apply mutation rules for window

# v5.0.1
## Don't apply mutation rules for propTypes and defaultProps

# v5.0.0
## Add rules to mitigate pitfalls of object mutation

# v4.0.1
## Improve readme with script and VS Code settings examples

# v4.0.0
## Update dependencies

Breaking: As `eslint-config-airbnb` and `eslint-config-prettier` were updated with a major change,
it means consumers of this package may also break due to rules changed/added.

# v3.0.2
## Move babel-eslint to dependencies from peerDependencies

# v3.0.1
## Remove husky and lint-staged from peerDependencies

The ESLint config does not really _depend_ on these tools required for linting on commit (which is optional),
therefore they're removed from `peerDependencies`.
README is updated to include the installation command for these.

# v3.0.0
## Move eslint-config-airbnb and eslint-config-prettier to dependencies from peerDependencies

Addressing https://github.com/transferwise/eslint-config/issues/3.
Breaking: consumers should remove these 2 direct dependencies from their `package.json`

# v2.1.0
## Ignore`jsx-a11y/label-has-for` since [AirBnb rules are still accounting for both and](https://github.com/airbnb/javascript/issues/1873). Also remove `prefer-promise-reject-errors` for tests.

# v2.0.0
## Use `jsx-a11y/label-has-associated-control` in favour of deprecated `jsx-a11y/label-has-for`

# v1.0.0
## Add `curly` rule for consistency

# v0.4.0
## Add exception to disable the `destructuring-assignment` rule for class fields

# v0.3.0
## Add default `prettier` config

- consumers can now use the shared `prettier` config separately from ESLint as well
- run `eslint` on the config files themselves, to stay consistent with the rules and formatting

# v0.2.3
## Use `prettier/react` config to support `eslint-plugin-react`

- extending `prettier/react` overrides some rules to support `eslint-plugin-react`, used in `eslint-config-airbnb`

# v0.2.2
## Use plugin:prettier/recommended config to extend config and apply plugin

- extending plugin:prettier/recommended config extends the prettier config and applies the plugin in a single step

# v0.2.1
## Fix Contributing heading in readme to follow link

- the link and heading are both Contributing now

# v0.2.0
## Add `husky` and `lint-staged` to peer dependencies, update readme

- `husky` and `lint-staged` are added to `peerDependencies` for easier usage
- badges, easy installation with `install-peerdeps`, usage details, and contribution have been added to readme

# v0.1.0
## Initial release

Check the `index.js` under the tag to see the rules.
