import { createSelector } from 'reselect'
import _ from 'lodash'

import * as RegisterForm from './RegisterForm'

export const registerFormSelector = (state) => state.registerForm

export const getFormStatus = createSelector(
  registerFormSelector,
  (registerForm) => _.get(registerForm, 'status', RegisterForm.initialState)
)
