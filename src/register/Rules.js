import EmailValidator from 'email-validator'
import invart from 'invariant'

export const ErrorMessages = {
  required: () => 'กรุณากรอกฟิลด์นี้',
  email: () => 'รูปแบบอีเมล์ของคุณไม่ถูกต้อง',
  minLength: (length) => `กรุณากรอกมากกว่า ${length} ตัวอักษร`
}

export const required = (text: String) => text ? null : ErrorMessages.required()

export const emailFormat = (email: String) => EmailValidator.validate(email) ? null : (
  ErrorMessages.email()
)

export const minLength = (length: Number) => (text: String) => {
  invart(length, 'Please define a length for compartion')
  return (text.length >= length) ? null : (
    ErrorMessages.minLength(minLength)
  )
}
