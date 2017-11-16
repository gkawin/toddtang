const functions = require('firebase-functions')
const firebase = require('firebase')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')

const config = functions.config().firebase
const app = express()
firebase.initializeApp(config)

app.use(cors())
app.use(bodyParser.json())
app.use(compression())

app.get('/signup', (req, res) => {
  firebase.database().ref('/banks').once('value')
    .then(resultSet => {
      res.send(resultSet.val())
    })
    .catch(e => {
      res.send(e.message)
    })
})

exports.apiV1 = functions.https.onRequest(app)
