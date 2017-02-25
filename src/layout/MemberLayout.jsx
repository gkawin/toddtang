import React from 'react'

import Layout from './Layout.jsx'

class MemberLayout extends React.Component {
  render () {
    return (
      <Layout>
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
