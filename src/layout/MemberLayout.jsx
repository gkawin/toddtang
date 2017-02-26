import React from 'react'

import Layout from './Layout.jsx'
import MemberTopNav from '../member-pages/MemberTopNav.jsx'
import MemberLeftMenu from '../member-pages/MemberLeftMenu.jsx'

class MemberLayout extends React.Component {
  render () {
    return (
      <Layout top={(<MemberTopNav />)}>
        <MemberLeftMenu />
        {this.props.children}
      </Layout>
    )
  }
}

MemberLayout.propTypes = {
  children: React.PropTypes.node
}

export default MemberLayout
