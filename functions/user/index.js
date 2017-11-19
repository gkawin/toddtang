const fbConnection = require('../helpers/firebaseConnection')

const db = fbConnection.database().ref('/users')
const auth = fbConnection.auth()

module.exports.signInWithEmailAndPassword = (req, res) => {

}
