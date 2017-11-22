import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import styled from 'styled-components'

import banks from './banks-logo/banks.json'

class BankAccountSetting extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  }
  render () {
    console.log(banks)
    return (
      <Form onSubmit={this.handleSubmit} className={this.props.className}>
        <Form.Select
          required
          name='bank'
          label='บัญชีปัจจุบัน'
          options={[ { key: 'bbl', text: 'ธนาคารกรุงเทพ​ (08x-xxx-xxx-4)', value: 'bbl', icon: 'bbl' } ]}
          onChange={this.handleChange}
        />
        <Form.Button content='เปลี่ยนแปลงอีเมล์' />
      </Form>
    )
  }
}
BankAccountSetting.displayName = 'Bank Account Setting'
export default styled(BankAccountSetting)`
  .bbl::before {

  }
`
