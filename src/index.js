import './index.css'

import React from 'react'
import {render} from 'react-dom'
import * as firebase from 'firebase'

import App from './App.jsx'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_HOST,
  storageBucket: process.env.STORAGE_HOST,
  messagingSenderId: process.env.SENDER_ID
}
firebase.initializeApp(config)
const appStorage = firebase.storage()
const appDatabase = firebase.database()
const appAuth = firebase.auth()

render(<App/>, document.querySelector('#app'))
