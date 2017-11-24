const path = require('path')
const merge = require('webpack-merge')

const common = require('./webpack.common.js')

const BASE = path.resolve(__dirname)

module.exports = merge(common, {
  devtool: 'eval',
  output: {
    filename: `[name][hash].bundle.js`,
    path: path.join(BASE, 'asserts'),
    pathinfo: true,
    publicPath: '/'
  },
  devServer: {
    compress: true,
    historyApiFallback: true
  }
})
