import React from 'react'
import PropTypes from 'prop-types'
import { Form, Divider } from 'semantic-ui-react'

import * as Bank from '../bank-resources/bank'

class BankAccountSetting extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  }
  render () {
    return (
      <Form onSubmit={this.handleSubmit} className={this.props.className}>
        <Form.Select
          name='bank'
          label='บัญชีปัจจุบัน'
          options={Bank.getOptions()}
          onChange={this.handleChange}
        />
        <Form.Button content='เปลี่ยนแปลงบัญชีธนาคาร' />
      </Form>
    )
  }
}
BankAccountSetting.displayName = 'Bank Account Setting'
export default BankAccountSetting
