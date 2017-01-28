import * as Action from '../action'

export const onSubmitForm = (payload) => {
  return Action.RegisterRequested({ status: 'applying', error: null })
}
