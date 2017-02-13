import './LoginForm.styl'

import React, { PropTypes } from 'react'

class LoginForm extends React.PureComponent {
  render () {
    return (
      <div className='login-form'>
        <div className='login-form__form'>
          <form className='login-form__form-login' onSubmit={this.props.onSubmit}>
            <input
              type='email'
              placeholder='email'
              name='email'
              onChange={this.props.onInputChange}
            />
            <input
              type='password'
              placeholder='password'
              name='password'
              onChange={this.props.onInputChange}
              />
            <button type='submit'>เข้าสู่ระบบ</button>
          </form>
        </div>
      </div>
    )
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
}

export default LoginForm
