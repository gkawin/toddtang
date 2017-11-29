import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'

import appRoutes from './appRoutes'
import stores from '../stores'

class App extends React.PureComponent {
  renderRoute = (route, i) => {
    return (<Route key={i} path={route.path} render={props => (
      <route.component {...props} routes={route.routes} />
    )}
    />)
  }

  render () {
    return (
      <Provider {...stores}>
        <HashRouter>
          <Switch>
            {appRoutes.map(this.renderRoute)}
            <Route component={() => <div>404</div>} />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default App
