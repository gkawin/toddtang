import * as Route from './Route'

import { given, shouldEqual } from 'circumstance'

describe('Route', () => {
  const initalState = { pathname: '/foo' }
  it('should return target with pathname', () => {
    given(initalState)
    .then(Route.geturl('checkme'), shouldEqual('/foo/checkme'))
  })
})
