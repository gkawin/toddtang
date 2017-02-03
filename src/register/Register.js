import Validator from 'email-validator'

export const validateEmail = (email: String) => Validator.validate(email)

export const testDrop = (name) => !name

export const testBlass = (name) => {
  if (name === 'dude') return 'blah'
  if (name === 'ka') return 'hehe'
  if (name === 'fuck') return false
}

export const testKlass = (name) => {
  if (name === 'zafari world') return false
  if (name.dada === 'asdas') return 'fickcckkc'
  return (name === 'kavin haris')
}
