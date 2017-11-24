
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import RegisterFormContainer from '../containers/homepage/RegisterFormContainer.jsx'
import HomePageContainer from '../containers/homepage/HomepageContainer.jsx'
import AppLoginContainer from '../containers/homepage/AppLoginContainer.jsx'

import App from './App.jsx'

render((
  <Router>
    <Switch>
      <Route path='/' exact component={HomePageContainer} />
      <Route path='/signup' component={RegisterFormContainer} />
      <Route path='/login' component={AppLoginContainer} />
      <Route path='/app/:username' component={App} />
      <Route component={() => <div>404</div>} />
    </Switch>
  </Router>
), document.querySelector('#app'))

if (module.hot) {
  module.hot.accept()
}
