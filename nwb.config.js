const nib = require('nib')
const DotEnv = require('dotenv-webpack')
const webpack = require('webpack')

const isTest = process.env.NODE_ENV === 'test'
const config = {
  type: 'react-app',
  webpack: {
    html: {
      template: './template/index.html',
      chuck: [ 'app' ]
    },
    loaders: {
      stylus: { config: { use: [ nib() ] } },
      babel: { test: /\.jsx?/ }
    },
    extractText: {
      allChunks: true
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
  config.webpack.compat = { sinon: true }
  config.karma = {
    testContext: './.test/test-entry.js',
    plugins: [
      require('karma-chai'),
      require('karma-spec-reporter'),
      require('karma-sinon')
    ],
    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['spec']
  }
}
module.exports = config
