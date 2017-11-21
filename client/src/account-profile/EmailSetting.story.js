import React from 'react'
import { storiesOf } from '@storybook/react'

import EmailSetting from './EmailSetting.jsx'

storiesOf('EmailSetting', module)
  .add('Form initialize', () => (
    <EmailSetting currentEmail='omg@todteng.com' />
  ))
