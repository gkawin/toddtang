import { createStore } from 'redux'

export default function configureStore () {
  const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f
  const store = createStore(require('./reducers'), undefined, devTools)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'))
    })
  }
  return store
}
