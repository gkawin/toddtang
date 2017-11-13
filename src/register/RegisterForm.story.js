import React from 'react'
import { storiesOf } from '@storybook/react'

import RegisterForm from './RegisterForm.jsx'

storiesOf('RegisterForm', module)
  .add('Form initialize', () => (
    <RegisterForm onSubmit={() => {}} />
  ))
  .add('Registering', () => (
    <RegisterForm
      formState='loading'
      onSubmit={() => {}}
    />
  ))
  .add('Error', () => (
    <RegisterForm
      formState='error'
      errorItems={{
        header: 'Action Forbidden',
        content: 'You can only sign up for an account once with a given e-mail address.'
      }}
      onSubmit={() => {}}
    />
  ))
