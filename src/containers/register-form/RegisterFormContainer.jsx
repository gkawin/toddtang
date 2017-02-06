import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import * as RegisterFormActions from '../../action-creators/RegisterFormActions'
import { getFormStatus } from '../../register-form/selectors'
import { firebase } from 'react-redux-firebase'
import * as RegisterValidation from '../../register/RegisterValidation'
import { required, minLength } from '../../register/RegisterRules'

import RegisterForm from '../../register-form/RegisterForm.jsx'

const fieldValidations = [
  RegisterValidation.ruleRunner('email', 'อีเมล์', [ minLength(20) ]),
  RegisterValidation.ruleRunner('phone', 'เบอร์โทรศัพท์', [ minLength(10) ])
]

const enhance = compose(
  firebase([
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
      showError: false,
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
    console.log(this.state)
    return (
      <RegisterForm
        onHandleInputChange={this.handleInputChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default enhance(RegisterFormContainer)
