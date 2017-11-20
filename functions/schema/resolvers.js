// const fbConnection = require('../helpers/firebaseConnection')

// const once = (path) => fbConnection.database().ref(path).once('value')

module.exports = {
  Query: {
    getUsers: () => [{
      id: 'foo_id',
      email: 'foo@bar.com'
    }]
  }
}
