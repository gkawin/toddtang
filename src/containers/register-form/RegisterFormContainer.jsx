import React from 'react'
import Validator from 'email-validator'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import * as RegisterFormActions from '../../action-creators/RegisterFormActions'
import { getFormStatus } from '../../register-form/selectors'
import { firebase } from 'react-redux-firebase'

import RegisterForm from '../../register-form/RegisterForm.jsx'

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
      account_number: null
    }
  }

  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    firebase: React.PropTypes.object
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (!Validator.validate(this.state.email)) return
    this.props.onSubmit(this.state)
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
      />
    )
  }
}

export default enhance(RegisterFormContainer)
