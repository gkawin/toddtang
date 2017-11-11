import React from 'react'
import PropTypes from 'prop-types'
import { Form, Message } from 'semantic-ui-react'
import get from 'lodash/get'

class RegisterForm extends React.PureComponent {
  static propTypes = {
    formState: PropTypes.oneOf(['loading', 'success', 'error']),
    onSubmit: PropTypes.func,
    className: PropTypes.string,
    errorItems: PropTypes.object,
  }

  static defaultProps = { errorItems: { } }

  state = {
    email: '',
    password: '',
    actualName: '',
    telephone: '',
    bank: '',
    accountNumber: '',
    acceptCondition: false,
  }

  getFormState = () => !this.props.formState ? null : ({ [this.props.formState]: true })

  handleChange = (e, { name, value, checked }) => {
    e.preventDefault()
    this.setState({ [name]: value || checked })
  }

  onSubmitForm = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  renderError = () => {
    return !get(this.getFormState(), 'error') ? null : (
      <Message
        error
        {...this.props.errorItems}
      />
    )
  }

  render () {
    return (
      <div className={this.props.className}>
        <Form onSubmit={this.onSubmitForm} {...this.getFormState()}>
          {this.renderError()}
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
