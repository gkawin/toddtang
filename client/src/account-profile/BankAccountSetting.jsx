import React from 'react'
import PropTypes from 'prop-types'
import { Form, Divider } from 'semantic-ui-react'

import OptionComponent from '../bank-resources/OptionComponent.jsx'

import * as Bank from '../bank-resources/bank'

class BankAccountSetting extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    bankAbbr: PropTypes.oneOf(Bank.getBanksAbbreviation())
  }
  render () {
    return (
      <Form onSubmit={this.handleSubmit} className={this.props.className}>
        <Form.Select
          name='bank'
          label='บัญชีปัจจุบัน'
          options={Bank.getOptions({ as: OptionComponent(this.props.bankAbbr) })}
          onChange={this.handleChange}
        />
        <Form.Button content='เปลี่ยนแปลงบัญชีธนาคาร' />
      </Form>
    )
  }
}
BankAccountSetting.displayName = 'Bank Account Setting'
export default BankAccountSetting
