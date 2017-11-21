
import React from 'react'
import { storiesOf } from '@storybook/react'

import EmailSetting from './EmailSetting.jsx'

storiesOf('Error', module)
  .add('404', () => (
    <EmailSetting />
  ))
