import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

class TopNavFixed extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    on: PropTypes.oneOf([ 'top' ]),
    className: PropTypes.string,
  }
  render () {
    return (
      <Menu className={this.props.className} fixed={this.props.on} inverted >
        {this.props.children}
      </Menu>

    )
  }
}

export default styled(TopNavFixed)`
  max-height: 45px;
  height: 45px;
`
