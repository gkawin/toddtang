import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Segment } from 'semantic-ui-react'

class AccountProfilePanel extends React.PureComponent {
  state = { activeTab: 'setting' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeTab: name })
  }

  render () {
    return (
      <div>
        <Menu tabular attached='top'>
          <Menu.Item name='setting' active={this.state.activeTab === 'setting'} onClick={this.handleItemClick} />
          <Menu.Item name='profile' active={this.state.activeTab === 'profile'} onClick={this.handleItemClick} />
        </Menu>
        <Segment attached data-tab='setting'>
          <div>setting={this.state.activeTab === 'setting'}</div>
        </Segment>
        <Segment attached active={this.state.activeTab === 'profile'}>
          <div>profile={this.state.activeTab === 'profile'}</div>
        </Segment>
      </div>

    )
  }
}

export default AccountProfilePanel
