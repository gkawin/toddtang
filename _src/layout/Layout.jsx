import './Layout.styl'

import React, { PropTypes } from 'react'

class Layout extends React.PureComponent {
  render () {
    return (
      <div className='layout'>
        <div className='layout__top'>
          {this.props.top}
        </div>
        <div className='layout__children'>
          <div className='layout__children-contents'>
            {this.props.children}
          </div>
        </div>
        <div className='layout__bottom'>
          {this.props.bottom}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  top: PropTypes.node,
  bottom: PropTypes.node,
  children: PropTypes.node
}

export default Layout
