import React, { PropTypes } from 'react'

class TopNav extends React.PureComponent {
  render () {
    return (
      <div className='top-nav'>
        <div className='top-nav__logo'>
          Logo
        </div>
        <div className='top-nav__menu'>
          menu bar
        </div>
      </div>
    )
  }
}

export default TopNav
