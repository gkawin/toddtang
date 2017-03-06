
const createWebpackConfig = require('nwb/lib/createWebpackConfig')
const userConfig = require('nwb/lib/getUserConfig').default()
const topLevelStylus = require('nwb-stylus')

function getWebpackConfig () {
  return createWebpackConfig.default({}, topLevelStylus, userConfig)
}

const config = {
  output: {},
  module: {
    loaders: [
      ...getWebpackConfig().module.loaders
    ]
  },
  externals: getWebpackConfig().externals,
  node: {
    fs: 'empty'
  },
}

module.exports = config
