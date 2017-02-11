import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import * as RegisterFormActions from '../../action-creators/RegisterFormActions'
import { getFormStatus } from '../../register-form/selectors'
import ReduxFirebase from 'react-redux-firebase'
import * as RegisterValidation from '../../register/RegisterValidation'
import { required, minLength, emailFormat } from '../../register/RegisterRules'

import RegisterForm from '../../register-form/RegisterForm.jsx'

const fieldValidations = [
  RegisterValidation.ruleRunner('email', 'อีเมล์', [ emailFormat ]),
  RegisterValidation.ruleRunner('password', 'รหัสผ่าน', [ required, minLength(6) ]),
  RegisterValidation.ruleRunner('name', 'ชื่อ-สกุล', [ required ]),
  RegisterValidation.ruleRunner('account_number', 'เลขบัญชีธนาคาร', [ minLength(10) ]),
  RegisterValidation.ruleRunner('bank', 'ธนาคาร', [ required ]),
  RegisterValidation.ruleRunner('phone', 'เบอร์โทรศัพท์', [ minLength(10) ])
]

const enhance = compose(
  ReduxFirebase.firebase([
    'users'
  ]),
  connect(
    (state) => ({ formStatus: getFormStatus(state) }),
    (dispatch, ownProps) => ({
      onSubmit: RegisterFormActions.onSubmitForm({ dispatch, ...ownProps })
    })
  )
)

class RegisterFormContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: null,
      password: null,
      name: null,
      phone: null,
      bank: null,
      account_number: null,
      validationError: { }
    }
  }

  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired
  }

  onSubmit = (e) => {
    e.preventDefault()
    const validationError = RegisterValidation.validate(this.state, fieldValidations)
    this.setState({ validationError })
  }

  handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({ [name]: value })
  }

  render () {
    return (
      <RegisterForm
        onHandleInputChange={this.handleInputChange}
        onSubmit={this.onSubmit}
        errors={this.state.validationError}
      />
    )
  }
}

export default enhance(RegisterFormContainer)
