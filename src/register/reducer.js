import { combineReducers } from 'redux'

export default combineReducers({
  registerState: (state) => (action) => state
})
