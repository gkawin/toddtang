import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Dropdown, Container, Image } from 'semantic-ui-react'
import styled from 'styled-components'

class TopNavRightMenus extends React.PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.string,
    })),
    username: PropTypes.string,
  }

  renderUserAvatar = () => (
    <span className='app-layout__avatar'>
      <Image avatar src='https://s3.amazonaws.com/uifaces/faces/twitter/gauchomatt/128.jpg' />
      {this.props.username}
    </span>
  )

  render () {
    return (
      <Container className='top-nav-right-menus'>
        <Menu.Menu position='right'>
          <Menu.Item link>
            <Icon
              name='alarm'
              inverted
              className='top-nav-right-menus__notification-icon'
            />
          </Menu.Item>
          <Dropdown
            item
            trigger={this.renderUserAvatar()}
            options={this.props.options}
            pointing='top left'
            icon={null}
          />
        </Menu.Menu>
      </Container>
    )
  }
}

export default styled(TopNavRightMenus)`
  .top-nav-right-menus {
    &__notification-icon {
      margin: 0 !important;
      width: 14px;
    }
  }
`
