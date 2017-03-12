import functions from 'firebase-functions'
import admin from 'firebase-admin'

admin.initializeApp(functions.config().firebase)

export const addMessage = functions.https.onRequest(async (req, res) => {
  const original = req.query.text
  const snapshot = await admin.database().ref('/messages').push({ original })
  res.redirect(303, snapshot.ref)
})
