import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class AppLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }
  render () {
    return (
      <div className={this.props.className}>
        <Menu fixed='top' inverted >
          <Container>
            <Menu.Item as={Link} to='/account'>บัญชีผู้ใช้</Menu.Item>
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
