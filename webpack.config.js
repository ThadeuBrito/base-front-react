var path = require('path');

module.exports = {
  entry: path.resolve('src/js/main.jsx'),
  output: {
    path: path.resolve('dist/'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx', '.scss']
  }
};
