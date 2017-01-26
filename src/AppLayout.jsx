import React from 'react'

import Layout from './layout/Layout.jsx'
import TopNav from './top-nav/TopNav.jsx'

class AppLayout extends React.Component {
  render () {
    return (
      <Layout
        top={(<div className='app__top-nav'><TopNav /></div>)}
      >
        {this.props.children}
      </Layout>
    )
  }
}

AppLayout.propTypes = {
  children: React.PropTypes.node.isRequired
}

export default AppLayout
