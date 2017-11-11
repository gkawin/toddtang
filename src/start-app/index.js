
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Provider } from 'react-redux'
//
// import configureStore from '../configureStore'

import HomePage from './HomePage.jsx'
import App from './App.jsx'

render((
  <Router>
    <Switch>
      <Route path='/' component={HomePage} />
      <Route path='/app' component={() => {
        return (<div>app</div>)
      }}
      />
      <Route component={() => <div>404</div>} />
    </Switch>
  </Router>
), document.querySelector('#app'))
