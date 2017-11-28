import React from 'react'
import PropTypes from 'prop-types'

class ProfileSettings extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default ProfileSettings
