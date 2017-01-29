import * as RegisterForm from './RegisterForm'

export default (state = RegisterForm.initialState, action) => {
  switch (action.type) {
    case 'RegisterRequested':
      return { status: 'applying', error: null }
    default:
      return state
  }
}
