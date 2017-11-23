import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'
import styled from 'styled-components'

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
        <div className='bank-account-setting__add-new-account'>
          <Button icon='add' />
        </div>
        <Form.Button content='เปลี่ยนแปลงบัญชีธนาคาร' />
      </Form>
    )
  }
}

export default styled(BankAccountSetting)`
  .bank-account-setting {
    &__add-new-account {
      margin-bottom: 10px;
    }
  }
`
