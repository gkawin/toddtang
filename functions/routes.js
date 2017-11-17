// This file holding those root routes of application.
const express = require('express')
const route = express.Router()

const UsersRoute = require('./services/users/route')

module.exports = [
  route.use('/users', UsersRoute),
]
