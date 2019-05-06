# v0.4.0
## Add exception to disable the `destructuring-assignment` rule for class fields

# v0.3.0
## Add default `prettier` config

* consumers can now use the shared `prettier` config separately from ESLint as well
* run `eslint` on the config files themselves, to stay consistent with the rules and formatting

# v0.2.3
## Use `prettier/react` config to support `eslint-plugin-react`

* extending `prettier/react` overrides some rules to support `eslint-plugin-react`, used in `eslint-config-airbnb`

# v0.2.2
## Use plugin:prettier/recommended config to extend config and apply plugin

* extending plugin:prettier/recommended config extends the prettier config and applies the plugin in a single step

# v0.2.1
## Fix Contributing heading in readme to follow link

* the link and heading are both Contributing now

# v0.2.0
## Add `husky` and `lint-staged` to peer dependencies, update readme

* `husky` and `lint-staged` are added to `peerDependencies` for easier usage
* badges, easy installation with `install-peerdeps`, usage details, and contribution have been added to readme

# v0.1.0
## Initial release

Check the `index.js` under the tag to see the rules.