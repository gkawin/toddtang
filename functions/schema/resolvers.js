const fbConnection = require('../helpers/firebaseConnection')

const once = (path) => fbConnection.database().ref(path).once('value')

module.exports = {
  Query: {
    getBanks: () => {
      return [{
        abbr: 'foo',
        code: 'da',
        offical_name: 'hahahahahah',
        nice_name: 'kakakak'
      }]
    }
  }
}
