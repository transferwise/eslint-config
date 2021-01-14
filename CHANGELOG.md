# v6.1.1
## Add version range for eslint-plugin-react-hooks peer dependency

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
