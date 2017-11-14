import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Container, Menu, Button, Header, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

class Jumbotron extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  }
  render () {
    return (
      <Segment
        inverted
        textAlign='center'
        className={this.props.className}
        vertical
      >
        <Container>
          <Menu inverted pointing secondary size='large'>
            <Menu.Item as='a' active>Home</Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item position='right'>
              <Button as='a' inverted>Log in</Button>
              <Button as='a' inverted className='sign-up'>Sign Up</Button>
            </Menu.Item>
          </Menu>
        </Container>

        <Container text>
          <Header
            as='h1'
            content='Imagine-a-Company'
            inverted
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
          />
          <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />
          <Button primary size='huge'>
            Get Started
            <Icon name='right arrow' />
          </Button>
        </Container>
      </Segment>
    )
  }
}

export default styled(Jumbotron)`
  min-height: 700px;
  padding: 1em 0em !important;
  .sign-up {
    margin-left: 0.5em !important;
  }
`
