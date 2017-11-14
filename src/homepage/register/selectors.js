import { createSelector } from 'reselect'
import _ from 'lodash'

export const registerFormSelector = (state) => state.registerForm

export const getFormStatus = createSelector(
  registerFormSelector,
  (registerForm) => _.get(registerForm, 'status', { })
)
