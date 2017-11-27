import React from 'react'
import PropTypes from 'prop-types'

import AccountSetting from '../../account-profile/AccountSetting.jsx'
import EmailSetting from '../../account-profile/EmailSetting.jsx'
import PasswordSetting from '../../account-profile/PasswordSetting.jsx'
import BankAccountSetting from '../../account-profile/BankAccountSetting.jsx'

class AccountProfileContainer extends React.PureComponent {
  static propTypes = {
    match: PropTypes.object
  }
  render () {
    return (
      <AccountSetting>
        <EmailSetting title='อีเมล์' currentEmail='omg@todteng.com' />
        <PasswordSetting title='รหัสผ่าน' />
        <BankAccountSetting title='บัญชีธนาคาร' />
      </AccountSetting>
    )
  }
}

export default AccountProfileContainer
