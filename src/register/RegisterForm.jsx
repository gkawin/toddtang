import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Button, Form } from 'semantic-ui-react'

class RegisterForm extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.fun,
    onHandleInputChange: PropTypes.func,
    errors: PropTypes.object,
    onBlurValidate: PropTypes.func,
    className: PropTypes.string,
  }

  renderValidationError (name) {
    return _(this.props.errors)
      .map((val, key) => (key !== name)
        ? false
        : (<span key={key} className='register-form__validation-error'>{val}</span>))
      .compact()
      .value()
  }

  render () {
    return (
      <div className={this.props.className}>
        <Form>
          <Form.Field>
            <label>อีเมล์</label>
            <Form.Input placeholder='กำหนดอีเมล์' />
          </Form.Field>

          <Form.Field>
            <label>รหัสผ่าน</label>
            <Form.Input placeholder='กำหนดรหัสผ่าน' type='password' />
          </Form.Field>
          <span className='register-form__bank-account-label'>
              ข้อมูลการติดต่อและบัญชีธนาคารที่ต้องการให้โอนเงิน
            </span>
          <Form.Field>
            <label>ชื่อ-สกุล</label>
            <Form.Input placeholder='นายตัว อย่าง' />
          </Form.Field>

          <Form.Field>
            <label>หมายเลขโทรศัพท์</label>
            <Form.Input placeholder='0899999999' />
          </Form.Field>

          <Form.Field>
            <Form.Select
              name='bank'
              label='ธนาคาร'
              options={[ { key: 'bbl', text: 'ธนาคารกรุงเทพ', value: 'bbl' } ]}
              onChange={console.log}
            />
          </Form.Field>

          <Form.Field>
            <label>หมายเลขบัญชี</label>
            <Form.Input placeholder='8249999999' type='number' />
          </Form.Field>

          <Form.Field>
            <Form.Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>

          <Button type='submit'>ลงทะเบียน</Button>
        </Form>
      </div>
    )
  }
}

export default RegisterForm
