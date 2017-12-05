import React from 'react'
import PropTypes from 'prop-types'
import { Image, Menu } from 'semantic-ui-react'
import styled from 'styled-components'

import TopNavRightMenus from '../top-nav/TopNavRightMenus.jsx'

class AppLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    username: PropTypes.string.isRequired,
  }

  render () {
    const options = [
      {
        key: 'account',
        value: 'account',
        text: 'บัญชี',
        icon: 'user'
      },
      { key: 'settings', text: 'ตั้งค่าบัญชี', icon: 'settings' },
      { key: 'sign-out', text: 'ลงชื่อออก', icon: 'sign out' },
    ]
    return (
      <div className='app-layout'>
        <Menu fixed='top' inverted className='app-layout__top-nav-fixed'>
          <TopNavRightMenus
            options={options}
            username={this.props.username}
          />
        </Menu>
        <div className='app-layout__container'>
          {React.Children.only(this.props.children)}
        </div>
      </div>
    )
  }
}

export default styled(AppLayout)`
  .app-layout {
    &__top-nav-fixed {
      max-height: 45px;
      height: 45px;
    }
    &__container {
    ${''/* propably height for fixed menu on the top was defined at 45px. */}
      margin-top: 45px;
    }
  }
`
