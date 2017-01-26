import './RegisterForm.styl'

import React from 'react'

class RegisterForm extends React.Component {
  render () {
    return (
      <div className='register-form'>
        <form>
          <div className='register-form__form-row'>
            <div className='register-form__label'>
              <label>อีเมล์</label>
              <span className='register-form__advice'>
                (กรุณาใช้ email จริง เพื่อใช้ในการเข้าสู่ระบบ และยืนยันตัว)
              </span>
            </div>
            <input
              className='register-form__form-input'
              type='email'
              placeholder='(example@toddteng.com)'
            />
          </div>
          <div className='register-form__form-row'>
            <div className='register-form__label'>
              <label>กำหนดรหัสผ่าน</label>
              <span className='register-form__advice'>
                (ความยาวอย่างน้อย 6 ตัวอักษร)
              </span>
            </div>
            <input
              className='register-form__form-input'
              type='password'
            />
          </div>
          <span className='register-form__bank-account-label'>
            ข้อมูลการติดต่อและบัญชีธนาคารที่ต้องการให้โอนเงิน
          </span>
          <div className='register-form__form-row'>
            <div className='register-form__label'>
              <label>ชื่อ-สกุล</label>
            </div>
            <input
              className='register-form__form-input'
              type='text'
              placeholder='นายมั่งมี ศรีสุข'
            />
          </div>
          <div className='register-form__form-row'>
            <div className='register-form__label'>
              <label>หมายเลขโทรศัพท์</label>
            </div>
            <input
              className='register-form__form-input'
              type='number'
              placeholder='0899999999'
            />
          </div>
          <div className='register-form__form-row'>
            <div className='register-form__label'>
              <label>ธนาคาร</label>
            </div>
            <select className='register-form__form-select'>
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
          </div>
          <div className='register-form__form-row'>
            <div className='register-form__label'>
              <label>หมายเลขบัญชี</label>
            </div>
            <input
              className='register-form__form-input'
              type='number'
              placeholder='8249999999'
            />
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
