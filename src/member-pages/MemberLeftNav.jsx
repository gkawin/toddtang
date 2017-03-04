import './MemberLeftNav.styl'

import React from 'react'
import { Link } from 'react-router'

import * as Link from '../link/Link'

class MemberLeftNav extends React.Component {
  render () {
    return (
      <section className='member-left-nav'>
        <div className='member-left-nav__container'>
          <div className='member-left-nav__items'>
            <ul>
              <li><Link to={Link.geturl('bet')}>แทงหวย</Link></li>
              <li><Link to={Link.geturl('betlist')}>ดูโพย</Link></li>
              <li><Link to={Link.geturl('check')}>ตรวจผลรางวัล</Link></li>
              <li><Link to={Link.geturl('deposit')}>ฝาก-ถอน</Link></li>
              <li><Link to={Link.geturl('deposit')}>เลขชุดที่ชอบ</Link></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default MemberLeftNav
