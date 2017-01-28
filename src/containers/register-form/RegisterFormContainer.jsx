import React from 'react'
import Validator from 'email-validator'
import { connect } from 'react-redux'
import * as RegisterFormActions from '../../action-creators/RegisterFormActions'

import RegisterForm from '../../register-form/RegisterForm.jsx'

const mapStateToProps = (state) => {
  return state.RegisterForm
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (input) => {
      dispatch(RegisterFormActions.onSubmitForm(input))
    }
  }
}

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
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
    onSubmit: React.PropTypes.func.isRequired
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
    console.log(this.props)
    return (
      <RegisterForm
        onHandleInputChange={this.handleInputChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default enhance(RegisterFormContainer)
