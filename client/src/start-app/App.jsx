import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import appRoutes from './appRoutes'

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
          {appRoutes.map(this.renderRoute)}
          <Route component={() => <div>404</div>} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
