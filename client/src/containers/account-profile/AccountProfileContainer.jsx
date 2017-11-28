import React from 'react'
import PropTypes from 'prop-types'

import AccountProfilePanel from '../../account-profile/AccountProfilePanel.jsx'
import AccountSettings from '../../account-profile/AccountSettings.jsx'
import ProfileSettings from '../../account-profile/ProfileSettings.jsx'
import EmailSetting from '../../account-profile/EmailSetting.jsx'
import PasswordSetting from '../../account-profile/PasswordSetting.jsx'
import BankAccountSetting from '../../account-profile/BankAccountSetting.jsx'

class AccountProfileContainer extends React.PureComponent {
  static propTypes = {
    match: PropTypes.object
  }
  render () {
    return (
      <AccountProfilePanel>
        <AccountSettings name='Setting'>
          <EmailSetting title='อีเมล์' currentEmail='omg@todteng.com' />
          <PasswordSetting title='รหัสผ่าน' />
          <BankAccountSetting title='บัญชีธนาคาร' />
        </AccountSettings>
        <ProfileSettings name='Profile'>
          <div>
            Avatar
          </div>
        </ProfileSettings>
      </AccountProfilePanel>

    )
  }
}

export default AccountProfileContainer
