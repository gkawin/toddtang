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
      <div key={`${key}${item.target}`} className='member-top-nav-menu__item'>
        <Link className='member-top-nav-menu__link' to={geturl(item.target)}>{item.text}</Link>
      </div>
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
