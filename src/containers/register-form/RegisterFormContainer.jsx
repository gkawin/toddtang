import React from 'react'

import RegisterForm from '../../register-form/RegisterForm.jsx'

class RegisterFormContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  onSubmit = (e) => {
    e.preventDefault()
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
