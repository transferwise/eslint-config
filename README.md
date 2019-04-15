# :shirt: TransferWise ESLint config

# Usage

## 1. Install peer dependencies

```bash
npm install --save-dev eslint eslint-plugin-prettier babel-eslint eslint-config-prettier eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import prettier
```

## 2. Install config

```bash
npm install --save-dev @transferwise/eslint-config
```

## 3. Use config

`.eslintrc`

```json
{
  "extends": "@transferwise"
}
```

## 4. Lint

Errors and warnings will be shown when running the `eslint` command. 
ESLint fixes and Prettier formatting will be done when running `eslint --fix`. 
When set up, editors and IDEs should pick up the messages and automatically format as well.