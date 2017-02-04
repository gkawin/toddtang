import * as Rules from './Rules'

describe('Register rules', () => {
  describe('called input required', () => {
    it('should return required\'s error message when input is empty', () => {
      const result = Rules.required(null)
      expect(result).to.be.exist()
    })
  })
})
