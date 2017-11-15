import firebase from 'firebase'
import func from 'firebase-functions'

const config = func.config().firebase

let appConnection
function makeConnection (config) {
  if (!appConnection) {
    appConnection = firebase.initializeApp(config)
  }
}

makeConnection(config)

export const db = appConnection.database()
export const auth = appConnection.auth()
