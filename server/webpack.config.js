const path = require('path')

const BASE = path.resolve(__dirname)

module.exports = {
  entry: path.join(BASE, 'src', 'index.js'),
  output: {
    path: path.resolve(BASE, 'lib'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
