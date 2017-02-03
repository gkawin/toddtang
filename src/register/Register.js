import Validator from 'email-validator'

export const validateEmail = (email: String) => Validator.validate(email)

export const testDrop = (name) => !name
