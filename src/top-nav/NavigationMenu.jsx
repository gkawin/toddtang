import './NavigationMenu.styl'

import React from 'react'

class NavigationMenu extends React.PureComponent {
  render () {
    return (
      <nav className='navigation-menu'>
        <ul className='navigation-menu__menu-list'>
          <li><a href='register'>สมัครสมาชิก</a></li>
          <li>วิธีการแทงหวย</li>
          <li>เข้าแทงหวย</li>
          <li>ติดต่อเรา</li>
        </ul>
      </nav>
    )
  }
}

export default NavigationMenu
