
export default (state, action) => {
  switch (action.type) {
    case 'SubmitRegisterForm':
      return 'SubmitRegisterForm' // inject into store
    default:
      return 'Register form'
  }
}
