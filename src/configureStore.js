import { createStore, compose } from 'redux'
import { reduxFirebase } from 'react-redux-firebase'
import * as Config from './config'

export default function configureStore () {
  const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f
  const firebase = reduxFirebase(Config.firebase, { userProfile: 'users' })
  const enhance = compose(
    devTools,
    firebase
  )
  const store = createStore(require('./reducers'), undefined, enhance)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'))
    })
  }
  return store
}
