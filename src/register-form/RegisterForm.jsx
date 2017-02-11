import './RegisterForm.styl'

import React from 'react'
import _ from 'lodash'

class RegisterForm extends React.PureComponent {
  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    onHandleInputChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  }

  renderValidationError (name) {
    return _.map(this.props.errors, (val, key) => (key !== name) ? null
      : (<span key={key} className='register-form__validation-error'>{val}</span>))
  }

  render () {
    return (
      <div className='register-form'>
        <form onSubmit={this.props.onSubmit}>
          <div className='register-form__form-row'>
            <div className='register-form__label'>
              <label>อีเมล์</label>
              <span className='register-form__advice'>
                (กรุณาใช้ email จริง เพื่อใช้ในการเข้าสู่ระบบ และยืนยันตัว)
              </span>
            </div>
            <input
              name='email'
              className='register-form__form-input'
              type='email'
              placeholder='(example@toddteng.com)'
              onChange={this.props.onHandleInputChange}
            />
            {this.renderValidationError('email')}
          </div>
          <div className='register-form__form-row'>
            <div className='register-form__label'>
              <label>กำหนดรหัสผ่าน</label>
              <span className='register-form__advice'>
                (ความยาวอย่างน้อย 6 ตัวอักษร)
              </span>
            </div>
            <input
              name='password'
              className='register-form__form-input'
              type='password'
              onChange={this.props.onHandleInputChange}
            />
            {this.renderValidationError('password')}
          </div>
          <span className='register-form__bank-account-label'>
            ข้อมูลการติดต่อและบัญชีธนาคารที่ต้องการให้โอนเงิน
          </span>
          <div className='register-form__form-row'>
            <div className='register-form__label'>
              <label>ชื่อ-สกุล</label>
            </div>
            <input
              name='name'
              className='register-form__form-input'
              type='text'
              placeholder='นายมั่งมี ศรีสุข'
              onChange={this.props.onHandleInputChange}
            />
            {this.renderValidationError('name')}
          </div>
          <div className='register-form__form-row'>
            <div className='register-form__label'>
              <label>หมายเลขโทรศัพท์</label>
            </div>
            <input
              name='phone'
              className='register-form__form-input'
              type='number'
              placeholder='0899999999'
              onChange={this.props.onHandleInputChange}
            />
            {this.renderValidationError('phone')}
          </div>
          <div className='register-form__form-row'>
            <div className='register-form__label'>
              <label>ธนาคาร</label>
            </div>
            <select
              className='register-form__form-select'
              name='bank'
              onChange={this.props.onHandleInputChange}
            >
              <option value='' defaultValue=''>โปรดเลือก</option>
              <option value='ธนาคารกรุงเทพ'>ธนาคารกรุงเทพ</option>
              <option value='ธนาคารกสิกรไทย'>ธนาคารกสิกรไทย</option>
              <option value='ธนาคารกรุงไทย'>ธนาคารกรุงไทย</option>
              <option value='ธนาคารไทยพาณิชย์'>ธนาคารไทยพาณิชย์</option>
              <option value='ธนาคารกรุงศรีอยุธยา'>ธนาคารกรุงศรีอยุธยา</option>
              <option value='ธนาคารเกียรตินาคิน'>ธนาคารเกียรตินาคิน</option>
              <option value='ธนาคารซีไอเอ็มบีไทย'>ธนาคารซีไอเอ็มบีไทย</option>
              <option value='ธนาคารทหารไทย'>ธนาคารทหารไทย</option>
              <option value='ธนาคารธนชาต'>ธนาคารธนชาต</option>
              <option value='ธนาคารยูโอบี'>ธนาคารยูโอบี</option>
              <option value='ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร'>ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร</option>
              <option value='ธนาคารออมสิน'>ธนาคารออมสิน</option>
              <option value='ธนาคารอาคารสงเคราะห์'>ธนาคารอาคารสงเคราะห์</option>
              <option value='ธนาคารอิสลามแห่งประเทศไทย'>ธนาคารอิสลามแห่งประเทศไทย</option>
            </select>
            {this.renderValidationError('bank')}
          </div>
          <div className='register-form__form-row'>
            <div className='register-form__label'>
              <label>หมายเลขบัญชี</label>
            </div>
            <input
              name='account_number'
              className='register-form__form-input'
              type='number'
              placeholder='8249999999'
              onChange={this.props.onHandleInputChange}
            />
            {this.renderValidationError('account_number')}
          </div>
          <div className='register-form__form-row'>
            <button type='submit' className='register-form__button'>
              ลงทะเบียน
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default RegisterForm
