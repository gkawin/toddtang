import React from 'react'
import { Visibility } from 'semantic-ui-react'

import HomepageFooter from '../../homepage/HomepageFooter.jsx'
import FixedMenu from '../../homepage/FixedMenu.jsx'
import Jumbotron from '../../homepage/Jumbotron.jsx'

class HomePage extends React.PureComponent {
  state = { visible: false }
  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })
  render () {
    return (
      <div>
        { this.state.visible ? <FixedMenu /> : null }
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Jumbotron />
        </Visibility>
        <HomepageFooter />
      </div>
    )
  }
}

export default HomePage
