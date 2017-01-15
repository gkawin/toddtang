const nib = require('nib')
const DotEnv = require('dotenv-webpack')

const isTest = process.NODE_ENV === 'test'
const config = {
  type: 'react-app',
  webpack: {
    loaders: {
      stylus: { config: { use: [ nib() ] } },
      babel: { test: /\.jsx?/ }
    },
    extra: {
      plugins: [
        new DotEnv({ path: '.env' })
      ]
    },
    define: {
      __VERSION__: JSON.stringify(require('./package.json').version)
    }
  }
}

if (isTest) {
  config.karma = {
    testContext: './test/index.js'
  }
}

module.exports = config
