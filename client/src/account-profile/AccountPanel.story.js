import React from 'react'
import { storiesOf } from '@storybook/react'

import AccountPanel from './AccountPanel.jsx'
import EmailSetting from './EmailSetting.jsx'
import PasswordSetting from './PasswordSetting.jsx'
import BankAccountSetting from './BankAccountSetting.jsx'

storiesOf('AccountPanel', module)
  .add('Form initialize', () => (
    <AccountPanel>
      <EmailSetting currentEmail='omg@todteng.com' />
      <PasswordSetting />
      <BankAccountSetting />
    </AccountPanel>
  ))