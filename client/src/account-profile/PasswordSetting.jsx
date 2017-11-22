import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

class PasswordSetting extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }

  handleSubmit = () => {

  }
  handleChange = () => {

  }
  render () {
    return (
      <Form onSubmit={this.handleSubmit} className={this.props.className}>
        <Form.Input
          required
          label='รหัสผ่านปัจจุบัน'
          name='currentPassword'
          type='password'
          onChange={this.handleChange}
        />
        <Form.Input
          required
          label='รหัสผ่านใหม่'
          name='newPassword'
          type='password'
          onChange={this.handleChange}
        />
        <Form.Input
          required
          label='ยืนยันรหัสผ่านใหม่'
          name='newPassword'
          type='password'
          onChange={this.handleChange}
        />
        <Form.Button content='เปลี่ยนแปลงรหัสผ่าน' />
      </Form>
    )
  }
}
PasswordSetting.displayName = 'Password'
export default PasswordSetting
