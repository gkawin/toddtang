import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Container, Dropdown, Image } from 'semantic-ui-react'
import styled from 'styled-components'

class AppLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    username: PropTypes.string.isRequired,
  }
  renderUserAvatar = () => (
    <span className='app-layout__avatar'>
      <Image avatar src='https://s3.amazonaws.com/uifaces/faces/twitter/gauchomatt/128.jpg' />
      {this.props.username}
    </span>
  )
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
        <Menu fixed='top' inverted className='app-layout__top-nav-fixed'>
          <Menu.Menu position='right'>
            <Dropdown
              fluid
              item
              trigger={this.renderUserAvatar()}
              options={options}
              pointing='top left'
              icon={null}
            />
          </Menu.Menu>
        </Menu>

        <Container className='app-layout__container'>
          {React.Children.only(this.props.children)}
        </Container>
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
    &__user-menu {
      width: 200px;
    }
  }
`
