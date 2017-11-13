import React from 'react'
import PropTypes from 'prop-types'
import { Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class LoginLayout extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
  }

  state = { email: '', password: '' }

  handleInputChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render () {
    return (
      <div className={this.props.className}>
        <Grid textAlign='center' verticalAlign='middle' >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input
                  name='email'
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <Form.Input
                  name='password'
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <Form.Button color='teal' fluid size='large' content='Login' />
              </Segment>
            </Form>
            <Message>
          New to us? <Link to='/register'>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default styled(LoginLayout)`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 700px;
  transform: translate(-50%, -50%);
`
