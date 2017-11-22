import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'semantic-ui-react'

class EmailSetting extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    currentEmail: PropTypes.string
  }

  handleSubmit = () => {

  }
  handleChange = () => {

  }
  render () {
    return (
      <Form onSubmit={this.handleSubmit} className={this.props.className}>
        <Form.Field className='current-email'>
          <label>อีเมล์ปัจจุบัน</label>
          <Input type='email' name='currentEmail' disabled value={this.props.currentEmail} />
        </Form.Field>
        <Form.Input
          required
          label='อีเมล์ใหม่'
          name='email'
          type='email'
          onChange={this.handleChange}
        />
        <Form.Button content='เปลี่ยนแปลงอีเมล์' />
      </Form>
    )
  }
}
EmailSetting.displayName = 'Change Email Account'
export default EmailSetting
