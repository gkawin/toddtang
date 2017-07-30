
export default (state = {}, action) => {
  switch (action.type) {
    case 'RegisterRequested':
      return { status: 'applying', error: null }
    default:
      return state
  }
}
