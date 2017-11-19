const functions = require('firebase-functions')
const firebase = require('firebase')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')
const morgan = require('morgan')

const routes = require('./routes')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(compression())
app.use(routes(app))

exports.api = functions.https.onRequest(app)
