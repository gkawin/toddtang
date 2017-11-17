import React from 'react'
import { Visibility } from 'semantic-ui-react'
import { signup } from 'app-services'

import Footer from '../../homepage/front-page/Footer.jsx'
import FixedMenu from '../../homepage/front-page/FixedMenu.jsx'
import Jumbotron from '../../homepage/front-page/Jumbotron.jsx'

class HomePage extends React.PureComponent {
  state = { visible: false }
  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })
  render () {
    console.log(signup({ 'hahaha': 'dadada' }))
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
        <Footer />
      </div>
    )
  }
}

export default HomePage
