import _ from 'lodash'
import expect from 'expect'

import * as RegisterRules from './RegisterRules'

describe('Register RegisterRules', () => {
  describe('called input required', () => {
    it.only('should return required\'s error message when input is empty', () => {
      const result = RegisterRules.required(null)
      expect(result).to.be.exist()
    })

    it('should be nothing input is not to be an empty', () => {
      const result = RegisterRules.required('toddtang')
      expect(result).to.be.null()
    })
  })

  describe('check email format', () => {
    it('should be nothing when fill the email format is correctly', () => {
      const result = RegisterRules.emailFormat('foo@bar.com')
      expect(result).to.be.null()
    })

    it('should return error message if email is malformat', () => {
      const testFailureCases = [ 'bbb@.3_.com_@fsdf.cp3', '55_@dse@.com.de' ]
      _.forEach(testFailureCases, (value) => {
        const result = RegisterRules.emailFormat(value)
        expect(result).to.be.exist()
      })
    })
  })

  describe('minimun allow length', () => {
    it('should be nothing if input equal or more than 6 charactors', () => {
      const text = 'Nana was killed by whom?'
      const minLength = RegisterRules.minLength(6)
      expect(minLength(text)).to.be.null()
    })

    it('should return error message if text less than 10 charactors', () => {
      const text = 'todd'
      const minLength = RegisterRules.minLength(10)
      expect(minLength(text)).to.be.exist()
    })
  })
})
