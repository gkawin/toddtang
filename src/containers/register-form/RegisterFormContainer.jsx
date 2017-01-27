import React from 'react'
import Validator from 'email-validator'

import RegisterForm from '../../register-form/RegisterForm.jsx'

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

  onSubmit = (e) => {
    e.preventDefault()
    if (!Validator.validate(this.state.email)) return
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

export default RegisterFormContainer
