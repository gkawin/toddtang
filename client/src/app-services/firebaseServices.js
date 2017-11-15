import firebase from 'firebase'

let appConnection
function makeConnection (config) {
  if (!appConnection) {
    appConnection = firebase.initializeApp(config)
  }
}

makeConnection()

export const db = appConnection.database()
export const auth = appConnection.auth()
