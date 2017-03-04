import React, {PropTypes} from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

import { geturl } from '../route/Route'
const MemberTopNavMenu = (props) => {
  const menuItems = (item, key) => (
    <li key={`${key}${item.target}`}><Link className='member-top-nav__link' to={geturl(item.target)}>{item.text}</Link></li>
  )

  const renderMenuItems = () => _.map(props.menus, menuItems)

  return (
    <div className='member-top-nav-menu'>
      <ul>{renderMenuItems()}</ul>
    </div>
  )
}

MemberTopNavMenu.propTypes = {
  menus: PropTypes.array
}

export default MemberTopNavMenu
