import React from 'react'
import { storiesOf } from '@storybook/react'

import RegisterForm from './RegisterForm.jsx'

storiesOf('RegisterForm', module)
  .add('Form initialize', () => (
    <RegisterForm />
  )
)
