
export const initalState = { status: 'editing', error: null }

export default (state = initalState, action) => {
  switch (action.type) {
    case 'RegisterRequested':
      return { status: 'applying', error: null }
    default:
      return state
  }
}
