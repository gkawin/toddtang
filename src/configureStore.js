/* eslint import/named: off */
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default function configureStore (initialState) {
  const enhance = compose(
    applyMiddleware(...[thunk, logger]),
    window.devToolsExtension || window.devToolsExtension(),
  )

  const nextReducers = require('./reducers')
  const store = createStore(nextReducers, initialState, enhance)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(nextReducers)
    })
  }
  return store
}
