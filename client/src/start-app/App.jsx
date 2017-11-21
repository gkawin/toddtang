import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import appRoutes from './appRoutes'

const store = configureStore()

class App extends React.PureComponent {
  renderRoute = (route, i) => {
    return (<Route key={i} path={`/:username${route.path}`} render={props => (
      <route.component {...props} routes={route.routes} />
    )}
    />)
  }

  render () {
    return (
      <Provider store={store}>
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
