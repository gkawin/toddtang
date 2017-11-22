import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Container } from 'semantic-ui-react'

class AccountPanel extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  state = { activeIndex: 0 }

  handleClick = (e, { index }) => {
    e.preventDefault()
    this.setState({ activeIndex: index })
  }

  renderAccordSection = (component, idx) => {
    return (
      <div>
        <Accordion.Title
          active={this.state.activeIndex === idx}
          content={component.type.displayName || ''}
          index={idx}
          onClick={this.handleClick}
        />
        <Accordion.Content active={this.state.activeIndex === idx}>
          <Container>
            {component}
          </Container>
        </Accordion.Content>
      </div>
    )
  }

  render () {
    return (
      <div className='account-panel'>
        <Accordion fluid styled>
          {React.Children.map(this.props.children, this.renderAccordSection)}
        </Accordion>
      </div>
    )
  }
}

export default AccountPanel
