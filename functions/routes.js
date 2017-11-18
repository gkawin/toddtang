// This file holding those root routes of application.
const express = require('express')
const route = express.Router()

const Users = require('./users')

module.exports = (app) => (req, res, next) => {
  app.route('/users')
  .get(Users.getAllUsers)
  .post(Users.createUser)
  next()
}
