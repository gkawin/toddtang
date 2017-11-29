import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { useStrict } from 'mobx'

import appRoutes from './appRoutes'
import stores from '../stores'

import AppLayout from './AppLayout.jsx'

useStrict(true)

class App extends React.PureComponent {
  renderRoute = (route, i) => {
    return (<Route key={i} path={route.path} render={props => (
      <AppLayout>
        <route.component {...props} routes={route.routes} />
      </AppLayout>
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
