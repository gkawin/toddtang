const nib = require('nib')
const DotEnv = require('dotenv-webpack')
module.exports = {
  type: 'react-app',
  webpack: {
    loaders: {
      stylus: { config: { use: [ nib() ] } },
      babel: { test: /\.jsx?/ }
    },
    extra: {
      resolve: { extensions: ['', '.js', '.jsx', '.json'] },
      plugins: [
        new DotEnv({ path: '.env' })
      ]
    },
    define: {
      __VERSION__: JSON.stringify(require('./package.json').version)
    }
  }
}
