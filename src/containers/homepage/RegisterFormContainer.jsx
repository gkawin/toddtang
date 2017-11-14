import React from 'react'
import PropTypes from 'prop-types'

import RegisterForm from '../../homepage/register/RegisterForm.jsx'

class RegisterFormContainer extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  render () {
    return (
      <RegisterForm
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default RegisterFormContainer
