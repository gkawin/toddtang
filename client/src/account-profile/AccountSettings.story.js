import React from 'react'
import { storiesOf } from '@storybook/react'

import AccountSettings from './AccountSettings.jsx'
import EmailSetting from './EmailSetting.jsx'
import PasswordSetting from './PasswordSetting.jsx'
import BankAccountSetting from './BankAccountSetting.jsx'

storiesOf('AccountPanel', module)
  .add('Form initialize', () => (
    <AccountSettings name='Setting'>
      <EmailSetting title='อีเมล์' currentEmail='omg@todteng.com' />
      <PasswordSetting title='รหัสผ่าน' />
      <BankAccountSetting title='บัญชีธนาคาร' />
    </AccountSettings>
  ))
