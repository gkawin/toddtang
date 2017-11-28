import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Container } from 'semantic-ui-react'

class AccountSettings extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    activeIndex: PropTypes.number,
  }

  static defaultProps () { return ({ activeIndex: -1 }) }

  state = { activeIndex: undefined }

  componentDidMount = () => {
    this.handleClick(
      { preventDefault: () => { } },
      { index: this.props.activeIndex }
    )
  }

  toggleable (index) {
    const activeIndex = this.state.activeIndex
    return (activeIndex === index) ? -1 : index
  }

  handleClick = (e, { index }) => {
    e.preventDefault()
    this.setState({ activeIndex: this.toggleable(index) })
  }

  renderAccordSection = (component, idx) => {
    return (
      <div>
        <Accordion.Title
          active={this.state.activeIndex === idx}
          content={component.props.title || ''}
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
        <Accordion fluid>
          {React.Children.map(this.props.children, this.renderAccordSection)}
        </Accordion>
      </div>
    )
  }
}

export default AccountSettings
