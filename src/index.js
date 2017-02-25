
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import AppLayout from './layout/AppLayout.jsx'
import UserLayout from './layout/UserLayout.jsx'
import RegisterFormContainer from './containers/register-form/RegisterFormContainer.jsx'
import LoginFormContainer from './containers/login-form/LoginFormContainer.jsx'
import MemberPageContainer from './containers/member-page/MemberPageContainer.jsx'

import NotFound from './not-found/NotFound.jsx'

import configureStore from './configureStore'

render((
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path='/' component={AppLayout} >
        <Route path='register' component={RegisterFormContainer} />
        <Route path='login' component={LoginFormContainer} />
      </Route>
      <Route path='/user/:username' component={UserLayout}>
        <IndexRoute component={MemberPageContainer} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>
), document.querySelector('#app'))
