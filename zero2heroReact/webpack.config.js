const path = require('path');
const webpack = require('webpack');
const debug = process.env.NODE_ENV !== "production";


module.exports = {
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src')
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
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
             loader: 'css-loader',
             options: {
               modules: true
             }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
    ]
  }
};
