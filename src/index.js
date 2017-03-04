
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import AppLayout from './layout/AppLayout.jsx'
import MemberLayout from './layout/MemberLayout.jsx'
import RegisterFormContainer from './containers/register-form/RegisterFormContainer.jsx'
import LoginFormContainer from './containers/login-form/LoginFormContainer.jsx'
import MemberOverviewContainer from './containers/member-pages/MemberOverviewContainer.jsx'
import MemberTopNavContainer from './containers/member-pages/MemberTopNavContainer.jsx'

import NotFound from './not-found/NotFound.jsx'

import configureStore from './configureStore'

render((
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path='/' component={AppLayout} >
        <Route path='register' component={RegisterFormContainer} />
        <Route path='login' component={LoginFormContainer} />
      </Route>
      <Route path='/member/:username' component={MemberLayout}>
        <IndexRoute components={{
          top: MemberTopNavContainer,
          children: MemberOverviewContainer
        }} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>
), document.querySelector('#app'))
