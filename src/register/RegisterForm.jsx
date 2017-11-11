import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

class RegisterForm extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.fun,
    className: PropTypes.string,
  }

  state = { email: '', password: '', actualName: '', telephone: '', bank: '', accountNumber: '', acceptCondition: false }

  handleChange = (e, { name, value, checked }) => {
    e.preventDefault()
    this.setState({ [name]: value || checked })
  }

  onSubmitForm = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render () {
    return (
      <div className={this.props.className}>
        <Form onSubmit={this.onSubmitForm}>
          <Form.Input
            required
            name='email'
            type='email'
            label='อีเมล์'
            placeholder='กำหนดอีเมล์'
            onChange={this.handleChange}
          />
          <Form.Input
            required
            name='password'
            type='password'
            label='กำหนดรหัสผ่าน'
            placeholder='กำหนดรหัสผ่าน'
            onChange={this.handleChange}
          />
          <span className='register-form__bank-account-label'>
            ข้อมูลการติดต่อและบัญชีธนาคารที่ต้องการให้โอนเงิน
          </span>
          <Form.Input
            required
            name='actualName'
            type='text'
            label='ชื่อ-สกุล'
            placeholder='นายจอน โดว'
            onChange={this.handleChange}
          />
          <Form.Input
            required
            type='tel'
            name='telephone'
            label='หมายเลขโทรศัพท์ที่ติดต่อได้'
            placeholder='0899999999'
            onChange={this.handleChange}
          />
          <Form.Select
            required
            name='bank'
            label='ธนาคาร'
            options={[ { key: 'bbl', text: 'ธนาคารกรุงเทพ', value: 'bbl' } ]}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            name='accountNumber'
            label='หมายเลขบัญชี'
            placeholder='8249999999'
            onChange={this.handleChange}
          />
          <Form.Checkbox
            required
            name='acceptCondition'
            label='I agree to the Terms and Conditions'
            onChange={this.handleChange}
          />
          <Form.Button content='ยืนยันการสมัครสมาชิก' />
        </Form>
      </div>
    )
  }
}

export default RegisterForm
