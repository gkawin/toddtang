/* eslint import/named: off */
import { combineReducers } from 'redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'

import registerForm from './register/reducer'

const rootReducer = combineReducers({
  firebase,
  registerForm
})

export default rootReducer
