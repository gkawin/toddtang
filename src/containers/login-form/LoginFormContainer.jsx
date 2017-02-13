import React from 'react'

import LoginForm from '../../login/LoginForm.jsx'

class LoginFormContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: null,
      password: null
    }
  }

  handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({ [name]: value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render () {
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onInputChange={this.handleInputChange}
      />
    )
  }
}

export default LoginFormContainer
