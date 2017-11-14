import React from 'react'

import LoginLayout from '../../homepage/login/LoginLayout.jsx'

class AppLoginContainer extends React.Component {
  state = {
    email: null,
    password: null
  }
  handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({ [name]: value })
  }

  onSubmit = (payload) => {
    // login payload
  }

  render () {
    return (
      <LoginLayout
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default AppLoginContainer
