import React from 'react'

import Layout from './Layout.jsx'
import MemberTopNav from '../member-pages/MemberTopNav.jsx'

class MemberLayout extends React.Component {
  render () {
    return (
      <Layout
        top={(<MemberTopNav />)}
      >
        <div className='user-layout'>
          {this.props.children}
        </div>
      </Layout>
    )
  }
}

MemberLayout.propTypes = {
  children: React.PropTypes.node
}

export default MemberLayout
