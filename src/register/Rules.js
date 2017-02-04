import EmailValidator from 'email-validator'

export const ErrorMessages = {
  required: () => 'กรุณากรอกฟิลด์นี้',
  email: () => 'รูปแบบอีเมล์ของคุณไม่ถูกต้อง',
  minLength: (length) => `กรุณากรอกมากกว่า ${length} ตัวอักษร`
}

export const required = (text: String) => text ? null : ErrorMessages.required()

export const emailFormat = (email: String) => EmailValidator.validate(email) ? null : (
  ErrorMessages.email()
)

export const minLength = (text, minLength = 6) => {
  return ErrorMessages.minLength(minLength)
}
