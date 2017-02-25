import './UserMenu.styl'

import React from 'react'
import { Link } from 'react-router'

class UserMenu extends React.Component {
  render () {
    const pathname = (routeTo) => (location) => `${location.pathname}/${routeTo}`
    return (
      <div className='user-menu'>
        <div className='user-menu__menu-items'>
          <ul>
            <li><Link to={pathname('bet')}>แทงหวย</Link></li>
            <li><Link to={pathname('betlist')}>ดูโพย</Link></li>
            <li><Link to={pathname('check')}>ตรวจผลรางวัล</Link></li>
            <li><Link to={pathname('deposit')}>ฝาก-ถอน</Link></li>
            <li><Link to={pathname('deposit')}>เลขชุดที่ชอบ</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default UserMenu
