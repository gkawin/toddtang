import './MemberTopNavMenu.styl'

import React, {PropTypes} from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import { Link } from 'react-router'

import { geturl } from '../route/Route'

const MemberTopNavMenu = (props) => {
  const renderMenuItems = () => _.map(props.menus, menuItems)
  const menuItems = (item, key) => {
    if (item.divider) return (<div className='member-top-nav-menu__divider' />)
    return (
      <Link
        key={`${key}${item.target}`}
        className='member-top-nav-menu__item'
        to={geturl(item.target)}
      >
        {item.text}
      </Link>
    )
  }

  const menuCls = classNames('member-top-nav-menu', props.className)

  return (
    <div className={menuCls}>
      {renderMenuItems()}
    </div>
  )
}

MemberTopNavMenu.propTypes = {
  menus: PropTypes.array,
  className: PropTypes.string,
}

export default MemberTopNavMenu
