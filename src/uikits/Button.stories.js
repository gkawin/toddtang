import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button.jsx'

storiesOf('Button', module)
  .add('idle', () => (
    <Button>Button</Button>
  ))
