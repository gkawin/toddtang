
import React from 'react'
import { render } from 'react-dom'
import * as firebase from 'firebase'
import { Router, Route, hashHistory } from 'react-router'

import AppLayout from './AppLayout.jsx'
import RegisterForm from './register-form/RegisterForm.jsx'
import NotFound from './not-found/NotFound.jsx'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_HOST,
  storageBucket: process.env.STORAGE_HOST,
  messagingSenderId: process.env.SENDER_ID
}
firebase.initializeApp(config)
// const appStorage = firebase.storage()
// const appDatabase = firebase.database()
// const appAuth = firebase.auth()

render((
  <Router history={hashHistory}>
    <Route path='/' component={AppLayout} >
      <Route path='register' component={RegisterForm} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.querySelector('#app'))
