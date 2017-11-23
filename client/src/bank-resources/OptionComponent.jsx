import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as Bank from './bank'

function OptionComponent (bank) {
  return class ProxyOption extends React.PureComponent {
    static propTypes = {
      className: PropTypes.string,
      children: PropTypes.node,
    }
    render () {
      return (
        <div {...this.props} >
          {this.props.children}
        </div>
      )
    }
  }
}

export default (bank) => styled(OptionComponent(bank))`
  ::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 5px;
    background-image: url(${Bank.getImage(bank)});
    background-color: ${Bank.getBackgroundColor(bank)};
  }
`
