import React from 'react'
import { storiesOf } from '@storybook/react'

import AccountPanel from './AccountPanel.jsx'
import EmailSetting from './EmailSetting.jsx'

storiesOf('AccountPanel', module)
  .add('Form initialize', () => (
    <AccountPanel>
      <EmailSetting currentEmail='omg@todteng.com' />
      <EmailSetting currentEmail='omg@todteng.com' />
    </AccountPanel>
  ))
