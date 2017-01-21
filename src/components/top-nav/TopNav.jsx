import './TopNav.styl'

import React from 'react'
import NavigationMenu from './NavigationMenu.jsx'

class TopNav extends React.PureComponent {
  render () {
    return (
      <div className='top-nav'>
        <div className='top-nav__logo'>
          Logo
        </div>
        <div className='top-nav__menu'>
          <NavigationMenu />
        </div>
      </div>
    )
  }
}

export default TopNav
