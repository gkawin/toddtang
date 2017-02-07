import * as RegisterValidation from './RegisterValidation'
import { required, minLength, emailFormat } from './RegisterRules'

describe('RegisterValidation', () => {
  describe('assign error validation messages', () => {
    const input = { email: null, username: 'fo' }
    const fn = RegisterValidation.validate
    const ruleRunner = RegisterValidation.ruleRunner

    it('should contain error messages', () => {
      const result = fn(input, [ ruleRunner('email', 'E-mail', [ emailFormat ]) ])
      const anotherResult = fn(input, [ ruleRunner('username', 'Username', [ minLength(6) ]) ])
      expect(result.email).to.be.exist()
      expect(anotherResult.username).to.be.exist()
    })

    it('should be pass check in [required] case, but its fail in [minLength] case', () => {
      const result = fn(input, [ ruleRunner('username', 'User-name', [ required, minLength(10) ]) ])
      expect(result.username).to.be.exist()
    })
  })
})
