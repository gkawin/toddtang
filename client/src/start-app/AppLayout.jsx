import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Container, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class AppLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    username: PropTypes.string.isRequired,
  }
  render () {
    console.log(this.props.username)
    return (
      <div className={this.props.className}>
        <Menu fixed='top' inverted stackable >
          <Container>
            <Menu.Item as={Link} to='/account' replace>บัญชีผู้ใช้</Menu.Item>
            <Menu.Menu position='right'>
              <Dropdown
                item
                text={this.props.username}
              >
                <Dropdown.Menu>
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>Russian</Dropdown.Item>
                  <Dropdown.Item>Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Container>
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
    &__container {
    ${''/* propably height for fixed menu on the top was defined at 40px. */}
      margin-top: 40px;
    }
  }
`
