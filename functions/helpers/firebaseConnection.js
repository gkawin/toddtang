const firebase = require('firebase')
const functions = require('firebase-functions')

const config = functions.config().firebase

let connection
function createConnection () {
  if (!connection) {
    return firebase.initializeApp(config)
  } else {
    return connection
  }
}

connection = createConnection()

module.exports = connection
