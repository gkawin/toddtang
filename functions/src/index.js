import { https } from 'firebase-functions'
import * as Database from './database'

exports.hello = https.onRequest((req, res) => {
  res.status(404).send('wowookosdoksdoksodkaosc,aos,cao' + Database.echo())
})
