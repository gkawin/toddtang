import functions from 'firebase-functions'

exports.hello = functions.https.onRequest((req, res) => {
  res.status(404).send('wowookosdoksdoksodkaosc,aos,cao')
})
