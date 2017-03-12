const path = require('path')

const BASE = path.resolve(__dirname)

module.exports = {
  devtool: 'source-map',
  entry: path.join(BASE, 'src', 'index.js'),
  output: {
    path: path.resolve(BASE),
    publicPath: path.resolve(BASE),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: [ /node_modules/ ],
        loader: 'babel-loader'
      }
    ]
  },
  node: { fs: 'empty' }
}
