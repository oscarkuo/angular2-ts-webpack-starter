Minimalistic angular 2 + typescript + webpack starter project.

Example code based on [Angular 2 Quick Start](https://angular.io/docs/ts/latest/quickstart.html).

## Usage
1. Install dependencies by `npm i`.
2. Start webpack development server by `npm start`.
3. Browse to `http://localhost:8080/webpack-dev-server/` (note the end '/').

## Notes
- Source map
  - add `"sourceMap": true` option to `compilerOptions` section of `tsconfig.json`.
  - add `devtool: 'source-map'` option to webpack.config.js
  - start webpack development server with `-d` option.
- Typescript support
  - Using `ts-loader`
- Import pre-built Angular 2 bundles
  - Use webpack `noParse` option to avoid warning.
