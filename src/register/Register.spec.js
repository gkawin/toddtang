import * as Register from './Register'

describe('RegisterForm', () => {
  it('should false if email is malformat', () => {
    const test = 'fooo@barr.com'
    const result = Register.validateEmail(test)
  })
})
