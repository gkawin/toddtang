
import React from 'react'
import { render } from 'react-dom'
import * as firebase from 'firebase'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import AppLayout from './AppLayout.jsx'
import RegisterFormContainer from './containers/register-form/RegisterFormContainer.jsx'
import NotFound from './not-found/NotFound.jsx'
import configureStore from './configureStore'

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
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path='/' component={AppLayout} >
        <Route path='register' component={RegisterFormContainer} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
), document.querySelector('#app'))
