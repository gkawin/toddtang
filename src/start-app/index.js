
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Provider } from 'react-redux'
//
// import configureStore from '../configureStore'

import RegisterFormContainer from '../containers/register/RegisterFormContainer.jsx'

import App from './App.jsx'

render((
  <Router>
    <Switch>
      {/* <Route path='/' component={HomePage} /> */}
      <Route path='/register' component={RegisterFormContainer} />
      <Route path='/app' render={(props) => <App {...props} />} />
      <Route component={() => <div>404</div>} />
    </Switch>
  </Router>
), document.querySelector('#app'))
