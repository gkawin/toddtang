import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'

// import * as RegisterFormActions from '../../action-creators/RegisterFormActions'
// import { getFormStatus } from '../../register/selectors'
import * as RegisterValidation from '../../register/RegisterValidation'
import { required, minLength, emailFormat } from '../../register/RegisterRules'

import RegisterForm from '../../homepage/register/RegisterForm.jsx'

const fieldValidations = [
  RegisterValidation.ruleRunner('password', 'รหัสผ่าน', [ required, minLength(6) ]),
  RegisterValidation.ruleRunner('name', 'ชื่อ-สกุล', [ required ]),
  RegisterValidation.ruleRunner('account_number', 'เลขบัญชีธนาคาร', [ minLength(10) ]),
  RegisterValidation.ruleRunner('bank', 'ธนาคาร', [ required ]),
  RegisterValidation.ruleRunner('phone', 'เบอร์โทรศัพท์', [ minLength(10) ])
]

class RegisterFormContainer extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  // onSubmit = (e) => {
  //   e.preventDefault()
  //   const validationError = RegisterValidation.validate(this.state, fieldValidations)
  //   this.setState({ validationError })
  // }
  //
  // handleInputChange = (e) => {
  //   const value = e.target.value
  //   const name = e.target.name
  //   this.setState({ [name]: value })
  // }
  //
  // onBlurValidate = (e) => {
  //   e.preventDefault()
  //   const onBlurValidates = [ RegisterValidation.ruleRunner('email', 'อีเมล์', [ emailFormat ]) ]
  //   const validationError = RegisterValidation.validate(this.state, onBlurValidates)
  //   this.setState({ validationError })
  // }

  render () {
    return (
      <RegisterForm
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default RegisterFormContainer
