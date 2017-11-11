import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import RegisterFormContainer from '../containers/register/RegisterFormContainer.jsx'

class HomePage extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/register' component={RegisterFormContainer} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default HomePage
