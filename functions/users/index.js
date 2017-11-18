const fbConnection = require('../helpers/firebaseConnection')

const db = fbConnection.database().ref('/users')
const auth = fbConnection.auth()

module.exports.getAllUsers = (req, res) => {
  db.once('value').then(rs => res.send(rs.val()))
}

module.exports.createUserWithEmailAndPassword = (req, res) => {
  // const email = req.body.email
  // const password = req.body.password
  auth.createUserWithEmailAndPassword('tttt@tttt.com', 'dadadadad')
  .then(response => {
    res.send(response)
  })
  .catch(e => {
    res.send(e.message)
  })
}
