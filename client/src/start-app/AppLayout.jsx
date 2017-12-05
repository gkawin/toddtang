import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

import TopNavRightMenus from '../top-nav/TopNavRightMenus.jsx'
import TopNavFixed from '../top-nav/TopNavFixed.jsx'

class AppLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    username: PropTypes.string.isRequired,
    className: PropTypes.string,
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
      <div className={this.props.className}>
        <TopNavFixed on='top'>
          <TopNavRightMenus
            options={options}
            username={this.props.username}
          />
        </TopNavFixed>
        <div className='app-layout__container'>
          {React.Children.only(this.props.children)}
        </div>
      </div>
    )
  }
}

export default styled(AppLayout)`
  .app-layout {
    &__container {
    ${''/* propably height for fixed menu on the top was defined at 45px. */}
      margin-top: 45px;
    }
  }
`
