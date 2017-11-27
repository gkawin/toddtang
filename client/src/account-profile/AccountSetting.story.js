import React from 'react'
import { storiesOf } from '@storybook/react'

import AccountSetting from './AccountSetting.jsx'
import EmailSetting from './EmailSetting.jsx'
import PasswordSetting from './PasswordSetting.jsx'
import BankAccountSetting from './BankAccountSetting.jsx'

storiesOf('AccountPanel', module)
  .add('Form initialize', () => (
    <AccountSetting>
      <EmailSetting title='อีเมล์' currentEmail='omg@todteng.com' />
      <PasswordSetting title='รหัสผ่าน' />
      <BankAccountSetting title='บัญชีธนาคาร' />
    </AccountSetting>
  ))
