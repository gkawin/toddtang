const functions = require('firebase-functions')

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!')
})

exports.echoMessages = functions.https.onRequest((request, response) => {
  const context = request.params.text
  response.send(context)
})
