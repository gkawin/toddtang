import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as Bank from './bank'

function OptionComponent (bankAbbr) {
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

export default (bankAbbr) => styled(OptionComponent(bankAbbr))`
  ::before {
    content: '';
    display: ${bankAbbr ? 'inline-block' : 'none'};
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 5px;
    background-image: url(${Bank.getImage(bankAbbr)});
    background-color: ${Bank.getBackgroundColor(bankAbbr)};
  }
`
