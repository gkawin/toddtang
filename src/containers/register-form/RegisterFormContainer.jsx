import React from 'react'
import Validator from 'email-validator'
import { connect } from 'react-redux'
import { firebase } from 'react-redux-firebase'
import { compose } from 'recompose'
import * as RegisterFormActions from '../../action-creators/RegisterFormActions'
import { getFormStatus } from '../../register-form/selectors'

import RegisterForm from '../../register-form/RegisterForm.jsx'

const enhance = compose(
  firebase(),
  connect(
    (state) => ({ formStatus: getFormStatus(state) }),
    (dispatch) => ({
      onSubmit: (payload) => dispatch(RegisterFormActions.onSubmitForm(payload))
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
    firebase: React.PropTypes.shape({
      ref: React.PropTypes.func
    })
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

  test = async () => {
    const result = await this.props.firebase.ref('/users/1').once('value')
    console.log(result.val())
  }

  render () {
    this.test()
    return (
      <RegisterForm
        onHandleInputChange={this.handleInputChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default enhance(RegisterFormContainer)
