const path = require('path');
const webpack = require('webpack');
const debug = process.env.NODE_ENV !== "production";


module.exports = {
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
            //plugins: ['react-html-attrs','transform-decorators-legacy','transform-class-properties']
            plugins: ['react-html-attrs','transform-class-properties']
          }
        },
      }
    ]
  }
};
