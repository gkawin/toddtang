import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import styled from 'styled-components'

import { th } from '../bank-resources/banks.json'

class BankAccountSetting extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  }
  render () {
    return (
      <Form onSubmit={this.handleSubmit} className={this.props.className}>
        <Form.Select
          required
          name='bank'
          label='บัญชีปัจจุบัน'
          options={[ { key: 'bbl', text: 'ธนาคารกรุงเทพ​ (08x-xxx-xxx-4)', value: 'bbl', className: 'bbl icon' } ]}
          onChange={this.handleChange}
        />
        <Form.Button content='เปลี่ยนแปลงอีเมล์' />
      </Form>
    )
  }
}
BankAccountSetting.displayName = 'Bank Account Setting'
export default styled(BankAccountSetting)`
  .bbl.icon::before {
    content: '';
    width: 24px;
    height: 24px;
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
    background-color: ${th.bbl.color};
    background-image: url(${require('../bank-resources/logos/bbl.svg')})
  }
`
