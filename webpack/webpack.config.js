const Path = require('path')

const base = Path.resolve(__dirname, '..')
const production = process.env.NODE_ENV === 'production'
const publicPath = '/assets/'

module.exports = {
  devtool: 'eval',
  context: base,
  entry: {
    app: Path.join(base, 'src', 'App.js')
  },
  output: {
    path: Path.join(base, ''),
    filename: `[name].js`,
    publicPath: publicPath,
    pathinfo: !production
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [ /node_modules/ ],
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: process.env.BABEL_CACHE_DIR || true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true
  }
}
