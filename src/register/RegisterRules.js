import EmailValidator from 'email-validator'
import * as RegisterErrorMessages from './RegisterErrorMessages'

export const required = (text: String) => text ? null : RegisterErrorMessages.isRequired

export const emailFormat = (email: String) => EmailValidator.validate(email) ? null : (
  RegisterErrorMessages.isEmailMalFormat
)

export const minLength = (length: Number) => (text: String) => {
  if (!text) return RegisterErrorMessages.minLength(length)
  return (text.length >= length) ? null : (
    RegisterErrorMessages.minLength(length)
  )
}
