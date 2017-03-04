import * as Link from './Link'

import { given, shouldEqual } from 'circumstance'

describe('Link', () => {
  const initalState = { pathname: '/foo' }
  it('should return target with pathname', () => {
    given(initalState)
    .then(Link.geturl('checkme'), shouldEqual('/foo/checkme'))
  })
})
