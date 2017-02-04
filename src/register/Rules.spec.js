import _ from 'lodash'

import * as Rules from './Rules'

describe('Register rules', () => {
  describe('called input required', () => {
    it('should return required\'s error message when input is empty', () => {
      const result = Rules.required(null)
      expect(result).to.be.exist()
    })

    it('should be nothing input is not to be an empty', () => {
      const result = Rules.required('toddtang')
      expect(result).to.be.null()
    })
  })

  describe('check email format', () => {
    it('should be nothing when fill the email format is correctly', () => {
      const result = Rules.emailFormat('foo@bar.com')
      expect(result).to.be.null()
    })

    it('should return error message if email is malformat', () => {
      const testFailureCases = [ 'bbb@.+3_.com_@fsdf.cp3', '55_@dse@.com.de' ]
      _.forEach(testFailureCases, (value) => {
        const result = Rules.emailFormat(value)
        expect(result).to.be.exist()
      })
    })
  })
})
