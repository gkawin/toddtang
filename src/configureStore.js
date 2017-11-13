import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import nextReducers from './reducers'

const enhance = compose(
  applyMiddleware(...[thunk, logger]),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default function configureStore (initialState) {
  const store = createStore(nextReducers, initialState, enhance)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(nextReducers)
    })
  }
  return store
}
