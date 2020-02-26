const path = require('path');
const npm_package = require('./package.json');

module.exports = {
  entry: {
      'index': './src/bin/server.ts'
  },
  target: 'node',
  node: {
    fs: "empty",
    net: 'empty'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [
        '.tsx',
        '.ts',
        '.js'
    ],
  },   
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: [
                    /test/,
                    /node_modules/
                ]
          }
      ]
  }
};
