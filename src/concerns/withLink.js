import React, { PropTypes } from 'react'

function withLink () {
  return (BaseComponent) => class withLinkContainer extends React.PureComponent {
    render () {
      return (
        <BaseComponent {...this.props} />
      )
    }
  }
}

export default withLink
