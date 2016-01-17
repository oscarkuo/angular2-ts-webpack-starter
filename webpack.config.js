module.exports = {
  entry: './app/boot.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  resolveLoader: {
      modulesDirectories: [
          './node_modules'
      ]
  },

  devtool: 'source-map',

  module: {
    // to workaround webpack warning on importing pre-build js files
    // (See https://github.com/angular/angular/issues/5942), webpack
    // seems to apply the regex on OS native path so need to  include
    // both '/' and '\ in the expression
    noParse: [ /angular2[\/\\]bundles[\/\\].+/ ],

    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
