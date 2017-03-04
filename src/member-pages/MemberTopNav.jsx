import './MemberTopNav.styl'

import React from 'react'
import { Link } from 'react-router'

import { geturl } from '../route/Route'

export default class MemberTopNavMenu extends React.Component {
  render () {
    return (
      <section className='member-top-nav'>
        <div className='member-top-nav__left'>
          <div className='member-top-nav__menu'>
            <ul>
              <li><Link to={geturl('bet')}>แทงหวย</Link></li>
              <li><Link to={geturl('betlist')}>ดูโพย</Link></li>
              <li><Link to={geturl('check')}>ตรวจผลรางวัล</Link></li>
              <li><Link to={geturl('deposit')}>ฝาก-ถอน</Link></li>
              <li><Link to={geturl('deposit')}>เลขชุดที่ชอบ</Link></li>
            </ul>
          </div>
        </div>
        <div className='member-top-nav__right'>
          <img
            className='member-top-nav__avatar' src='https://tw-react-prod.s3.amazonaws.com/6728f75a-ed8b-4d23-84ac-9d62ad583212.png'
          />
        </div>

      </section>
    )
  }
}

MemberTopNavMenu.propTypes = {
}
