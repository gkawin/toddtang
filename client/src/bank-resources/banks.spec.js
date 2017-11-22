import * as bank from './bank'

describe('banks logo\'s logo', () => {
  it('should have url image', () => {
    const urlImage = bank.getImage('bbl')
    expect(urlImage).toEqual({'bgColor': '#1e4598', 'url': './logos/bbl.svg'})
  })
})
