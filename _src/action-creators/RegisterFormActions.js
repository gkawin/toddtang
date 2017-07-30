import Action from '../Action'
import uuid from 'uuid'

export const onSubmitForm = ({ dispatch, firebase }) => {
  return async (payload) => {
    const userId = uuid.v4()
    dispatch(Action.RegisterRequested({ status: 'applying', error: null }))
    await firebase.ref(`users/${userId}`).set({ ...payload })
  }
}
