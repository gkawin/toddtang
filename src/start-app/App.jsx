import React from 'react'
import PropTypes from 'prop-types'
import { HashRouter, Route, Switch } from 'react-router-dom'
//
const routes = [
  {
    path: '/lotto',
    component: (props) => {
      console.log(props)
      return (<div>Lotto</div>)
    },
    routes: [
      { path: '/bet' }
    ]
  },
  {
    path: '/transaction',
    component: (props) => {
      console.log(props)
      return (<div>transaction</div>)
    },
    routes: [
      { path: '/deposit' },
      { path: '/withdraw' },
    ]
  },
  {
    path: '/profile',
  },
]

class App extends React.PureComponent {
  renderRoute = (route, i) => {
    return (<Route key={i} path={route.path} render={props => (
      <route.component {...props} routes={route.routes} />
    )}
    />)
  }

  render () {
    return (
      <HashRouter>
        <Switch>
          {routes.map(this.renderRoute)}
        </Switch>
      </HashRouter>
    )
  }
}

export default App
