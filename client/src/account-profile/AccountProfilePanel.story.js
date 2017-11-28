import React from 'react'
import { storiesOf } from '@storybook/react'

import AccountProfilePanel from './AccountProfilePanel.jsx'
import AccountSettings from './AccountSettings.jsx'
import EmailSetting from './EmailSetting.jsx'
import PasswordSetting from './PasswordSetting.jsx'
import BankAccountSetting from './BankAccountSetting.jsx'

storiesOf('AccountProfilePanel', module)
  .add('Form initialize', () => (
    <AccountProfilePanel>
      <AccountSettings name='Setting'>
        <EmailSetting title='อีเมล์' currentEmail='omg@todteng.com' />
        <PasswordSetting title='รหัสผ่าน' />
        <BankAccountSetting title='บัญชีธนาคาร' />
      </AccountSettings>
    </AccountProfilePanel>
  ))
