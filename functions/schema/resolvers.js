const fbConnection = require('../helpers/firebaseConnection')

const once = (path) => fbConnection.database().ref(path).once('value')

module.exports = {
  Query: {
    getBanks: async () => {
      try {
        const resultSet = await once('/banks')
        return resultSet.val()
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
