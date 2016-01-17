Minimalistic angular 2 + typescript + webpack starter project.

## Usage
1. Install dependencies by `npm i`.
2. Start webpack development server by `npm start`.
3. Browse to `http://localhost:8080/webpack-dev-server/` (note the end '/').

## Key Features
- Source map
  - add `"sourceMap": true` option to `compilerOptions` section of `tsconfig.json`.
  - add `devtool: 'source-map'` option to webpack.config.js
  - start webpack development server with `-d` option.
- Typescript support
  - Using `ts-loader`

## Steps to reproduce

1. Start a `package.json` file and copy-and-paste `dependecies` section from the [Angular 2 Quick Start](https://angular.io/docs/ts/latest/quickstart.html#!#add-the-libraries-we-need).
2. run `npm i` to install all dependencies.
3. Install development dependencies by `npm i webpack webpack-dev-server tsd typescript ts-loader --save-dev`
4. Copy and paste following lines to a new `tsconfig.json` file
```
{
    "buildOnSave": false,
    "compileOnSave": false,
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "sourceMap": true,
        "experimentalDecorators": true
    },
    "exclude": [
        "node_modules"
    ]
}```
6. Add `index.html`, `app/app.component.ts` and `app/boot.ts` from this project. They are based on the [Angular 2 Quick Start](https://angular.io/docs/ts/latest/quickstart.html#!#final-structure) with few changes (see comments in files).
5. Add `depend.ts` and import it from `app/boot.ts` to import angular 2 dependencies.
