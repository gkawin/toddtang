import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Segment } from 'semantic-ui-react'

class AccountProfilePanel extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }
  state = { activeTab: 'Setting' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeTab: name })
  }

  renderTabContent () {
    return React.Children.toArray(this.props.children).map((child, idx) => {
      if (this.state.activeTab === child.props.name) {
        return (
          <div key={idx} className={`${child.props.name}__content`}>
            {child}
          </div>
        )
      }
    })
  }

  renderTabs = () => {
    return React.Children.toArray(this.props.children).map((child, idx) => {
      return (
        <Menu.Item
          key={idx}
          name={child.props.name}
          active={this.state.activeTab === child.props.name}
          onClick={this.handleItemClick}
        />
      )
    })
  }

  render () {
    return (
      <div className={this.props.className}>
        <Menu tabular attached='top'>
          {this.renderTabs()}
        </Menu>
        <Segment attached='bottom'>
          {this.renderTabContent()}
        </Segment>
      </div>

    )
  }
}

export default AccountProfilePanel
