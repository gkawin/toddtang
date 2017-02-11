import './NavigationMenu.styl'

import React from 'react'
import { Link } from 'react-router'

class NavigationMenu extends React.PureComponent {
  render () {
    return (
      <nav className='navigation-menu'>
        <ul className='navigation-menu__menu-list'>
          <li><Link href='register'>สมัครสมาชิก</Link></li>
          <li>วิธีการแทงหวย</li>
          <li><Link href='login'>เข้าแทงหวย</Link></li>
          <li>ติดต่อเรา</li>
        </ul>
      </nav>
    )
  }
}

export default NavigationMenu
