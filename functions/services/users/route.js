const express = require('express')
const route = express.Router()

module.exports = [
  route.post('/', (req, res) => {
    res.send({ 'succeed': true })
  }),
  route.get('/', (req, res) => {
    res.send({ 'succeed': true, users: [{}] })
  })
]
