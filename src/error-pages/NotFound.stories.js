
import React from 'react'
import { storiesOf } from '@storybook/react'

import NotFound from './NotFound.jsx'

storiesOf('Error', module)
  .add('404', () => (
    <NotFound />
  ))
