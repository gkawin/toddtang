import './UserMenu.styl'

import React, { PropTypes } from 'react'

class UserMenu extends React.Component {
  render () {
    return (
      <div className='user-menu'>
        <div className='user-menu__menu-item'>
          <ul>
            <li>foo</li>
            <li>foo</li>
            <li>foo</li>
            <li>foo</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default UserMenu
