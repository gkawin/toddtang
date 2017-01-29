
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import AppLayout from './AppLayout.jsx'
import RegisterFormContainer from './containers/register-form/RegisterFormContainer.jsx'
import NotFound from './not-found/NotFound.jsx'
import configureStore from './configureStore'

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
