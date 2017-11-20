const functions = require('firebase-functions')
const firebase = require('firebase')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')
const morgan = require('morgan')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { GraphQLSchema } = require('graphql')

const app = express()
const schema = require('./schema')

app.use(morgan('dev'))
app.use(cors())
app.use(compression())

app.use('/', bodyParser.json(), graphqlExpress({ schema }))

exports.api = functions.https.onRequest(app)
